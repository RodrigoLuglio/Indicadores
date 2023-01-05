import axios from "axios";
import qs from "qs";

const api = "https://api.rlabs.com.br/api/";

export async function getRelatorios(jwt) {
    const query = qs.stringify(
        {
            populate: {
                indicadores: {
                    populate: {
                        conteudo: {
                            populate: {
                                campos: { populate: "*" },
                            },
                        },
                        respostas: { populate: "*" },
                    },
                },
                organizacao: { populate: "*" },
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    try {
        const res = await axios.get(api + "relatorios?" + query, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return res.data;
    } catch (error) {
        return error;
    }
}
export async function addUpItem(jwt, collection, dados) {
    if (dados.id == "") {
        dados.id = null;
        try {
            const res = await axios.post(
                api + collection,
                {
                    data: dados,
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            return res.data;
        } catch (error) {
            console.log("Ocorreu um erro: ", error);
            return error;
        }
    } else {
        try {
            const res = await axios.put(
                api + collection + "/" + dados.id,
                {
                    data: dados,
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            return res.data;
        } catch (error) {
            console.log("Ocorreu um erro: ", error);
            return error;
        }
    }
}

export async function deleteItem(jwt, collection, id) {
    try {
        const res = await axios.delete(api + collection + "/" + id, {
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
