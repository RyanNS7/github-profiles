import { AvatarProfile, NewestRepositories, LatestInformation } from "./style";

export function Profile(props){

    return(
        <>
        <AvatarProfile dark={props.dark}>
                <div><h3>{props.user.name}</h3></div>
                <img src={props.user.avatar_url} alt='Avatar'/>
                <div><h3>{props.user.login}</h3></div>
            </AvatarProfile>

            <NewestRepositories dark={props.dark}>
                <div><h2>Some User Repositories</h2></div>

                <div>
                    {props.repositories.slice(0, 4).map((repo)=> {
                        return <p key={repo.name}><a href={repo.html_url}>{repo.name}</a></p>
                    })}
                </div>
            </NewestRepositories>

            <LatestInformation dark={props.dark}>
            <h4>Followers: {props.user.followers}</h4>
            <h4>Repositories count: {props.user.public_repos}</h4>
            </LatestInformation>
        </>
    )
}