import React, { useState } from 'react';
import { Modal, Button, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const ModalExample = (props) => {
    const [isVisible, changeVisible] = useState(false);
    const [isVisible2, changeVisible2] = useState(false);
    const [isVisible3, changeVisible3] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Modal"),
        React.createElement("p", null, "The Modal is a dialog box/popup window that is displayed on top of the current page"),
        React.createElement("pre", { className: "import-section" }, `import {Modal} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => changeVisible(true) }, "Click to show modal"),
                React.createElement(Modal, { open: isVisible, onClose: () => changeVisible(false) }, "This is simple modal")), code: `
<>
    <Modal open={isVisible} onClose={() => changeVisible(false)}>
        This is simple modal
    </Modal>
</>` }),
        React.createElement("p", null, "Modal with custom close button"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => changeVisible2(true) }, "Click to show modal"),
                React.createElement(Modal, { closeElement: React.createElement("span", { style: { float: "right" } }, "close"), open: isVisible2, onClose: () => changeVisible2(false) }, "This is simple modal with custom close button")), code: `
<>
    <Modal open={isVisible} closeElement={<span style={{float: "right"}}>close</span>} onClose={() => changeVisible(false)}>
        This is simple modal with custom close button
    </Modal>
</>` }),
        React.createElement("p", null,
            "you can disable outside click listener with ",
            React.createElement("b", null, "outsideListener"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => changeVisible3(true) }, "Click to show modal"),
                React.createElement(Modal, { outsideListener: false, open: isVisible3, onClose: () => changeVisible3(false) }, "This is simple modal without outside click listener")), code: `
<>
    <Modal open={isVisible} outsideListener={false} onClose={() => changeVisible(false)}>
        This is simple modal without outside click listener
    </Modal>
</>` }),
        React.createElement("h3", null, "Props"),
        React.createElement(Table, { columns: [{
                    name: "Name",
                    selector: "name",
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: "className",
                    type: "string",
                    default: "-"
                },
                {
                    name: "open",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "onClose",
                    type: "function",
                    default: '-'
                },
                {
                    name: "closeElement",
                    type: "any",
                    default: '<span className="close-button">&times;</span>'
                },
                {
                    name: "outsideListener",
                    type: "bool",
                    default: 'true'
                },
                {
                    name: "[key:string]",
                    type: "any",
                    default: "-"
                }
            ] })));
};
export default ModalExample;
