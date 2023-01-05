import { useState } from 'react';
import { Tbhr, FullCard, StatusBall } from "./misc";
import ViewBtn from "./buttons/viewBtn";
import { Button, Collapse, TextInput, Tooltip, Group, Checkbox, Text, Center } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons';
import { useForm } from "@mantine/form";
import { getStatusColor } from "../services/utils";

export const IndicSectionHead = ({title}) => {
    return (
        <>
            <div className="tableGrid">
                <div className="col-span-8 2xl:col-span-9 tableH2 pl-2"><h2>{title}</h2></div>
                <div className="col-span-3 2xl:col-span-2 tableHead">Status</div>
                <div className="col-span-1 tableHead mx-auto">Ações</div>
            </div>
            <Tbhr />
        </>
    );
}


export const IndicSectionItem = ({number, title, status}) => {

    const [opened, setOpened] = useState(false);

    const rightSection = (
        <Tooltip
            label="Teste de label tooltip"
            position="top-end"
            withArrow
            transition="pop-bottom-right"
        >
            <Text color="dimmed" sx={{ cursor: 'help' }}>
                <Center>
                    <IconInfoCircle size={18} stroke={2} />
                </Center>
            </Text>
        </Tooltip>
    );

    const form = useForm({
        initialValues: {
            email: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
        },
    });

    const handleSubmit = (values) => console.log(values);

    const handleError = (errors) => {
        console.log(errors)
        console.log(errors.termsOfService);
        if(errors.termsOfService) {
            console.log('precisava aceitar');
            setTimeout(() => {
                showNotification({ message: 'Necessário aceitar os termos', color: 'red' });
            }, 200);
        }
    };

    return (
        <>
            <div className="rowGridLower cursor-pointer" onClick={() => setOpened((o) => !o)}>
                <div className="tableGrid">
                    <div className="col-span-9 lg:col-span-8 2xl:col-span-9 flex justify-start items-center pr-4">
                        <span className="font-gotham_bold text-green_light text-lg mr-4">{number}</span>
                        <span className="font-gotham_medium text-[15px] text-paragraph leading-tight">{title}</span>
                    </div>
                    <div className="col-span-1 lg:col-span-3 2xl:col-span-2 flex justify-start items-center"><StatusBall status={status} withLabel /></div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center items-center"><ViewBtn link="/" /></div>
                </div>
            </div>

            <Collapse transitionDuration={400} in={opened}>
                <div className="p-4">

                    <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
                        <TextInput 
                            // variant="headless" //remover estilos do mantine
                            withAsterisk
                            label="a. liste todas as entidades incluídas no relatório de sustentabilidade"
                            placeholder="your@email.com"
                            rightSection={rightSection}
                            error="error text"
                            {...form.getInputProps('email')}
                        />

                        <div className="formLabel">
                            c. se a organização consiste em várias entidades, explique a abordagem usada para
                            consolidar as informações, incluindo: <br />
                            <span>
                                i. se a abordagem envolve ajustes nas informações para os interesses dos minoritários; como a abordagem leva em consideração fusões, aquisições e alienação de entidades ou partes de entidades; <br />
                                ii. se e como a abordagem difere nas divulgações desta Norma e em todos os tópicos materiais.
                            </span>
                        </div>
                        <TextInput 
                            error="error text"
                            {...form.getInputProps('campo2')}
                        />


                        <Group position="left" mt="md">
                            <Button variant="default" type="submit">Enviar</Button>
                        </Group>
                    </form>

                </div>
            </Collapse>

            <Tbhr lower />
        </>
    );
}

// ------------------------------
// Página de Status
// ------------------------------

export const StatusIndicSectionHead = ({status, active}) => {

    const [opened, setOpened] = useState(active == true);

    return (
        <div className="mb-2">
            <div className="group rowGridHoriz cursor-pointer" onClick={() => setOpened((o) => !o)}>
                <div className="flex justify-start items-center">
                    <StatusBall status={status} />
                    <div className="tableH2 pl-3"><h2><span className="text-paragraph">{status}</span></h2></div>
                </div>
                <ViewBtn link="/" />
            </div>
            <Tbhr />
            <Collapse transitionDuration={400} in={opened}>
                <div className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde, porro non consectetur ea enim harum, eligendi excepturi iusto natus et perferendis maxime est aperiam amet error optio eius adipisci sapiente dolorum eos cumque illum vero dicta! Ipsa itaque cumque quisquam illo, blanditiis vero! Doloremque, totam reiciendis ut quod voluptates saepe illum deserunt! Officia placeat provident quasi quia sint error nam, doloribus, esse quod delectus alias nesciunt odio adipisci eum consectetur corporis sequi laboriosam quaerat vitae ex vel iusto fuga reiciendis at! Odio quisquam tenetur aliquam, minus repudiandae saepe non. Aliquam placeat molestias odit natus rem quia perferendis commodi excepturi tempora nesciunt sint similique, iusto maiores culpa mollitia recusandae beatae cupiditate! Delectus quibusdam, quisquam soluta facere velit dolores illo, quidem similique amet expedita cumque dolore! Numquam soluta cupiditate blanditiis quasi beatae vel, quod veritatis voluptatibus neque eaque? Cupiditate laudantium cum tenetur fugiat quod, accusantium culpa enim facilis dicta, possimus ex perspiciatis odit doloribus quasi eius. Nemo dignissimos quis iusto. Consectetur enim laborum voluptatum ut consequatur! Voluptas perferendis cumque culpa voluptate! Illum dolores officia, itaque, officiis optio cumque possimus distinctio iste provident aspernatur totam nihil placeat repellendus enim incidunt, dicta cum. Est, et! Ad facere dolore autem quis repellat explicabo unde? Quo asperiores aperiam a, autem, commodi odit laboriosam dignissimos, quibusdam id eveniet minima. Praesentium sint odio, delectus est molestiae consequatur accusantium voluptate repellat dolore magnam aliquid, at aut tempora veniam suscipit! Culpa, maxime nisi sapiente doloremque ex similique cupiditate eius ullam atque reprehenderit quos, ducimus nobis quisquam quas distinctio numquam et tempore ipsam officiis iste.
                </div>
            </Collapse>
        </div>
    );
}
