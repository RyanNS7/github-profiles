import styled from 'styled-components'

export const ContainerMain = styled.div`
    width: 100%;
    background: ${props => !props.dark ? 'white' : '#0F0C0C'};
`
