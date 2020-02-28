"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
const mailspring_component_kit_1 = require("mailspring-component-kit");
class MyGtg extends mailspring_exports_1.React.Component {
    _toGtg() {
        // Function calling GTG via dbus
        var DBus = require("dbus");
        var bus = DBus.getBus('session');
        bus.getInterface('org.gnome.GTG', '/org/gnome/GTG', 'org.gnome.GTG', function (err, iface) {
            if (err) {
                return console.log(err);
            }
            iface.OpenNewTask("Test from NodeJS", "This is the body", { timeout: 10 }, function (err, result) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZ3RnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LWd0Zy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBaUU7QUFDakUsdUVBQXFEO0FBR3JELE1BQXFCLEtBQU0sU0FBUSwwQkFBSyxDQUFDLFNBQVM7SUFHaEQsTUFBTTtRQUNGLGdDQUFnQztRQUNoQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSztZQUNwRixJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDMUI7WUFDSixLQUFLLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFDLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVMsR0FBRyxFQUFFLE1BQU07Z0JBQ3ZGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsY0FBYztRQUNaLHFEQUFxRDtRQUNyRCxPQUFNLENBQ04seUNBQUMsb0NBQVMsSUFDTixHQUFHLEVBQUMscUNBQXFDLEVBQ3pDLElBQUksRUFBRSxvQ0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQ2hDLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osMkJBQTJCO1FBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxPQUFPLHFEQUNLLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsS0FBSyxFQUFDLHVCQUF1QixFQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFDZixPQUFPLENBQ1QsQ0FBQTtJQUNqQixDQUFDOztBQXBDSCx3QkFxQ0M7QUFwQ1EsaUJBQVcsR0FBRyxPQUFPLENBQUM7QUFzQy9CLDREQUE0RDtBQUM1RCw4REFBOEQ7QUFDOUQsMkRBQTJEO0FBQzNELGdCQUFnQjtBQUNoQixLQUFLLENBQUMsZUFBZSxHQUFHO0lBQ3RCLEtBQUssRUFBRSxDQUFDO0lBQ1IsVUFBVSxFQUFFLENBQUM7Q0FDZCxDQUFDIn0=