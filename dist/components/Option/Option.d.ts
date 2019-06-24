import React from 'react';
interface OptionProps {
    children: any;
    text?: string;
    value: any;
    [key: string]: any;
}
declare const Option: React.FC<OptionProps>;
export default Option;
