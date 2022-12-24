export const PresenceTheme = (colorScheme) => {
    return { 
        colorScheme: colorScheme,
        colors: {
            orange: ['#EE7416', '#C24B32'],
            green: ['#CCE3E9','#F4F8F8','#0994A7'],
            grey: ['#596983', '#A5B4CB'],
        },
        components: {
            InputWrapper: {
                styles: (theme) => ({
                    label: {
                        color: theme.colors.grey[0],
                        fontStyle: 'bold',
                        fontSize: '14px',
                        paddingLeft: '6px',
                        lineHeight: '1.35',
                        marginBottom: '5px'
                    },
                    root: {
                        marginBottom: '30px',
                    }
                }),
            },
            Input: {
                styles: (theme) => ({
                    input: { 
                        borderColor: theme.colors.green[0],
                        height: '34px',
                        minHeight: '20px',
                        fontFamily: 'Gotham Medium',
                        fontSize: '14px',
                        color: "#388286",
                        
    
                        '&:focus' : {
                            backgroundColor: theme.colors.green[1],
                            borderColor: theme.colors.green[0],
                            color: theme.colors.green[2],
                        },
    
                        '&::placeholder' : {
                            color: theme.colors.grey[1],
                            fontStyle: 'bold',
                            fontSize: '13px',
                        },
                    },
                }),
            },
            TextInput: {
                styles: (theme) => ({
                    // input: { marginBottom: '20px' },
                })
            },
            UnstyledButton: {
                styles: (theme) => ({
                    backgroundColor: theme.colors.green[2],
                    color: 'white',
                    fontFamily: 'Gotham Medium',
                    fontSize: '14px',
                })
            }
    
        },
    }
}

export default PresenceTheme;



