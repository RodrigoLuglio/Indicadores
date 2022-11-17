import Head from "next/head";
import { Grid, TextInput, Tooltip, Text, Center, Checkbox, Button, Group, Box, Notification } from "@mantine/core";
import { showNotification } from '@mantine/notifications';
import { ActionIcon } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons';
import { useForm } from "@mantine/form";

export default function Mantine() {


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
            termsOfService: false
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
            termsOfService: (value) => (value === true ? null : 'Necessário aceitar' )
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
            <Head>
                Mantine
            </Head>

            <Box sx={{ maxWidth: 300 }} mx="auto">
                <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
                    <TextInput 
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />

                    <Checkbox
                        mt="md"
                        label="Aceito os termos"
                        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />

                    <Group position="right" mt="md">
                        <Button color="orange" variant="default" type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>

            <div className="container mx-auto">
                <div className="w-10/12 mx-auto">
                    {/* <Grid>
                        <Grid.Col md={6} lg={3}>1</Grid.Col>
                        <Grid.Col md={6} lg={3}>2</Grid.Col>
                        <Grid.Col md={6} lg={3}>3</Grid.Col>
                        <Grid.Col md={6} lg={3}>4</Grid.Col>
                        <Grid.Col md={6} lg={3}>5</Grid.Col>
                        <Grid.Col md={6} lg={3}>6</Grid.Col>
                        <Grid.Col md={6} lg={3}>7</Grid.Col>
                        <Grid.Col md={6} lg={3}>8</Grid.Col>
                    </Grid> */}
                    {/* <TextInput 
                        rightSection={rightSection}
                        label="Name"
                        description="This is the best description"  
                        placeholder="Teste de placeholder"  
                    /> */}
                </div>
            </div>
        </>
    );
}