import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .lineImg{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const Block = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  background: ${({back})=> back ? back : '#fff'};
  box-shadow: 0 6px 10px ${({back})=> back ? back : '#fff'};
  backdrop-filter: blur(5px);
  font-size: 22px;
  font-weight: 700;
  transition: .4s;
  :hover{
    transform: scale(1.03);
  }
`
const LogOutButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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

export {Block, LogOutButton}
export default Container