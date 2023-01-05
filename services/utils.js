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

export const getDepartamentosArrObject = () => {
    return [
        { value: 1, label: 'Administrativo'} ,
        { value: 2, label: 'Atacado'} ,
        { value: 3, label: 'Atendimento ao cliente'} ,
        { value: 4, label: 'Auditoria'} ,
        { value: 5, label: 'Comercial'} ,
        { value: 6, label: 'Comunicação'} ,
        { value: 7, label: 'Contabilidade'} ,
        { value: 8, label: 'Controladoria'} ,
        { value: 9, label: 'Crédito'} ,
        { value: 10, label: 'Desenvolvimento de negócios'} ,
        { value: 11, label: 'Estratégia'} ,
        { value: 12, label: 'Exportação'} ,
        { value: 13, label: 'Financeiro	'} ,
        { value: 14, label: 'Garantia de Qualidade'} ,
        { value: 15, label: 'Importação'} ,
        { value: 16, label: 'Inteligência de Mercado'} ,
        { value: 17, label: 'Legal'} ,
        { value: 18, label: 'Logística'} ,
        { value: 19, label: 'Manutenção'} ,
        { value: 20, label: 'Marketing'} ,
        { value: 21, label: 'Operações'} ,
        { value: 22, label: 'Pesquisa e Desenvolvimento	'} ,
        { value: 23, label: 'Planejamento'} ,
        { value: 24, label: 'Planejamento Financeiro'} ,
        { value: 25, label: 'Processos	'} ,
        { value: 26, label: 'Produção'} ,
        { value: 27, label: 'Projetos'} ,
        { value: 28, label: 'Recursos Humanos'} ,
        { value: 29, label: 'Seguros	'} ,
        { value: 30, label: 'Tesouraria'} ,
        { value: 31, label: 'TI – Tecnologia da Informação'} ,
        { value: 32, label: 'Treinamento e Desenvolvimento'} ,
        { value: 33, label: 'Tributário, Fiscal'} ,
        { value: 34, label: 'Varejo'} ,
        { value: 35, label: 'Vendas'},
    ];
}


export const getDepartamentoLabel = (deparatamentoId) => getDepartamentosArrObject().filter(dep => dep.value == deparatamentoId)[0].label