import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

const useAdicionarEvento = () =>{

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    

    return (evento: IEvento) => {
        evento.id = obterId()
        const hoje = new Date()

        if(evento.inicio < hoje){
            throw new Error('Eventos não podem ser cadastrados com data de início inferior a hoje')
        }

        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }

}


export default useAdicionarEvento;