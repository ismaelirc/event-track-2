import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import IFiltroDeEventos from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: [
        {
            "descricao": "Estudar React",
            "inicio": new Date("2024-07-23T09:00"),
            "fim": new Date("2024-07-23T10:00"),
            "completo": false,
            "id": 1642342747
        },
        {
            "descricao": "Estudar Recoil",
            "inicio": new Date("2024-07-25T09:00"),
            "fim": new Date("2024-07-25T11:00"),
            "completo": false,
            "id": 1642342959
        }
    ]
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {data: null, status: 'ambos'}
})