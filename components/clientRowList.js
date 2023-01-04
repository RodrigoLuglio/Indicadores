import { useEffect, useState } from 'react';
import { Collapse, TextInput, Input, Button, Group, Alert, Code, Select, Badge  } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { useForm } from "@mantine/form";
import ViewBtn from './buttons/viewBtn';
import { getDepartamentosArrObject } from "../services/utils";
import { addUpEmployees } from "../services/clientes";
import DeleteBtn from "../components/buttons/deleteBtn";
import AdduserBtn from "../components/buttons/adduserBtn";
import { AvatarCompany, Tbhr, TitleBadge, DevBadge, Label } from './misc';


const ClientRowList = ({client, tn, employees}) => {
    const [opened, setOpened] = useState(false);
    
    const removeFormLine = (index) => {
        subClienteForm.removeListItem('employees', index);
    }

    const subClienteForm = useForm({
        initialValues: {
            employees: [{ 
                organizacao: client.organizacao?.id,
                nome:  '',
                email: '',
                departamento: null,
                key: randomId()
            }],
        },
        validate: {
            employees: {
                nome: (value) => (value.length < 2 ? 'Nome precisa ter pelo menos 2 dígitos' : null),
                email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
                departamento: (value) => ( value   ? null : 'Necessário departamento' ),
            }
        }
    });
    
    const subClienteSubmit =  subClienteForm.onSubmit(
        async (values) =>  {
            console.log('-------------- [INICIO] subClienteSubmit -------------')
            console.log(values);
            const val = subClienteForm.validate();
            console.log('subClienteSubmit val: ', val);
            const resAddEmployee = await addUpEmployees(tn, values);
            console.log('resAddEmployee val: ', resAddEmployee);
            console.log('-------------- [FIM] subClienteSubmit -------------')
        }
    );

    const filteredEmployees = employees.filter( employee => employee.organizacao?.id === client.organizacao?.id);

    return (
        <>
            <div className="rowGridLowerHoriz cursor-pointer" onClick={() => {      
                setOpened((o) => !o)
                if(!opened){
                    setTimeout(() => {
                        console.log('clientId', client);               
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

                <form onSubmit={subClienteSubmit}>
                    <div className="mt-1 mr-1 ml-1 mb-0 bg-[#edf8fb] rounded-md overflow-hidden mx-auto">

                        <div className="p-6 pb-4">
                            { filteredEmployees.length > 0 && 
                                <>
                                    <TitleBadge>Funcionários cadastrados (org.id: {client.organizacao?.id})</TitleBadge>
                                    <div className='mb-6'>
                                        { filteredEmployees.map((empl, index) => {
                                                return ( 
                                                    <div key={index}>
                                                        <div className={`grid grid-cols-12 gap-x-4 border-b border-green_input px-2 py-1`} >
                                                            <div className="col-span-12 md:col-span-4 xl:col-span-4">
                                                                <Label>{empl.name}</Label>
                                                            </div>
                                                            <div className="col-span-12 md:col-span-4 xl:col-span-4">
                                                                <Label>{empl.email}</Label>
                                                            </div>
                                                            <div className="col-span-12 md:col-span-4 xl:col-span-3">
                                                                <Label>{empl.departamento?.nome}</Label>
                                                            </div>
                                                            <div></div>
                                                        </div>
            
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }

                            {/* Form de cadastro de novos funcionários */}
                            <TitleBadge>Novos funcionários</TitleBadge>
                            { subClienteForm.values.employees.map((item, index) => {
                                return (
                                        <div key={item.key} className="mb-4">
                                            <Input
                                                hidden
                                                val={client.organizacao?.id}
                                                {...subClienteForm.getInputProps(`employees.${index}.organizacao`)}
                                            />
                                            <div className="grid grid-cols-12 gap-x-4 border-b border-green_input">
                                                <div className="col-span-12 md:col-span-4 xl:col-span-4">
                                                    <TextInput
                                                        withAsterisk
                                                        label="Nome"
                                                        {...subClienteForm.getInputProps(`employees.${index}.nome`)}
                                                    />
                                                </div>
                                                <div className="col-span-12 md:col-span-4 xl:col-span-4">
                                                    <TextInput
                                                        withAsterisk
                                                        label="Email"
                                                        {...subClienteForm.getInputProps(`employees.${index}.email`)}
                                                    />
                                                </div>
                                                <div className="col-span-12 md:col-span-4 xl:col-span-3">
                                                    <Select label="Departamento" 
                                                        withAsterisk
                                                        placeholder="Escolha uma opção"
                                                        data={ getDepartamentosArrObject() } 
                                                        searchable
                                                        allowDeselect
                                                        transition="pop-top-left"
                                                        transitionDuration={200}
                                                        transitionTimingFunction="ease" 
                                                        {...subClienteForm.getInputProps(`employees.${index}.departamento`, { type: 'select' })}
                                                    />
                                                </div>
                                                <div className="col-span-12 md:col-span-4 xl:col-span-1 flex items-center">
                                                    <button onClick={() => removeFormLine(index) }><DeleteBtn /></button>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                            <button onClick={() => subClienteForm.insertListItem('employees', { organizacao: client.organizacao?.id , nome: '', email: '', departamento: '', key: randomId()}) } className="flex justify-start items-center">
                                <AdduserBtn /> <div className="ml-2 text-blue1 font-gotham_bold uppercase text-xs text-left leading-none">Adicionar<br />funcionário</div>
                            </button>
                        </div>

                        <div className="flex relative justify-end w-full bg-green_input">
                            <Button type="submit" className='formClientBtn'>Registrar funcionário</Button>
                        </div>
                    </div>
                </form>

                {/* <Code block>{JSON.stringify(subClienteForm.values, null, 2)}</Code> */}
            </Collapse>
            <Tbhr />
        </>
    )
}

export default ClientRowList;