import React, { useEffect, useState, useRef } from 'react';
import { Collapse, TextInput, Input, Button, Group, Alert, Code, Select  } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { useForm } from "@mantine/form";
import ViewBtn from './buttons/viewBtn';
import { getDepartamentos } from "../services/utils";
import DeleteBtn from "../components/buttons/deleteBtn";
import AdduserBtn from "../components/buttons/adduserBtn";

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
            <div className="h-[34px] w-[34px] flex rounded-[10px] overflow-hidden bg-slate-300 mr-2">
                { logo && 
                    <img src={logo} className="object-center object-cover w-full" alt="" />
                }
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
    
    const removeFormLine = (index) => {
        subClienteForm.removeListItem('employees', index);
    }

    const subClienteForm = useForm({
        initialValues: {
            employees: [{ 
                cliente: client.id,
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
            console.log(values);
            const val = subClienteForm.validate();
            if(val.hasErrors) {
                console.log('form com erro');
            }
            console.log('val: ', val);
        }
    );

    return (
        <>
            <div className="rowGridLowerHoriz cursor-pointer" onClick={() => {      
                setOpened((o) => !o)
                if(!opened){
                    setTimeout(() => {
                        console.log('clientId', client.id);               
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
                            {subClienteForm.values.employees.map((item, index) => {
                                return (
                                    <div key={item.key} className="mb-4">
                                        <Input
                                            hidden
                                            val={client.id}
                                            {...subClienteForm.getInputProps(`employees.${index}.cliente`)}
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
                                                    data={ getDepartamentos() } 
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
                            <button onClick={() => subClienteForm.insertListItem('employees', { cliente: client.id , nome: '', email: '', departamento: '', key: randomId()}) } className="flex justify-start items-center">
                                <AdduserBtn /> <div className="ml-2 text-blue1 font-gotham_bold uppercase text-xs text-left leading-none">Adicionar<br />funcionário</div>
                            </button>
                        </div>

                        <div className="flex relative justify-end w-full bg-green_input">
                            <Button type="submit" className='formClientBtn'>Registrar Cliente</Button>
                        </div>
                    </div>
                </form>

                {/* <Code block>{JSON.stringify(subClienteForm.values, null, 2)}</Code> */}
            </Collapse>
            <Tbhr />
        </>
    )
}