import {HeaderContainer, ThemeButton} from './style'
import LogoLight from '../../assets/logo-light.png'
import LogoDark from '../../assets/logo-dark.png'
import iconDark from '../../assets/dark-mode.png'
import iconLight from '../../assets/light-mode.png'
import searchIcon from '../../assets/icon-search.png'
import { useState } from 'react'

export function Header(props){

    const [githubProfile, setGithubProfile] = useState('')

    function usernameGithub(e){
        setGithubProfile(e.target.value)
    }

    async function userData(e){
        e.preventDefault()

        const profile = await fetch(`https://api.github.com/users/${githubProfile}`)
        const data = await profile.json()
        props.setUser(data)

        const response = await fetch(data.repos_url)
        const dataRepositories = await response.json()
        props.setRepositories(dataRepositories)
    }

    return (
        <HeaderContainer dark={props.dark}>
            <div className='logo'>
                <img src={!props.dark ? LogoLight : LogoDark} alt='Logo Github'/>       
            </div>
                         

            <form>
                <input type='text' placeholder='Github Profile' onChange={usernameGithub}/>
                <button className='submit' onClick={userData}><img src={searchIcon} alt='search' /></button>
            </form>

            <ThemeButton dark={props.dark}>
                <button onClick={props.switchTheme}>
                    <img src={!props.dark ? iconLight : iconDark} alt='icon theme' />
                </button>    
            </ThemeButton>
            
        </HeaderContainer>
    )
}
