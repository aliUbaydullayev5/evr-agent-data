import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`

Container.Inset = styled.div`
  width: 80%;
  height: 90%;
  max-height: 850px;
  background-color: rgb(245,246,249);  
  padding: 10px;
  border-radius: 10px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`



export default Container