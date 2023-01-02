import { useState } from 'react';
import { Collapse, TextInput, Button, Group, Alert  } from '@mantine/core';
import ViewBtn from './buttons/viewBtn';
import { useLocalStorage } from '@mantine/hooks';
import { useForm } from "@mantine/form";

export const Tbhr = ({lower}) => {
    const marginY = (lower) ? 'my-1' : 'my-2';
    return (
        <div className={`bg-[#E3EAF4]/80 h-px w-full block ${marginY}`}></div>
    )
}

export const StatusBall = ({status, withLabel}) => {
    let bg, color = '';
    switch (status.toLowerCase()) {
        case "aprovado":
            bg = 'bg-blue1'
            color = 'text-blue1'
            break;
        case "finalizado":
            bg = 'bg-green_mid2'
            color = 'text-green_mid2'
            break;
        case "verificacao":
            bg = 'bg-[#0177FB]'
            color = 'text-[#0177FB]'
            break;
        case "incompleto":
            bg = 'bg-[#E2723A]'
            color = 'text-[#E2723A]'
            break;
        case "sem informação":
            bg = 'bg-[#B31717]'
            color = 'text-[#B31717]'
            break;
        default:
            break;
    }

    return (
        <div className={`${ withLabel && 'flex justify-start items-center '}`}>
            <div className={`rounded-full w-[18px] h-[18px] block ${bg}`}></div>
            { withLabel && 
                <div className={`hidden lg:block ml-2 font-gotham_medium text-sm leading-none ${color}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </div> 
            }
        </div>
    )
}

export const AvatarCompany = ({ company, subinfo, logo  }) => {
    return (
        <div className="flex w-full justify-start items-center">
            <div className="h-[34px] w-[34px] flex rounded-[10px] overflow-hidden bg-red-300 mr-2">
                <img src={logo} className="object-center object-cover w-full" alt="" />
            </div>
            <div>
                <div className="text-paragraph font-gotham_medium leading-none">{company}</div>
                <div className="text-[#737880] font-gotham text-xs">{subinfo}</div>
            </div>
        </div>
    )
}

export const FullCard = ({children}) => {
    return (
        <div className="relative w-full mb-10 bg-white rounded-lg py-3 px-5 shadow-status_card_xs md:shadow-status_card">
            {children}
        </div>
    )
}

export const ClientRowList = ({client}) => {
    const [opened, setOpened] = useState(false);
    const [clientid, setClientId] = useLocalStorage({ key: 'client-id', defaultValue: '' });
    
    const [inputFields, setInputFields] = useState([
        { nome: '', email: '' }
    ]);
    

    const subClienteForm = useForm({
        initialValues: {
            nome: "",
            email: "",
        },
        // validate: {
        //     nome: (value) => (value.length < 2 ? 'Nome precisa ter pelo menos 2 dígitos' : null),
        //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
        // },
    });

    const addFields = () => {
        setInputFields([...inputFields, { nome: '', email: '' }])
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const subClienteSubmit =  subClienteForm.onSubmit(
        async (values) =>  {
            console.log(values);
            console.log('inputFields', inputFields);
        }
    );


    return (
        <>
            <div className="rowGridLowerHoriz cursor-pointer" onClick={() => {      
                setOpened((o) => !o)
                if(!opened){
                    setTimeout(() => {
                        console.log('clientId', client.id);
                        setClientId((current) => { return [...current, client.id] });                    
                    }, 400);
                }
            }}>
                <div className="tableGrid">
                    
                    <div className="col-span-8 xl:col-span-5 ">
                        <AvatarCompany company={client.organizacao?.nome} subinfo={client.name} logo="https://i.pinimg.com/736x/12/f4/80/12f4805f90d5abc0997b606844967594.jpg" />
                    </div>
                    <div className="col-span-3 xl:col-span-5 tb_p">{client.email}</div>
                    <div className="col-span-2 flex justify-end">
                        <ViewBtn />
                    </div>
                </div>
            </div>

            <Collapse transitionDuration={400} in={opened}>
                <div className="p-4">
                    {/* {client.id} */}
                    <form onSubmit={subClienteSubmit}>
                        {inputFields.map((input, index) => {
                            return (
                                <div key={index}>
                                    <div className="grid grid-cols-12 gap-x-4">
                                        <div className="col-span-12 md:col-span-4 xl:col-span-3">
                                            <TextInput
                                                withAsterisk
                                                label="Nome"
                                                name="nome"
                                                value={input.nome}
                                                onChange={event => handleFormChange(index, event)}
                                                // {...subClienteForm.getInputProps(`nome.${index}`)}
                                            />
                                        </div>
                                        <div className="col-span-12 md:col-span-4 xl:col-span-3">
                                            <TextInput
                                                withAsterisk
                                                label="Email"
                                                name="email"
                                                value={input.email}
                                                onChange={event => handleFormChange(index, event)}
                                                // {...subClienteForm.getInputProps("email")}
                                            />
                                        </div>
                                        <div className="col-span-12 md:col-span-4 xl:col-span-3">
                                            select
                                        </div>
                                        <div className="col-span-12 md:col-span-4 xl:col-span-3">
                                            <button onClick={() => removeFields(index)}>Remover</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <Group position="left" mt="md">
                            <Button color="cyan" onClick={() => addFormFields()}>Adicionar</Button>
                        </Group> */}

                        <button onClick={addFields}>Adicionar reponsável</button>

                        <Group position="right" mt="md">
                            <Button type="submit">Registrar Cliente</Button>
                        </Group>
                    </form>
                </div>
            </Collapse>
            <Tbhr />
        </>
    )
}