import { useState } from "react";
import { Tbhr, FullCard, StatusBall } from "./misc";
import ViewBtn from "./buttons/viewBtn";
import {
    Button,
    Collapse,
    TextInput,
    Tooltip,
    Group,
    Checkbox,
    Text,
    Center,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";
import { useForm } from "@mantine/form";
import { getStatusColor } from "../services/utils";

export const Campo = ({ campo }) => {
    const { numero, texto, tipo, config, status, conteudo, respostas } = campo;

    const form = useForm({
        initialValues: {},

        validate: {},
    });

    const handleSubmit = (values) => {
        console.log(values);
    };

    const handleError = (errors) => {
        console.log(errors);
    };

    return (
        <>
            <div className="p-4">
                <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
                    <TextInput
                        // variant="headless" //remover estilos do mantine
                        withAsterisk
                        label="a. liste todas as entidades incluídas no relatório de sustentabilidade"
                        placeholder="your@email.com"
                        rightSection={rightSection}
                        error="error text"
                        {...form.getInputProps("email")}
                    />

                    <div className="formLabel">
                        {numero}. {texto} <br />
                    </div>
                    <TextInput
                        error="error text"
                        {...form.getInputProps("resposta")}
                    />

                    <Group position="left" mt="md">
                        <Button variant="default" type="submit">
                            Enviar
                        </Button>
                    </Group>
                </form>
            </div>

            <Tbhr lower />
        </>
    );
};

// ------------------------------
// Página de Status
// ------------------------------

export const StatusIndicSectionHead = ({ status, active }) => {
    const [opened, setOpened] = useState(active == true);

    return (
        <div className="mb-2">
            <div
                className="group rowGridHoriz cursor-pointer"
                onClick={() => setOpened((o) => !o)}
            >
                <div className="flex justify-start items-center">
                    <StatusBall status={status} />
                    <div className="tableH2 pl-3">
                        <h2>
                            <span className="text-paragraph">{status}</span>
                        </h2>
                    </div>
                </div>
                <ViewBtn link="/" />
            </div>
            <Tbhr />
            <Collapse transitionDuration={400} in={opened}>
                <div className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas unde, porro non consectetur ea enim harum, eligendi
                    excepturi iusto natus et perferendis maxime est aperiam amet
                    error optio eius adipisci sapiente dolorum eos cumque illum
                    vero dicta! Ipsa itaque cumque quisquam illo, blanditiis
                    vero! Doloremque, totam reiciendis ut quod voluptates saepe
                    illum deserunt! Officia placeat provident quasi quia sint
                    error nam, doloribus, esse quod delectus alias nesciunt odio
                    adipisci eum consectetur corporis sequi laboriosam quaerat
                    vitae ex vel iusto fuga reiciendis at! Odio quisquam tenetur
                    aliquam, minus repudiandae saepe non. Aliquam placeat
                    molestias odit natus rem quia perferendis commodi excepturi
                    tempora nesciunt sint similique, iusto maiores culpa
                    mollitia recusandae beatae cupiditate! Delectus quibusdam,
                    quisquam soluta facere velit dolores illo, quidem similique
                    amet expedita cumque dolore! Numquam soluta cupiditate
                    blanditiis quasi beatae vel, quod veritatis voluptatibus
                    neque eaque? Cupiditate laudantium cum tenetur fugiat quod,
                    accusantium culpa enim facilis dicta, possimus ex
                    perspiciatis odit doloribus quasi eius. Nemo dignissimos
                    quis iusto. Consectetur enim laborum voluptatum ut
                    consequatur! Voluptas perferendis cumque culpa voluptate!
                    Illum dolores officia, itaque, officiis optio cumque
                    possimus distinctio iste provident aspernatur totam nihil
                    placeat repellendus enim incidunt, dicta cum. Est, et! Ad
                    facere dolore autem quis repellat explicabo unde? Quo
                    asperiores aperiam a, autem, commodi odit laboriosam
                    dignissimos, quibusdam id eveniet minima. Praesentium sint
                    odio, delectus est molestiae consequatur accusantium
                    voluptate repellat dolore magnam aliquid, at aut tempora
                    veniam suscipit! Culpa, maxime nisi sapiente doloremque ex
                    similique cupiditate eius ullam atque reprehenderit quos,
                    ducimus nobis quisquam quas distinctio numquam et tempore
                    ipsam officiis iste.
                </div>
            </Collapse>
        </div>
    );
};
