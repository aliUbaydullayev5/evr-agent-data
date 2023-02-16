import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

Container.Inset = styled.form`
  width: 80%;
  height: 90%;
  position: relative;

  .lineImg {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 80px;
    text-align: center;
    color: #224957;
  }

  .subTitle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #224957;
  }

  .customInput {
    width: 300px;
    height: 45px;
    background: #224957;
    border-radius: 10px;
    border: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    padding: 0 18px;

  }
  >div {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .checkboxInput {
    width: 18px !important;
    height: 18px !important;
    background: #224957 !important;
    border-radius: 5px !important;
  }
  .submitButton{
    width: 300px;
    height: 45px;
    background: #20DF7F;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-transform: capitalize;
    color: #224957;
    cursor: pointer;
    transition: .3s;
  }

  .submitButtonDiv{
    :hover{
      .submitButton{
        transform: translate(0, -10px);
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
`

export default Container