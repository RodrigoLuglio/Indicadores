import { useState, useRef } from "react";
import { Select, TextInput, Button, Group, ActionIcon } from "@mantine/core";
import { ReactTabulator } from "react-tabulator";

const FormRegioes = ({ indicador }) => {
    const tableRef = useRef(null);

    console.log("Indicador -> ", indicador);

    const tableAddRow = () => {
        var table = tableRef.current;
        table.addRow({
            id: "",
            regiao: "",
            tipo: "permanentes",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.addRow({
            id: "",
            regiao: "",
            tipo: "temporarios",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.addRow({
            id: "",
            regiao: "",
            tipo: "sgarantia",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.addRow({
            id: "",
            regiao: "",
            tipo: "integral",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.addRow({
            id: "",
            regiao: "",
            tipo: "parcial",
            feminino: "",
            masculino: "",
            outro: "",
            ni: "",
            total: "",
        });
        table.redraw();
    };

    return (
        <div className="">
            <ReactTabulator
                className="w-full"
                onRef={(ref) => (tableRef.current = ref.current)}
                data={indicador.tabela}
                colunms={indicador.config}
                layout={"fitDataStretch"}
                options={{ groupBy: "regiao" }}
            />
            <Button
                className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300"
                onClick={tableAddRow}
            >
                Adicionar região
            </Button>
        </div>
    );
};

export default FormRegioes;
