import styled from 'styled-components'

const hiddenFunc = (hiddenState) => {
    if(hiddenState){
        return {
            top: '20px',
            left: '20px'
        }
    }else{
        return {
            top: '20px',
            left: '-410px'
        }
    }
}


const Container = styled.div`
  position: absolute;
  width: 400px;
  min-height: 100px;
  border-radius: 13px;
  background: rgb(150, 150, 150);
  transition: .3s;
  z-index: 9999999999999;
  ${({hiddenState}) => hiddenFunc(hiddenState)}
  padding: 15px 25px;
  display: grid;
  gap: 7px;
  grid-template-columns: 45px 1fr;
  @media only screen and (max-width: 800px) {
    width: 80%;
    max-width: 400px;
    padding: 5px 10px;
  }

`
Container.Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
Container.Right = styled.div`
  padding: 5px 0;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 20px;
`
Container.MessageArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 24px;
    color: #fff;
    line-height: 26px;
  }

  .desc {
    font-size: 18px;
    color: #000000;
    line-height: 22px;
  }
`
Container.IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default Container