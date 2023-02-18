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
  .img{
    width: 50px;
    height: 50px;
  }
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
  z-index: 999;
  :hover{
    transform: scale(1.05);
  }
  :active{
    transform: scale(1.08);
  }
`

const Modal = styled.div`
  width: 100%;
  position: fixed;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .insetDiv {
    min-width: 300px;
    max-width: 700px;
    width: 100%;
    min-height: 300px;
    border-radius: 15px;
    background-color: rgba(40, 40, 40, 0.96);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .closeImg {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }

    input {
      background-color: #c0c0c0;
      border-radius: 5px;
      padding: 4px 8px;
      border: 0;
      font-size: 20px;
      margin: 0 3px;
    }

    > div {
      background-color: #d0d0d0;
      padding: 3px 5px;
      border-radius: 5px;
    }

  }
`

export {ExitButton, Modal}
export default Container