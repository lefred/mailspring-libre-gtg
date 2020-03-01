import { React, FocusedContentStore, DatabaseStore, Message } from "mailspring-exports";
import { RetinaImg } from 'mailspring-component-kit';
import { convertToPlainText, convertFromHTML } from './conversion';

const DBus = require("dbus");
const bus = DBus.getBus('session');


export default class MyGtg extends React.Component {
  static displayName = "MyGtg";

  constructor(props) {
    super(props);
  }


  _toGtg() {
      // Function calling GTG via dbus
      bus.getInterface('org.gnome.GTG', '/org/gnome/GTG', 'org.gnome.GTG', function(err, iface) {
        if (err) {
            return console.log(err)
        }
        // Should get the message from the focused/active message in MessageList
        const thread = FocusedContentStore.focused('thread');
        var topic = thread.subject
        const query = DatabaseStore.findBy(Message, { threadId: thread.id })
        .order(Message.attributes.date.descending())
        .limit(1);
        query.include(Message.attributes.body);        
        DatabaseStore.run(query).then(async msg => {
        //var body = msg.plaintext ? msg.body : convertToPlainText(convertFromHTML(msg.body)).trim()
        var body = msg.plaintext ? msg.body : msg.snippet
	      iface.OpenNewTask(topic, body, { timeout: 10 }, function(err, result) {
              return console.log("Task added in GTG");
        });        
      })
      });
  }

  _renderContent() {
    // Create the button's image on with the right style 
    return(
    <RetinaImg
        url="mailspring://gtg/assets/task@2x.png"
        mode={RetinaImg.Mode.ContentIsMask}
        />
    );
  }

  render() {
    // Create the button itself
    const content = this._renderContent();
    return <button
                className="btn btn-toolbar"
                title="Create a new GTG task"
                onClick={this._toGtg} >
                    {content}
          </button>
  }
}

// Providing container styles tells the app how to constrain
// the column your component is being rendered in. The min and
// max size of the column are chosen automatically based on
// these values.
MyGtg.containerStyles = {
  order: 0,
  flexShrink: 0
};
