import { React, MessageStore } from "mailspring-exports";
import { RetinaImg } from 'mailspring-component-kit';


export default class MyGtg extends React.Component {
  static displayName = "MyGtg";

  _toGtg() {
      // Function calling GTG via dbus
      var DBus = require("dbus");
      var bus = DBus.getBus('session');
      bus.getInterface('org.gnome.GTG', '/org/gnome/GTG', 'org.gnome.GTG', function(err, iface) {
        if (err) {
            return console.log(err)
        }
        // Should get the message from the focused/active message in MessageList
        var topic = "Yet to find ;)"
        var body = "Yet to find too..."
	      iface.OpenNewTask(topic, body, { timeout: 10 }, function(err, result) {
              return console.log("Task added in GTG");
        });
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
