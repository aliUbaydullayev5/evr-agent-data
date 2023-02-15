import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

`


const Form = styled.form`
  background-color: rgb(235,236,239);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  gap: 10px;
  >input{
    font-size: 22px;
    width: 100%;
    font-family: var(--legoFont);
  }
  >button{
    width: 100%;
    padding: 10px 20px;
    cursor: pointer;
  }
  .submit{
    cursor: pointer;
    font-size: 26px;
    cursor: pointer;
  }
`

export {Form}
export default Container