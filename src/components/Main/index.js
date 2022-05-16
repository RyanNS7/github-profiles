import { ContainerMain, AvatarProfile, NewestRepositories, LatestInformation } from "./style";
import avatarGithub from "../../assets/avatar.png"

export function Main(props){
    console.log(props.user)
    return(
        <ContainerMain dark={props.dark}>
            <AvatarProfile dark={props.dark}>
                <div><h3>{props.user.name}</h3></div>
                <img src={avatarGithub} alt='Avatar' />
                <div><h3>{props.user.login}</h3></div>
            </AvatarProfile>

            <NewestRepositories dark={props.dark}>
                <div><h2>Newest Repositories</h2></div>

                <div>
                    {props.repositories.slice(0, 4).map((repo)=> {
                        return <p><a href={repo.html_url}>{repo.name}</a></p>
                    })}
                </div>
            </NewestRepositories>

            <LatestInformation dark={props.dark}>
            <h4>Followers: {props.user.followers}</h4>
            <h4>Repositories count: {props.user.public_repos}</h4>
            </LatestInformation>
        </ContainerMain>
    )
}
