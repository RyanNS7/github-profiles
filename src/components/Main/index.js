import { ContainerMain} from "./style";
import { Profile } from "../Profile";
import { NotFound } from "../NotFound";

export function Main(props){
    return(
        <ContainerMain dark={props.dark}>
            {props.user.message === undefined ? <Profile dark={props.dark} user={props.user} repositories={props.repositories} /> : <NotFound dark={props.dark}/>}
        </ContainerMain>
    )
}
