import theme from "./theme";

const defaultTheme:theme = {
    components : {
        Accordion: {
            className: 'theme-default-accordion ',
            style: {
                title: {
                    backgroundColor: '#eeeeeeb8',
                    color: 'black',
                    fontSize: '1.3rem'
                },
                panel: {
                    backgroundColor: 'white',
                    color : 'black'
                }
            }
        },
        AccordionGroup: {
            className: 'theme-default-accordion-group',
            style : {
                container : {
                    padding : '10px'
                }
            }
        },
        Badge: {
            className: 'theme-default-badge',
            style:  {
                container : {
                    backgroundColor: '#23d160',
                    color: 'white',
                    borderColor : '#23d160',
                }
            }
            
        },
        Breadcrumb: {
            className: 'theme-default-breadcrumb',
            style: {
                container: {
                    
                }
            }
        },
        Button : {
            className: 'theme-default-button',
            style: {
                background : {

                },
                outline : {
                    
                },
                text : {

                }
            }
        },
        ButtonGroup : {
            className : 'theme-default-button-group'
        },
        Checkbox : {
            className : 'theme-default-checkbox'
        },
        Input: {
            className: 'theme-default-input'
        },
        NavBar: {
            className: 'theme-default-navbar'
        },
        Radio: {
            className: 'theme-default-radio'
        },
        Slider: {
            className: 'theme-default-slider'
        }
    },
    colors: {
        primary : '#1976d2',
        secondary: 'white'
    }
}

export default defaultTheme;