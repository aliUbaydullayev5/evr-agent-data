import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  min-height: 400px;
  border-radius: 10px;
  background-color: #f6f6f6;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

Container.Setion = styled.div`
  border: 1px solid red;
  padding: 3px 10px;
  font-size: 22px;
`

export default Container