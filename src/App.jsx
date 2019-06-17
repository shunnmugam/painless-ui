"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./App.scss");
var index_1 = require("./components/index");
var App = function () {
    var _a = react_1.useState(true), checkBoxHook = _a[0], setChecboxCheck = _a[1];
    return (<div className="App">
      <index_1.Button color="white" bgColor="#2196f3" id='ui-button-1' styleType='background' rounded>C</index_1.Button>
      
    </div>);
};
exports.default = App;
//# sourceMappingURL=App.jsx.map