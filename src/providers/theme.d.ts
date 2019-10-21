import CSS from 'csstype';
export default interface theme {
    components? : {
        [key:string] : componentTheme
    },
    colors ? : themeColors
}

export interface componentTheme {
    style?: {
        [key:string] : CSS.Properties
    },
    className? : string
}

export interface themeColors {
    primary? : string
    secondary? : string
}