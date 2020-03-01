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
            mailspring_exports_1.DatabaseStore.run(query).then(async (msg) => {
                body = encodeURIComponent(msg.snippet);
                iface.OpenNewTask(topic, msg.snippet, { timeout: 10 }, function (err, result) {
                    return console.log("Task added in GTG");
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZ3RnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LWd0Zy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBd0Y7QUFDeEYsdUVBQXFEO0FBRXJELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBR25DLE1BQXFCLEtBQU0sU0FBUSwwQkFBSyxDQUFDLFNBQVM7SUFHaEQsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUdELE1BQU07UUFDRixnQ0FBZ0M7UUFDaEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFVBQVMsR0FBRyxFQUFFLEtBQUs7WUFDdEYsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQzFCO1lBQ0Qsd0VBQXdFO1lBQ3hFLE1BQU0sTUFBTSxHQUFHLHdDQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFBO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3RCLE1BQU0sS0FBSyxHQUFHLGtDQUFhLENBQUMsTUFBTSxDQUFDLDRCQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUNuRSxLQUFLLENBQUMsNEJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUMzQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixrQ0FBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO2dCQUMxQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUN2QyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVMsR0FBRyxFQUFFLE1BQU07b0JBQ3BFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsY0FBYztRQUNaLHFEQUFxRDtRQUNyRCxPQUFNLENBQ04seUNBQUMsb0NBQVMsSUFDTixHQUFHLEVBQUMscUNBQXFDLEVBQ3pDLElBQUksRUFBRSxvQ0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQ2hDLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osMkJBQTJCO1FBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxPQUFPLHFEQUNLLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsS0FBSyxFQUFDLHVCQUF1QixFQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFDZixPQUFPLENBQ1QsQ0FBQTtJQUNqQixDQUFDOztBQWpESCx3QkFrREM7QUFqRFEsaUJBQVcsR0FBRyxPQUFPLENBQUM7QUFtRC9CLDREQUE0RDtBQUM1RCw4REFBOEQ7QUFDOUQsMkRBQTJEO0FBQzNELGdCQUFnQjtBQUNoQixLQUFLLENBQUMsZUFBZSxHQUFHO0lBQ3RCLEtBQUssRUFBRSxDQUFDO0lBQ1IsVUFBVSxFQUFFLENBQUM7Q0FDZCxDQUFDIn0=