import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState);


        const eventosPorStatus = todosOsEventos.filter(evento => {
            if(filtro.status === "completos"){
                return evento.completo
            }

            if(filtro.status === "incompletos"){
                return !evento.completo
            }

            return true;

        })

        const eventos = eventosPorStatus.filter(evento => {
            if(!filtro.data){
              return true
            }
        
            const ehOMesmoDia = filtro.data.toISOString().slice(0,10) === evento.inicio.toISOString().slice(0,10);
        
            return ehOMesmoDia;
          })
        return eventos;
    }
})