import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useAtualizarEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    const atualizar = (evento: IEvento) => {
        setListaDeEventos(listaAntiga => {
            const indice = listaAntiga.findIndex(evt => evt.id === evento.id);
            return [...listaAntiga.slice(0,indice), evento, ...listaAntiga.slice(indice + 1)]
          })
    }

    return atualizar

}

export default useAtualizarEvento;