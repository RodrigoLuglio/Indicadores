import axios from "axios";

const api = "https://api.rlabs.com.br/api/";

export async function getPadroes(jwt) {
    try {
        const res = await axios.get("http://api.rlabs.com.br/api/padroes", {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return res.data;
    } catch (error) {
        return error;
    }
}
export async function addUpPadrao(jwt, dados) {
    if (dados.id == "") {
        try {
            const res = await axios.post(api + "padroes", {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
                data: {
                    dados,
                },
            });
            return res.data;
        } catch (error) {
            console.log("Ocorreu um erro: ", error);
            return error;
        }
    } else {
        try {
            const res = await axios.put(api + "padroes/" + dados.id, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
                data: {
                    dados,
                },
            });
            return res.data;
        } catch (error) {
            console.log("Ocorreu um erro: ", error);
            return error;
        }
    }
}
