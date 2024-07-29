export type IFiltroStatus = "completos" | "incompletos" | "ambos";

export interface IFiltroDeEventos{
    data?: Date | null
    status?: IFiltroStatus
}

export default IFiltroDeEventos;