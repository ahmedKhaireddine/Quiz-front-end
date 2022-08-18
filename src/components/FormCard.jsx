import styled from 'styled-components'

const CardContainer = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction column;
    border: 1px solid white;
`

const FormCard = () => {
    return (
        <CardContainer/>
    )
}

export default FormCard