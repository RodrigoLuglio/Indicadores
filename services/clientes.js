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


export async function addUpCliente(jwt, dados) {
    if(dados.id == null) {
        const password = generatePassword(12);
        console.log('password', password);
        console.log('dados: ', dados);
        console.log('dados.nome: ', slugify(dados.nome));
        try {
            const res = await axios.post(`${strapiUrl}/api/users`, 
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

            const user = res.data.id;
            if(user) {
                const resOrg = await axios.post(`${strapiUrl}/api/organizacoes`,
                    {
                        data: {
                            nome: dados.organizacao,
                            users: [user],
                        }
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        }
                    }
                )
                console.log('resOrg', resOrg);
            }
            return res.data;
        } catch (error) {
            return error;
        }
    }
}



// export async function getDepartamentos(jwt, role) {
//     try {
//         const { data } = await axios.get(`${strapiUrl}/api/departamentos?fields[0]=nome`, {
//             headers: {
//                 Authorization: `Bearer ${jwt}`,
//             },
//         });
//         return data;
//     } catch (error) {
//         return error;
//     }
// }