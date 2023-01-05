import axios from "axios";
import { slugify, generatePassword } from "./utils";
// import qs from "qs";

// const strapiUrl = process.env.STRAPI_URL;
const strapiUrl = "https://api.rlabs.com.br";


// retorna os clientes
export async function getUsersByRole(jwt, role) {
    try {
        const org = `populate[organizacao][fields][0]=nome&`;
        const roleq = `populate[role][fields][0]=name&`;
        const sort = `sort[0]=id:desc`;
        const { data } = await axios.get(`${strapiUrl}/api/users?fields[0]=name&fields[1]=email&${roleq + org}&filters[role][name][$eq]=${role}&${sort}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}

// retorna os funcionários
export async function getEmployees(jwt) {
    
    //const query = `populate=role,organizacao&filters[role][name][$eq]=User&sort[0]=id:desc`; // sem campos selecionados
    const query = `filters[role][name][$eq]=User&fields[0]=id&fields[1]=username&fields[2]=email&fields[3]=name&populate[role][fields][0]=id&populate[role][fields][1]=name&populate[organizacao][fields][0]=id&populate[organizacao][fields][1]=nome&populate[departamento][fields][0]=id&populate[departamento][fields][1]=nome`; // com campos selecionados
    try {
        const res = await axios.get(`${strapiUrl}/api/users?` + query, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

// reponsavel p adicionar usuário CAdmin (addUpCjiente)
export async function addUser (jwt, dados) {
    const password = generatePassword(12);
    console.log('dados', dados);
    const formatData = {
        username: slugify(dados?.nome) + generatePassword(4),
        password: password,
        role: dados.role,
        email: dados.email,
        name: dados.nome
    };
    console.log('formatData', formatData);
    // se vier dados de funcionário (só vindo de registro de funcionário)
    const employee = (dados.departamento && dados.organizacao )
        ? { organizacao: dados.organizacao,
            departamento: dados.departamento
        } : null;

    console.log('employee', employee);
    try {
        const { data } = await axios.post(`${strapiUrl}/api/users`, 
            { ...formatData, ...employee },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            },
        );
        return data;
    } catch (error) {
        return error.response.data.error;
    }
}


export async function addUpCliente(jwt, dados) {
    if(dados.id == null) {
        const user = await addUser (jwt, dados);
        console.log('const user: ', user);
        if(user.id) {
            try {
                const resOrg = await axios.post(`${strapiUrl}/api/organizacoes`,
                    {
                        data: {
                            nome: dados.organizacao,
                            users: [user.id],
                        }
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        }
                    }
                )
                return formatClienteObject(user, resOrg.data.data, 'CAdmin');
            } catch (error) {
                return error;
            }
        }

        return user;
    }
}

export async function addUpEmployees(jwt, dados) {
    console.log('## ----- [INICIO] addUpEmployees -------');
    // console.log('addUpEmployees dados: ', dados);
    // console.log('dados.length', dados.employees.length);

    let addedUsers = [];
    dados.employees.forEach(async (item, index) => {
        item.role = 5;
        item.organizacao = item.organizacao;
        item.departamento = item.departamento;
        const password = generatePassword(12);
        const formatData = formatEmployeeObject(password, item);

        try {
            const { data } = await axios.post(`${strapiUrl}/api/users`, 
                formatData,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    }
                },
            );
            console.log(`data ${index}`, data);
            addedUsers.push({
                ...data, 
                organizacao: item.organizacao, 
                departamento: item.departamento 
            });
        } catch (error) {
            return error.response.data.error;
        }
    })

    console.log('## ----- [FIM] addUpEmployees -------');
    return addedUsers;
}

function formatEmployeeObject(password, dados) {
    const formatData = {
        username: slugify(dados?.nome) + generatePassword(4),
        password: password,
        role: dados.role,
        email: dados.email,
        name: dados.nome
    };

    const employee = (dados.departamento && dados.organizacao )
        ? { organizacao: dados.organizacao,
            departamento: dados.departamento
        } : null;

    return { ...formatData, ...employee };
}

function formatClienteObject(user, organizacao, role) {
    if(role == 'CAdmin') {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: {
                id: 4, name: 'CAdmin'
            },
            organizacao: {
                id: organizacao.id,
                nome: organizacao.attributes.nome
            }
        }
    }
    return {

    }
}


export async function deleteEmployee (jwt, id) {
    try {
        const res = await axios.delete(`${strapiUrl}/api/users/` + id, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log("Ocorreu um erro: ", error);
        return error;
    }
}


export async function countUserByRole (jwt, roleid) {
    try {
        const res = await axios.get(`${strapiUrl}/api/users/count?role=` + roleid, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log("Ocorreu um erro: ", error);
        return error;
    }
}