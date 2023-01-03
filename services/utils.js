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

// export const getDepartamentosArrObject = () => {
//     return [
//         { value: 'Administrativo', label: 'Administrativo'} ,
//         { value: 'Atacado', label: 'Atacado'} ,
//         { value: 'Atendimento ao cliente', label: 'Atendimento ao cliente'} ,
//         { value: 'Auditoria', label: 'Auditoria'} ,
//         { value: 'Comercial', label: 'Comercial'} ,
//         { value: 'Comunicação', label: 'Comunicação'} ,
//         { value: 'Contabilidade', label: 'Contabilidade'} ,
//         { value: 'Controladoria', label: 'Controladoria'} ,
//         { value: 'Crédito', label: 'Crédito'} ,
//         { value: 'Desenvolvimento de negócios', label: 'Desenvolvimento de negócios'} ,
//         { value: 'Estratégia', label: 'Estratégia'} ,
//         { value: 'Exportação', label: 'Exportação'} ,
//         { value: 'Financeiro	', label: 'Financeiro	'} ,
//         { value: 'Garantia de Qualidade', label: 'Garantia de Qualidade'} ,
//         { value: 'Importação', label: 'Importação'} ,
//         { value: 'Inteligência de Mercado', label: 'Inteligência de Mercado'} ,
//         { value: 'Legal', label: 'Legal'} ,
//         { value: 'Logística', label: 'Logística'} ,
//         { value: 'Manutenção', label: 'Manutenção'} ,
//         { value: 'Marketing', label: 'Marketing'} ,
//         { value: 'Operações', label: 'Operações'} ,
//         { value: 'Pesquisa e Desenvolvimento	', label: 'Pesquisa e Desenvolvimento	'} ,
//         { value: 'Planejamento', label: 'Planejamento'} ,
//         { value: 'Planejamento Financeiro', label: 'Planejamento Financeiro'} ,
//         { value: 'Processos	', label: 'Processos	'} ,
//         { value: 'Produção', label: 'Produção'} ,
//         { value: 'Projetos', label: 'Projetos'} ,
//         { value: 'Recursos Humanos', label: 'Recursos Humanos'} ,
//         { value: 'Seguros	', label: 'Seguros	'} ,
//         { value: 'Tesouraria', label: 'Tesouraria'} ,
//         { value: 'TI – Tecnologia da Informação', label: 'TI – Tecnologia da Informação'} ,
//         { value: 'Treinamento e Desenvolvimento', label: 'Treinamento e Desenvolvimento'} ,
//         { value: 'Tributário, Fiscal', label: 'Tributário, Fiscal'} ,
//         { value: 'Varejo', label: 'Varejo'} ,
//         { value: 'Vendas', label: 'Vendas'} 
//     ];
// }