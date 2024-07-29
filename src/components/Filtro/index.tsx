import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { filtroDeEventos } from '../../state/atom';
import IFiltroDeEventos, { IFiltroStatus } from '../../interfaces/IFiltroDeEventos';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const [status, setStatus] = useState<IFiltroStatus>('ambos')

  const setFiltroDeEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    const filtro: IFiltroDeEventos = {};

    if(data){
      filtro.data = new Date(data);
    }else{
      filtro.data = null;
    }

    filtro.status = status;

    setFiltroDeEventos(filtro);
    
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />

    <h3 className={style.titulo}>Filtrar por status</h3>
    <select name="status" className={style.input} value={status} onChange={evento => setStatus(evento.target.value as IFiltroStatus)} >
      <option value="ambos">Ambos</option>
      <option value="completos">Completos</option>
      <option value="incompletos">Incompletos</option>
    </select>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro