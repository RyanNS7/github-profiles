import styled from 'styled-components'

export const ContainerMain = styled.div`
    width: 100%;
    background: ${props => !props.dark ? 'white' : '#0F0C0C'};
`

export const AvatarProfile = styled.div`
    margin: auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    color: ${props => !props.dark ? 'black' : 'white'};

    img{
        width: 12rem;
        border: 8px solid ${props => !props.dark ? '#8257E5' : 'black'};
    }

    div{
        padding: 0.5rem;
    }
`

export const NewestRepositories = styled(AvatarProfile)`
    h2{
        font-size: 1.8rem;
        font-weight: bolder;
    }

    /* div:nth-child(2){
        display: flex;
    } */
`

export const LatestInformation = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    color: ${props => !props.dark ? 'black' : 'white'};

    h4{
        margin: 0 1rem;
    }
`