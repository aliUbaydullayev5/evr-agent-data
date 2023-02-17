import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  margin: 100px auto 10px auto;
  min-height: 400px;
  border-radius: 10px;
  background-color: #f6f6f6;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  
`

Container.Section = styled.div`
  max-width: 400px;
  min-width: 300px;
  height: 500px;
  border-radius: 15px;
  background-color: #e1e1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  table{
    width: 100%;
    padding: 10px 0;
  }
  button{
    cursor: pointer;
  }
`

const ExitButton = styled.div`
  position: fixed;
  top: 20px;
  right: 40px;
  background-color: #6e0101;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  transition: .2s;
  :hover{
    transform: scale(1.05);
  }
  :active{
    transform: scale(1.08);
  }
`
export default Container