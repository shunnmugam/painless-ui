import React from 'react';
import CodeAndExample from '../CodeAndExample';
import { Tag, Table } from '../../components';
const TagExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Tag"),
        React.createElement("p", null, "Tag is simple marker"),
        React.createElement("pre", { className: "import-section" }, `import {Tag} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { code: `<Tag>simple tag</Tag>`, example: React.createElement(React.Fragment, null,
                React.createElement(Tag, null, "simple tag")) }),
        React.createElement("h3", null, "addons"),
        React.createElement("p", null, "addons is title for tag"),
        React.createElement(CodeAndExample, { code: `<Tag addons={"+1"}>likes</Tag>`, example: React.createElement(React.Fragment, null,
                React.createElement(Tag, { addons: "+1" }, "likes")) }),
        React.createElement("h3", null, "custom tag"),
        React.createElement("p", null, "you can customize tag using style and addOnsStyle props"),
        React.createElement(CodeAndExample, { code: `
<>
    <Tag addons={"+1"}>likes</Tag>
</>`, example: React.createElement(React.Fragment, null,
                React.createElement(Tag, { style: { fontWeight: "bold" }, addons: "+1" }, "likes"),
                React.createElement(Tag, { style: { fontWeight: "bold" }, addOnsStyle: { backgroundColor: "red" }, addons: "-1" }, "likes")) }),
        React.createElement("h3", null, "props"),
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
                    name: "style",
                    type: "object",
                    default: "-"
                },
                {
                    name: "addOnsStyle",
                    type: "object",
                    default: "-"
                },
            ] })));
};
export default TagExample;
