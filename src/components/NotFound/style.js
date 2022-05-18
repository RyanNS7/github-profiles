import styled from 'styled-components'

export const ContainerNF = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    color: ${props => !props.dark ? 'black' : 'white'};
    background: ${props => !props.dark ? 'white' : '#0F0C0C'};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`