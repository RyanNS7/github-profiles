import { ContainerNF } from "./style"

export function NotFound(props){
    return(
        <ContainerNF dark={props.dark}>
            <div>
                <h2>Nenhum Usuario Encontrado</h2>
            </div>
        </ContainerNF>
    )
}