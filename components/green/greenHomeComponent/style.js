import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  margin: 20px auto;
  min-height: 400px;
  border-radius: 10px;
  background-color: #f6f6f6;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  @media only screen and (max-width: 800px) {
    margin: 0 auto 10px auto;
  }
`

Container.Section = styled.div`
  width: 300px;
  background: rgba(0, 102, 255, 0.1);
  border: 3px solid rgba(0, 102, 255, 0.1);
  box-shadow: 0 1px 10px 1px rgba(13, 11, 107, 0.2);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .mainImgDiv {
    position: relative;
  }
  .imgDivText {
    position: absolute;
    top: 5px;
    left: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    -webkit-text-stroke: 0.2px white;
    color: rgba(0, 0, 0, 0.96);
  }

  .img {
    width: 274px;
    height: 40px;
    opacity: .5;
    border-radius: 10px;
  }

  table {
    width: 100%;
    padding: 10px 0;
  }

  button {
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
  height: 700px;
  overflow-x: scroll;
  position: fixed;
  top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  z-index: 99999;

  .modalSection {
    max-height: 400px;
    overflow-x: scroll;
    width: 400px;

    .title {
      font-weight: bold;
    }
  }

  .insetDiv {
    min-width: 300px;
    background-color: rgb(40, 40, 40);
    max-width: 700px;
    width: 100%;
    min-height: 300px;
    border-radius: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;

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

    .fileInput[type="file"] {
      display: none !important;
    }

    .custom-file-upload {
      border: 1px solid #ccc !important;
      background: #bdbdbd;
      display: inline-block !important;
      padding: 15px !important;
      width: 368px !important;
      border-radius: 8px !important;
      cursor: pointer !important;
    }

    .fileInput {
      width: 368px !important;
      background: #FFFFFF;
      border: 1px solid #CCCCCC !important;
      border-radius: 8px !important;
      font-weight: 400 !important;
      font-size: 16px !important;
      /* identical to box height, or 150% */
      padding: 12px !important;
      color: #333333 !important;
    }

    .closeImg {
      position: absolute;
      top: 20px;
      right: 20px;
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

    > div {
      background-color: #d0d0d0;
      padding: 3px 5px;
      border-radius: 5px;
    }
  }

  .img {
    width: 100%;
    height: 60px;
  }

  .mapDimPay {
    border-bottom: 2px solid black;
    margin: 10px 0 20px 0;
  }
  
  button{
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
Container.TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 38px 10px 6px;
  gap: 13px;
  isolation: isolate;
  position: relative;
  
  width: 260px;
  height: 262px;

  background: rgba(224, 224, 224, 0.48);
  border-radius: 15px;
  .title{
    position: absolute;
    top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
  .text{
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    color: #000000;
    >span{
      font-weight: 500;
    }
  }
  .buttonLeft{
    width: 123px;
    height: 31px;
    background: #2A0FCF;
    border-radius: 3px;
    position: absolute;
    left: 5px;
    bottom: 5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #FFFFFF;
    border: 0;
  }
  .buttonRight{
    width: 123px;
    height: 31px;
    background: #2A0FCF;
    border-radius: 3px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    border: 0;
  }
`

Container.SearchSection = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  >input{
    height: 50px;
    width: 400px;
    font-size: 22px;
    border-radius: 10px;
    border: 2px solid gray;
    padding: 0 10px;
  }
  @media only screen and (max-width: 800px) {
    justify-content: start;
    padding: 90px 20px 20px 20px;
    
  }
`

export {ExitButton, Modal}
export default Container