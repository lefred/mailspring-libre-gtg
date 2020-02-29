"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
const mailspring_component_kit_1 = require("mailspring-component-kit");
class MyGtg extends mailspring_exports_1.React.Component {
    constructor(props) {
        super(props);
    }
    _toGtg() {
        // Function calling GTG via dbus
        var DBus = require("dbus");
        var bus = DBus.getBus('session');
        bus.getInterface('org.gnome.GTG', '/org/gnome/GTG', 'org.gnome.GTG', function (err, iface) {
            if (err) {
                return console.log(err);
            }
            // Should get the message from the focused/active message in MessageList
            const thread = mailspring_exports_1.FocusedContentStore.focused('thread');
            var topic = thread.subject;
            var body = thread;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZ3RnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LWd0Zy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBZ0U7QUFDaEUsdUVBQXFEO0FBR3JELE1BQXFCLEtBQU0sU0FBUSwwQkFBSyxDQUFDLFNBQVM7SUFHaEQsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUdELE1BQU07UUFDRixnQ0FBZ0M7UUFDaEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFVBQVMsR0FBRyxFQUFFLEtBQUs7WUFDdEYsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQzFCO1lBQ0Qsd0VBQXdFO1lBQ3hFLE1BQU0sTUFBTSxHQUFHLHdDQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFBO1lBQzFCLElBQUksSUFBSSxHQUFJLE1BQU0sQ0FBQTtZQUNuQixLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBUyxHQUFHLEVBQUUsTUFBTTtnQkFDN0QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxjQUFjO1FBQ1oscURBQXFEO1FBQ3JELE9BQU0sQ0FDTix5Q0FBQyxvQ0FBUyxJQUNOLEdBQUcsRUFBQyxxQ0FBcUMsRUFDekMsSUFBSSxFQUFFLG9DQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FDaEMsQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSiwyQkFBMkI7UUFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLE9BQU8scURBQ0ssU0FBUyxFQUFDLGlCQUFpQixFQUMzQixLQUFLLEVBQUMsdUJBQXVCLEVBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUNmLE9BQU8sQ0FDVCxDQUFBO0lBQ2pCLENBQUM7O0FBN0NILHdCQThDQztBQTdDUSxpQkFBVyxHQUFHLE9BQU8sQ0FBQztBQStDL0IsNERBQTREO0FBQzVELDhEQUE4RDtBQUM5RCwyREFBMkQ7QUFDM0QsZ0JBQWdCO0FBQ2hCLEtBQUssQ0FBQyxlQUFlLEdBQUc7SUFDdEIsS0FBSyxFQUFFLENBQUM7SUFDUixVQUFVLEVBQUUsQ0FBQztDQUNkLENBQUMifQ==