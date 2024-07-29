import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../../state/atom';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  
  //terceira forma
  const atualizarEvento = useAtualizarEvento()

  //essa função também poderia ser implementada de forma diferente
  /*
  const alterarStatus = () => {
    const eventoAlterado = {...evento}

    eventoAlterado.completo = !evento.completo

    setListaDeEventos(listaAntiga => {
      const indice = listaAntiga.findIndex(evt => evt.id === evento.id);
      return [...listaAntiga.slice(0,indice), eventoAlterado, ...listaAntiga.slice(indice + 1)]
    })
  } 
  */

  const alterarStatus = () => {
    setListaDeEventos(listaAntiga => listaAntiga.map(evt => {
      if(evt.id === evento.id){
        return {...evt, completo: !evt.completo}
      }
      return evt;
    }))
  } 

  //terceira forma
  //atualizarEvento(evento)


  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox