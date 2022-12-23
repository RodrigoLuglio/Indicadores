export const getStatusColor = (term, status) => {
    var color;
    switch (status.toLowerCase()) {
        case "aprovado":
            color = 'blue1'
            break;
        case "finalizado":
            color = 'green_mid2'
            break;
        case "verificacao":
            color = '[#0177FB]'
            break;
        case "incompleto":
            color = 'orange'
            break;
        case "sem informação":
            color = 'red1'
            break;
        default:
            color = '[#ffffff]'
            break;
    }

    return term + '-' + color;
}