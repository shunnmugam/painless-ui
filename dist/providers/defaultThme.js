const defaultTheme = {
    components: {
        Accordion: {
            className: 'theme-default-accordion ',
            style: {
                title: {
                    backgroundColor: '#eeeeeeb8',
                    color: 'black',
                    fontSize: '1.5rem'
                },
                panel: {
                    // backgroundColor: 'red',
                    color: 'white'
                }
            }
        },
        AccordionGroup: {
            className: 'theme-default-accordion-group',
            style: {
                container: {
                    padding: '10px'
                }
            }
        },
        Badge: {
            className: 'theme-default-badge',
            style: {
                container: {
                    backgroundColor: '#23d160',
                    color: 'white',
                    borderColor: '#23d160',
                }
            }
        },
        Breadcrumb: {
            className: 'theme-default-breadcrumb',
            style: {
                container: {}
            }
        }
    },
    colors: {
        primary: '#1976d2',
        secondary: 'white'
    }
};
export default defaultTheme;
