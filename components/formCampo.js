import React from "react";
import { Select, TextInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";

const FormCampo = ({ campo, camposSubmit }) => {

    {id, numero, texto, tipo, conteudo, config} = campo

    const camposForm = useForm({
        initialValues: {
            id: "",
            numero: "",
            texto: "",
            tipo: "",
            conteudo: "",
        },

        validate: {},
    });
    return (
        <div className="">
            <form onSubmit={camposSubmit}>
                <TextInput hidden {...camposForm.getInputProps("id")} />
                <TextInput hidden {...camposForm.getInputProps("conteudo")} />
                <TextInput
                    withAsterisk
                    label="Número"
                    placeholder="Número"
                    {...camposForm.getInputProps("numero")}
                />
                <TextInput
                    withAsterisk
                    label="Texto"
                    placeholder="Texto"
                    {...camposForm.getInputProps("texto")}
                />
                <Select
                    withAsterisk
                    label="Tipo"
                    placeholder="Selecione o tipo"
                    data={[
                        { value: "nenhum", label: "Nenhum" },
                        { value: "numero", label: "Numérico" },
                        { value: "texto", label: "Texto" },
                        { value: "tabela", label: "Tabela" },
                    ]}
                    {...camposForm.getInputProps("tipo")}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Salvar</Button>
                </Group>
            </form>
        </div>
    );
};

export default FormCampo;
