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


export const slugify = (text, separator = '') => {
    return text.toString()
    .normalize('NFD')                   // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '')   // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')   // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator);
}

export const generatePassword = (length) => {
    var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return new Array(length).fill(0).map(x => (function(chars) { 
        let umax = Math.pow(2, 32), r = new Uint32Array(1), max = umax - (umax % chars.length); 
        do { crypto.getRandomValues(r); } 
        while(r[0] > max); 
        return chars[r[0] % chars.length]; 
    })(pwdChars)).join('');
}


export const getDepartamentos = () => {
    return [
        'Administrativo', 
        'Atacado', 
        'Atendimento ao cliente', 
        'Auditoria', 
        'Comercial', 
        'Comunicação', 
        'Contabilidade', 
        'Controladoria', 
        'Crédito', 
        'Desenvolvimento de negócios', 
        'Estratégia', 
        'Exportação', 
        'Financeiro	', 
        'Garantia de Qualidade', 
        'Importação', 
        'Inteligência de Mercado', 
        'Legal', 
        'Logística', 
        'Manutenção', 
        'Marketing', 
        'Operações', 
        'Pesquisa e Desenvolvimento	', 
        'Planejamento', 
        'Planejamento Financeiro', 
        'Processos	', 
        'Produção', 
        'Projetos', 
        'Recursos Humanos', 
        'Seguros	', 
        'Tesouraria', 
        'TI – Tecnologia da Informação', 
        'Treinamento e Desenvolvimento', 
        'Tributário, Fiscal', 
        'Varejo', 
        'Vendas' 
    ];
}