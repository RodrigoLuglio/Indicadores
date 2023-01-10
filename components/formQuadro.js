import React from "react";
import { Select, TextInput, Button, Group, ActionIcon } from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons";

const FormRegioes = ({ quadro, salvaQuadro }) => {
    const regioesForm = useForm({
        initialValues: {
            regioes: [
                {
                    id: "",
                    tipo: "",
                    regiao: "",
                    feminino: "",
                    masculino: "",
                    outro: "",
                    ni: "",
                    total: "",
                    key: randomId(),
                },
            ],
        },

        validate: {},
    });

    const regioesFields = regioesForm.values.regioes.map((item, index) => (
        <Group key={item.key} mt="xs">
            <Select
                className="flex-grow"
                searchable
                clearable
                placeholder="Selecione o tipo de funcionário"
                data={[
                    { value: "permanentes", label: "Permanentes" },
                    { value: "temporarios", label: "Temporários" },
                    {
                        value: "sgarantia",
                        label: "Sem garantia de carga horária",
                    },
                    { value: "integral", label: "Tempo integral" },
                    { value: "parcial", label: "Tempo parcial" },
                ]}
                {...regioesForm.getInputProps(`regioes.${index}.tipo`)}
            />
            <TextInput
                withAsterisk
                {...regioesForm.getInputProps(`tabela.${index}.feminino`)}
            />
            <TextInput
                withAsterisk
                {...regioesForm.getInputProps(`tabela.${index}.masculino`)}
            />
            <TextInput
                withAsterisk
                {...regioesForm.getInputProps(`tabela.${index}.outro`)}
            />
            <TextInput
                withAsterisk
                {...regioesForm.getInputProps(`tabela.${index}.ni`)}
            />
            <TextInput
                withAsterisk
                {...regioesForm.getInputProps(`tabela.${index}.total`)}
            />
            <ActionIcon
                color="red"
                onClick={() => regioesForm.removeListItem("regioes", index)}
            >
                <IconTrash size={16} />
            </ActionIcon>
        </Group>
    ));

    return (
        <div className="">
            <form onSubmit={regioesSubmit}>
                <TextInput hidden {...regioesForm.getInputProps("id")} />
                <TextInput hidden {...regioesForm.getInputProps("quadro")} />
                {regioesFields}
                <Group position="right" mt="md">
                    <Button type="submit">Salvar</Button>
                </Group>
            </form>
        </div>
    );
};

export default FormCampo;
