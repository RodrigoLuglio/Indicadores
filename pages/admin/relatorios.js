import Head from "next/head";
import { useState, useEffect } from "react";

import Layout from "../../layouts/Admin";

import { getSession } from "next-auth/react";

import { checkUserRole } from "../../services/auth";
import { getNormas, getOrgs } from "../../services/normas";

import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";

export default function Relatorios({ orgs, normas, normasListData }) {
    const [normasData, setNormasData] = useState(normasListData);
    useEffect(() => {
        console.log("Orgs -> ", orgs);
        console.log("Normas -> ", normas);
        console.log("Lista data -> ", normasListData);
    }, []);

    // const data = {
    //     label: "search me",
    //     value: "searchme",
    //     children: [
    //         {
    //             label: "search me too",
    //             value: "searchmetoo",
    //             children: [
    //                 {
    //                     label: "No one can get me",
    //                     value: "anonymous",
    //                 },
    //             ],
    //         },
    //     ],
    // };

    const onChange = (currentNode, selectedNodes) => {
        console.log("onChange::", currentNode, selectedNodes);
    };
    const onAction = (node, action) => {
        console.log("onAction::", action, node);
    };
    const onNodeToggle = (currentNode) => {
        console.log("onNodeToggle::", currentNode);
    };

    return (
        <>
            <Head>
                <title>Presence - Relatórios</title>
            </Head>
            <section>
                <DropdownTreeSelect
                    data={normasData}
                    onChange={onChange}
                    onAction={onAction}
                    onNodeToggle={onNodeToggle}
                />
            </section>
        </>
    );
}

Relatorios.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
    const session = await getSession(context);

    const returnedObj = checkUserRole(session, "Admin");
    if (returnedObj != null) return returnedObj;

    const normas = await getNormas(session.jwt);
    const orgs = await getOrgs(session.jwt);

    let padroesListData = [];
    let secoesListData = [];
    let conteudosListData = [];
    let camposListData = [];

    normas.data[0].attributes.padroes.data.forEach((padrao) => {
        secoesListData = [];
        padrao.attributes.secoes.data.forEach((secao) => {
            conteudosListData = [];
            secao.attributes.conteudos.data.forEach((conteudo) => {
                camposListData = [];
                conteudo.attributes.campos.data.forEach((campo) => {
                    camposListData.push({
                        value: campo.id,
                        label:
                            campo.attributes.numero +
                            ". " +
                            campo.attributes.texto,
                        tipo: "campo",
                    });
                });
                conteudosListData.push({
                    label:
                        conteudo.attributes.numero +
                        ". " +
                        conteudo.attributes.nome,
                    value: conteudo.id,
                    children: camposListData,
                });
            });
            secoesListData.push({
                label: secao.attributes.numero + ". " + secao.attributes.nome,
                value: secao.id,
                children: conteudosListData,
            });
        });
        padroesListData.push({
            label: padrao.attributes.numero + ". " + padrao.attributes.nome,
            value: padrao.id,
            children: secoesListData,
        });
    });

    const normasListData = {
        label: "GRI",
        value: "gri",
        children: padroesListData,
    };

    return {
        props: {
            normas: normas.data,
            normasListData: normasListData,
            orgs: orgs.data,
        },
    };
}
