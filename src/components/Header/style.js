import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 8rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: red;

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
        border: transparent;
        background: blue;
    }
`