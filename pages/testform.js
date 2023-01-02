import { useForm } from '@mantine/form';
import { TextInput,Group, ActionIcon, Box, Button, Code } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons';

export default function TestForm() {
    
    const form = useForm({
        initialValues: {
            employees: [{ name: '', email: '', active: false, key: randomId()}],
        },
        validate: {
            employees: {
                name: (value) => (value.length < 2 ? 'Name should have at least 2 letters' : null),
            }
        }
    });

    const fields = form.values.employees.map((item, index) => (
        <Group key={item.key} mt="xs">
            <TextInput
                placeholder="John Doe"
                withAsterisk
                sx={{ flex: 1 }}
                {...form.getInputProps(`employees.${index}.name`)}
            />
            {/* <Switch
                label="Active"
                {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })}
            /> */}
            <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
                <IconTrash size={16} />
            </ActionIcon>
        </Group>
    ));

    const clienteSubmit =  form.onSubmit(
        async (values) =>  {
            form.validate();
        }
    )

    return (
        <form onSubmit={clienteSubmit}>
        <Box sx={{ maxWidth: 1000 }} mx="auto">
        
            {fields}

            <Group position="center" mt="md">
                <Button
                color="red"
                onClick={() =>
                    form.insertListItem('employees', { name: '', email: '', active: false, key: randomId() })
                }
                >
                    Adicionar responsável
                </Button>
            </Group>


            <Code block>{JSON.stringify(form.values, null, 2)}</Code>

            <Group position="center" mt="md">
                <Button
                type="submit">
                    Enviar
                </Button>
            </Group>
        </Box>
        </form>
    );
}