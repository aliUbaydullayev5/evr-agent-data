import styled from 'styled-components'


const Container = styled.div`
  padding: 40px 0 30px 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 60px auto;
  > input {
    padding: 5px 10px;
    font-size: 22px;
    border-radius: 10px;
    border: 2px solid #d2d2d2;
  }
  >button{
    padding: 5px 10px;
    font-size: 22px;
    cursor: pointer;
    border: 2px solid #d2d2d2;
    border-radius: 10px;
    transition: .2s;
    :hover{
      transform: scale(1.01);
    }
    :active{
      transform: scale(1.2);
    }
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


export {ExitButton}
export default Container