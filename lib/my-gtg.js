"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
const mailspring_component_kit_1 = require("mailspring-component-kit");
const DBus = require("dbus");
const bus = DBus.getBus('session');
class MyGtg extends mailspring_exports_1.React.Component {
    constructor(props) {
        super(props);
    }
    _toGtg() {
        // Function calling GTG via dbus
        bus.getInterface('org.gnome.GTG', '/org/gnome/GTG', 'org.gnome.GTG', function (err, iface) {
            if (err) {
                return console.log(err);
            }
            // Should get the message from the focused/active message in MessageList
            const thread = mailspring_exports_1.FocusedContentStore.focused('thread');
            var topic = thread.subject;
            console.log(thread.id);
            const query = mailspring_exports_1.DatabaseStore.findBy(mailspring_exports_1.Message, { threadId: thread.id })
                .order(mailspring_exports_1.Message.attributes.date.descending())
                .limit(1);
            const msg = mailspring_exports_1.DatabaseStore.run(query);
            var body = (msg && msg.body) || '';
            console.log(msg);
            console.log(msg.snippet);
            console.log(body);
            body = encodeURIComponent(msg.snippet);
            iface.OpenNewTask(topic, body, { timeout: 10 }, function (err, result) {
                return console.log("Task added in GTG");
            });
        });
    }
    _renderContent() {
        // Create the button's image on with the right style 
        return (mailspring_exports_1.React.createElement(mailspring_component_kit_1.RetinaImg, { url: "mailspring://gtg/assets/task@2x.png", mode: mailspring_component_kit_1.RetinaImg.Mode.ContentIsMask }));
    }
    render() {
        // Create the button itself
        const content = this._renderContent();
        return mailspring_exports_1.React.createElement("button", { className: "btn btn-toolbar", title: "Create a new GTG task", onClick: this._toGtg }, content);
    }
}
exports.default = MyGtg;
MyGtg.displayName = "MyGtg";
// Providing container styles tells the app how to constrain
// the column your component is being rendered in. The min and
// max size of the column are chosen automatically based on
// these values.
MyGtg.containerStyles = {
    order: 0,
    flexShrink: 0
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZ3RnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LWd0Zy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBd0Y7QUFDeEYsdUVBQXFEO0FBRXJELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBR25DLE1BQXFCLEtBQU0sU0FBUSwwQkFBSyxDQUFDLFNBQVM7SUFHaEQsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUdILE1BQU07UUFDQSxnQ0FBZ0M7UUFDaEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFVBQVMsR0FBRyxFQUFFLEtBQUs7WUFDdEYsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQzFCO1lBQ0Qsd0VBQXdFO1lBQ3hFLE1BQU0sTUFBTSxHQUFHLHdDQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFBO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3RCLE1BQU0sS0FBSyxHQUFHLGtDQUFhLENBQUMsTUFBTSxDQUFDLDRCQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUNuRSxLQUFLLENBQUMsNEJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUMzQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixNQUFNLEdBQUcsR0FBSSxrQ0FBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3ZDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFTLEdBQUcsRUFBRSxNQUFNO2dCQUM3RCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGNBQWM7UUFDWixxREFBcUQ7UUFDckQsT0FBTSxDQUNOLHlDQUFDLG9DQUFTLElBQ04sR0FBRyxFQUFDLHFDQUFxQyxFQUN6QyxJQUFJLEVBQUUsb0NBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUNoQyxDQUNMLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLDJCQUEyQjtRQUMzQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsT0FBTyxxREFDSyxTQUFTLEVBQUMsaUJBQWlCLEVBQzNCLEtBQUssRUFBQyx1QkFBdUIsRUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQ2YsT0FBTyxDQUNULENBQUE7SUFDakIsQ0FBQzs7QUFwREgsd0JBcURDO0FBcERRLGlCQUFXLEdBQUcsT0FBTyxDQUFDO0FBc0QvQiw0REFBNEQ7QUFDNUQsOERBQThEO0FBQzlELDJEQUEyRDtBQUMzRCxnQkFBZ0I7QUFDaEIsS0FBSyxDQUFDLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsQ0FBQztJQUNSLFVBQVUsRUFBRSxDQUFDO0NBQ2QsQ0FBQyJ9