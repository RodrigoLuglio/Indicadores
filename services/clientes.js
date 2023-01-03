import axios from "axios";
import { slugify, generatePassword } from "./utils";
// import qs from "qs";

// const strapiUrl = process.env.STRAPI_URL;
const strapiUrl = "https://api.rlabs.com.br";

export async function getUsersByRole(jwt, role) {
    try {
        const org = `populate[organizacao][fields][0]=nome&`;
        const roleq = `populate[role][fields][0]=name&`;
        const { data } = await axios.get(`${strapiUrl}/api/users?fields[0]=name&fields[1]=email&${roleq + org}&filters[role][name][$eq]=${role}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}

// reponsalve p adicionar usuário CAdmin (addUpCjiente) e cliente (AddUpEmployees)
export async function addUser (jwt, dados) {
    const password = generatePassword(12);

    try {
        const { data } = await axios.post(`${strapiUrl}/api/users`, 
            {
                username: slugify(dados?.nome) + generatePassword(4),
                password: password,
                role: dados.role,
                email: dados.email,
                name: dados.nome
            },
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
    console.log('addUpEmployees jwt: ', jwt);
    console.log('addUpEmployees dados: ', dados);
        dados.employees.map(async (item, index) => {
            const password = generatePassword(12);
            const formatedDados = {
                username: slugify(item.nome) + generatePassword(4),
                password: password,
                role: 5,
                email: item.email,
                name: item.nome
            };
            console.log('formatedDados :', formatedDados);
            
            try{
                // TODO (error): DANDO ERRO DE DATA NULL
                const resUser = await axios.post(`${strapiUrl}/api/users`,
                                { data: formatedDados },{ headers: { Authorization: `Bearer ${jwt}`, }}
                );
                console.log(`data ${index} :`, resUser); 
                return resUser;
            }catch(error) {
                return error;
            }
        })


        console.log('dados:', dados);
        console.log('length:', dados.employees.length);
        // console.log('const userClient: ', userClient);
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


