import React from 'react';
import CodeAndExample from '../CodeAndExample';
import { Tag, Table } from '../../components';
const TagExample = (props) => {
    return (<>
            <h1>Tag</h1>
            <p>Tag is simple marker</p>
            <pre className="import-section">
                {`import {Tag} from 'painless-ui/components'`}
            </pre>
            <CodeAndExample code={`<Tag>simple tag</Tag>`} example={<>
                <Tag>simple tag</Tag>
            </>}/>
            <h3>addons</h3>
            <p>addons is title for tag</p>
            <CodeAndExample code={`<Tag addons={"+1"}>likes</Tag>`} example={<>
                <Tag addons={"+1"}>likes</Tag>
            </>}/>
            <h3>custom tag</h3>
            <p>you can customize tag using style and addOnsStyle props</p>
            <CodeAndExample code={`
<>
    <Tag addons={"+1"}>likes</Tag>
</>`} example={<>
                <Tag style={{ fontWeight: "bold" }} addons={"+1"}>likes</Tag>
                <Tag style={{ fontWeight: "bold" }} addOnsStyle={{ backgroundColor: "red" }} addons={"-1"}>likes</Tag>
            </>}/>
        <h3>props</h3>
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
            name: "style",
            type: "object",
            default: "-"
        },
        {
            name: "addOnsStyle",
            type: "object",
            default: "-"
        },
    ]}></Table>
        </>);
};
export default TagExample;
