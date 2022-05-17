import { ContainerMain} from "./style";
import { Profile } from "../Profile";

export function Main(props){
    console.log(props.user.message)
    return(
        <ContainerMain dark={props.dark}>
            {props.user.message !== 'Not Found' ? <Profile dark={props.dark} user={props.user} repositories={props.repositories} /> : <p>Ninguem</p>}
        </ContainerMain>
    )
}
