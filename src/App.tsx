import React, { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import { IEvento } from './interfaces/IEvento';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil';

function App() {

  const [filtro, setFiltro] = useState<Date | null>()
  
  
  //const filtrados = !filtro
  //  ? eventos
  //  : eventos.filter((evento) =>
  //    filtro!.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
  //  );

  return (
    <RecoilRoot>
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario/>
          </Card>
          <hr />
          <Card>
            <ListaDeEventos/>
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendario/>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
