import React, { useState } from 'react';
import { Modal, Button, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const ModalExample = (props) => {
    const [isVisible, changeVisible] = useState(false);
    const [isVisible2, changeVisible2] = useState(false);
    const [isVisible3, changeVisible3] = useState(false);
    return (<>
        <h1>Modal</h1>
        <p>The Modal is a dialog box/popup window that is displayed on top of the current page</p>
        <CodeAndExample example={<>
            <Button onClick={() => changeVisible(true)}>Click to show modal</Button>
            <Modal open={isVisible} onClose={() => changeVisible(false)}>
                This is simple modal
            </Modal>
        </>} code={`
<>
    <Modal open={isVisible} onClose={() => changeVisible(false)}>
        This is simple modal
    </Modal>
</>`}/>
        <p>Modal with custom close button</p>
        <CodeAndExample example={<>
            <Button onClick={() => changeVisible2(true)}>Click to show modal</Button>
            <Modal closeElement={<span style={{ float: "right" }}>close</span>} open={isVisible2} onClose={() => changeVisible2(false)}>
                This is simple modal with custom close button
            </Modal>
        </>} code={`
<>
    <Modal open={isVisible} closeElement={<span style={{float: "right"}}>close</span>} onClose={() => changeVisible(false)}>
        This is simple modal with custom close button
    </Modal>
</>`}/>
        <p>you can disable outside click listener with <b>outsideListener</b> prop</p>
        <CodeAndExample example={<>
            <Button onClick={() => changeVisible3(true)}>Click to show modal</Button>
            <Modal outsideListener={false} open={isVisible3} onClose={() => changeVisible3(false)}>
                This is simple modal without outside click listener
            </Modal>
        </>} code={`
<>
    <Modal open={isVisible} outsideListener={false} onClose={() => changeVisible(false)}>
        This is simple modal without outside click listener
    </Modal>
</>`}/>

        <h3>Props</h3>
        <Table columns={[{
            name: "Name",
            selector: "name",
        }, {
            name: "Type",
            selector: "type"
        }, {
            name: "Default",
            selector: "default"
        }]} data={[{
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
    ]}>

        </Table>

        </>);
};
export default ModalExample;
