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


  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 15px;
    width: 368px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  > input {
    width: 368px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    padding: 12px;

    color: #333333;
    
  }
  >button{
    transition: .2s;
    cursor: pointer;
    width: 368px;
    height: 56px;
    border: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;

    background: #7A5CFA;
    border-radius: 8px;
    
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