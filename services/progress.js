export const marks = [
    { value: 10, label: '10%' },
    { value: 20, label: '20%' },
    { value: 30, label: '30%' },
    { value: 40, label: '40%' },
    { value: 50, label: '50%' },
    { value: 60, label: '60%' },
    { value: 70, label: '70%' },
    { value: 80, label: '80%' },
    { value: 90, label: '90%' },
    { value: 100, label: '100%' },
];

export const progressStyles = (theme) => {
    return {
        track: {
            backgroundColor: theme.colors.orange[0],
        },
        bar: {
            backgroundColor: theme.colors.orange[0],
        },
        mark: {
            width: 11,
            height: 11,
            borderRadius: 6,
            transform: 'translateX(-7px) translateY(-1px)',
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : '#E3EAF4',
        },
        markFilled: {
            borderColor: theme.colors.orange[0],
        },
        markLabel: { fontSize: 11, marginBottom: 5, marginTop: 3 },
        thumb: {
            height: 16,
            width: 16,
            backgroundColor: theme.white,
            borderWidth: 3,
            borderColor: theme.colors.orange[0],
            boxShadow: theme.shadows.sm,
        }
    }
}