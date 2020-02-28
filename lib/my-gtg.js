"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
const mailspring_component_kit_1 = require("mailspring-component-kit");
class MyGtg extends mailspring_exports_1.React.Component {
    _toGtg() {
        // Function calling GTG via dbus
        var DBus = require("dbus");
        //var bus = DBus.getBus('session');
        //bus.getInterface('org.gnome.GTG', '/org/gnome/GTG', 'org.gnome.GTG', function(err, iface) {
        //    if (err) {
        //        return console.log(err)
        //    }
        //    iface.OpenNewTask("Test from NodeJS","This is the body", { timeout: 10 }, function(err, result) {
        //        return console.log("Task added in GTG");
        //    });
        //});
        return console.log("Task added in GTG");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZ3RnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LWd0Zy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBaUU7QUFDakUsdUVBQXFEO0FBR3JELE1BQXFCLEtBQU0sU0FBUSwwQkFBSyxDQUFDLFNBQVM7SUFHaEQsTUFBTTtRQUNGLGdDQUFnQztRQUNoQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsbUNBQW1DO1FBQ25DLDZGQUE2RjtRQUM3RixnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLE9BQU87UUFDVix1R0FBdUc7UUFDcEcsa0RBQWtEO1FBQ2xELFNBQVM7UUFDVCxLQUFLO1FBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGNBQWM7UUFDWixxREFBcUQ7UUFDckQsT0FBTSxDQUNOLHlDQUFDLG9DQUFTLElBQ04sR0FBRyxFQUFDLHFDQUFxQyxFQUN6QyxJQUFJLEVBQUUsb0NBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUNoQyxDQUNMLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLDJCQUEyQjtRQUMzQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsT0FBTyxxREFDSyxTQUFTLEVBQUMsaUJBQWlCLEVBQzNCLEtBQUssRUFBQyx1QkFBdUIsRUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQ2YsT0FBTyxDQUNULENBQUE7SUFDakIsQ0FBQzs7QUFyQ0gsd0JBc0NDO0FBckNRLGlCQUFXLEdBQUcsT0FBTyxDQUFDO0FBdUMvQiw0REFBNEQ7QUFDNUQsOERBQThEO0FBQzlELDJEQUEyRDtBQUMzRCxnQkFBZ0I7QUFDaEIsS0FBSyxDQUFDLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsQ0FBQztJQUNSLFVBQVUsRUFBRSxDQUFDO0NBQ2QsQ0FBQyJ9