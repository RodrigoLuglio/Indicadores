import axios from "axios";
import { slugify } from "./utils";

// const strapiUrl = process.env.STRAPI_URL;
const strapiUrl = "https://api.rlabs.com.br";

export async function getUsersByRole(jwt, role) {
    try {
        const { data } = await axios.get(`${strapiUrl}/api/users?populate=role&filters[role][name][$eq]=${role}`, {
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
        const username = slugify(dados?.nome);
        try {
            const res = await axios.post(`${strapiUrl}/api/users`, 
                {
                    username: username,
                    password: 'axcd74rGG3821',
                    role: 4,
                    email: dados.email,
                    nome: dados.nome
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    }
                },
            );
            return res.data;
        } catch (error) {
            return error;
        }
    }
}
