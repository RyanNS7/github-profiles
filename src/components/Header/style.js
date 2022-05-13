import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 8rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => !props.dark ? '#8257E5' : 'black'};

    /* --base-color: #8257E5;
    --background-note: #5B00F9; */

    img{
        width: 6rem;
        border-radius: 5rem;
    }

    form{
        width: 35%;
        height: 3.5rem;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    input{
        width: 90%;
        border-radius: 0.2rem 0 0 0.2rem;
    }
    
    .submit,
    input{
        height: 100%;
        padding: 0.3rem;
        font-size: 1.2rem;
        border: 1px solid transparent;
    }

    .submit{
        border-radius: 0 0.2rem 0.2rem 0;
        width: 10%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .submit img{
        width: 80%;
    }

`

export const ThemeButton = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 100%;
        height: 100%;
        border-radius: 5rem;
        cursor: pointer;
        border: 1px solid ${props => !props.dark ? 'transparent' : 'black'};
        background: ${props => !props.dark ? '#8257E5' : '#e0e0e0'};
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 5rem;
    }
`