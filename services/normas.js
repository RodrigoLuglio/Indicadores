import axios from "axios";

const api = "https://api.rlabs.com.br/api/";

export async function getPadroes(jwt) {
    try {
        const res = await axios.get(api + "padroes", {
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
    console.log("JWT -> ", jwt, "Dados -> ", dados);
    if (dados.id == "") {
        dados.id = null;
        console.log("Dados POST -> ", dados);
        try {
            const res = await axios.post(
                api + "padroes",
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
        console.log("Dados PUT -> ", dados);
        try {
            const res = await axios.put(
                api + "padroes/" + dados.id,
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

export async function deletePadrao(jwt, id) {
    try {
        const res = await axios.delete(api + "padrao/" + id, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log("Ocorreu um erro: ", error);
        return error
    }
};
