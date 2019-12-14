import React, { useState } from 'react';
import { TabContainer, TabGroup, Tab, TabWrapper, Button, ToastContainer, toast } from '../components';
const copyToClipboard = function (secretInfo) {
    const $body = document.getElementsByTagName('body')[0];
    const $tempInput = document.createElement('INPUT');
    $body.appendChild($tempInput);
    $tempInput.setAttribute('value', secretInfo);
    $tempInput.select();
    document.execCommand('copy');
    $body.removeChild($tempInput);
};
const CodeAndExample = (props) => {
    const [activeTab, changeActiveTab] = useState(props.defaultActive !== undefined ? props.defaultActive : 0);
    let uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    return React.createElement(React.Fragment, null,
        React.createElement(TabWrapper, null,
            React.createElement(TabGroup, { defaultActive: props.defaultActive !== undefined ? props.defaultActive : 0, onClick: (v) => {
                    changeActiveTab(v);
                } },
                React.createElement(Tab, null, "Example"),
                React.createElement(Tab, null, "Code")),
            React.createElement(TabContainer, { active: 0 === activeTab }, props.example),
            React.createElement(TabContainer, { active: 1 === activeTab },
                React.createElement("pre", { style: { display: "inline-block" } },
                    React.createElement("code", null, props.code)),
                React.createElement(Button, { onClick: () => {
                        copyToClipboard(props.code);
                        const c = React.createElement("div", null, "Copied ");
                        toast.success(c, uniqueId, {
                            title: "Info",
                            options: {
                                closeOnClick: true
                            }
                        });
                    }, style: { float: "right" }, rounded: true },
                    " ",
                    React.createElement("img", { alt: "copy", src: process.env.PUBLIC_URL + '/images/copy.svg' }),
                    " "))),
        React.createElement(ToastContainer, { containerId: uniqueId }));
};
export default CodeAndExample;
