import { ContainerMain, AvatarProfile, NewestRepositories, LatestInformation } from "./style";
import avatarGithub from "../../assets/avatar.png"

export function Main(props){
    return(
        <ContainerMain dark={props.dark}>
            <AvatarProfile dark={props.dark}>
                <div><h3>Name User</h3></div>
                <img src={avatarGithub} alt='Avatar' />
                <div><h3>Avatar</h3></div>
            </AvatarProfile>

            <NewestRepositories dark={props.dark}>
                <div><h2>Newest Repositories</h2></div>

                <div>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
            </NewestRepositories>

            <LatestInformation dark={props.dark}>
            <h4>Followers: 59</h4>
            <h4>Repositories count: 58</h4>
            </LatestInformation>
        </ContainerMain>
    )
}
