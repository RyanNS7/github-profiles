import {HeaderContainer, ThemeButton} from './style'
import LogoLight from '../../assets/logo-light.png'
import LogoDark from '../../assets/logo-dark.png'
import iconDark from '../../assets/dark-mode.png'
import iconLight from '../../assets/light-mode.png'
import searchIcon from '../../assets/icon-search.png'

export function Header(props){

    return (
        <HeaderContainer dark={props.dark}>
            <img src={!props.dark ? LogoLight : LogoDark} alt='Logo Github'/>                

            <form>
                <input type='text' placeholder='Github Profile'/>
                <button className='submit'><img src={searchIcon} alt='search' /></button>
            </form>

            <ThemeButton dark={props.dark}>
                <button onClick={props.switchTheme}>
                    <img src={!props.dark ? iconLight : iconDark} alt='icon theme' />
                </button>    
            </ThemeButton>
            
        </HeaderContainer>
    )
}
