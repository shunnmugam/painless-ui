import React, {useState} from 'react';
import { Modal, Button, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';

const ModalExample:React.FC = (props) => {
    const [isVisible, changeVisible] = useState(false);
    return (
        <>
        <h1>Input</h1>
        <p>Input is referring </p> <pre> {"<input />"}</pre>
        <p><b>Note:</b> type prop is mandatory</p>
        <CodeAndExample example={<>
            <Button onClick={() => changeVisible(true)}>Click to show modal</Button>
            <Modal open={isVisible} onClose={() => changeVisible(false)}>
                Hai this is simple modal
            </Modal>
        </>}
        code={``} />
        </>
    )
}

export default ModalExample;