import { Select, Button } from "@mantine/core";

export default function SelectPadrao({
    data,
    selecionado,
    setSelecionado,
    add,
}) {
    <div className="flex flex-row space-x-4">
        <Select
            className="flex-grow"
            searchable
            clearable
            placeholder="Selecione um padrão"
            data={data}
            value={selecionado}
            onChange={setSelecionado}
            on
        />
        <Button
            className="bg-green_light text-white rounded-lg border-green_light border-2 hover:bg-white hover:text-green_light transition-all duration-300 "
            onClick={add}
        >
            +
        </Button>
    </div>;
}
