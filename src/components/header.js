import { useState } from "react"
import { LoginModal } from "./loginModal"
import { CheckModal } from "./checkModal"
import { BiLogIn } from "react-icons/bi"


export const Header =(props) => {
  const [modalIsClick, setIsClick] = useState(0)
  const modalOn = () => {
    setIsClick(1)
  }
  const check = () => {

  }
  if (props.login === 0) {
    return (
      <div className="header">
        <h2 className="title">GBSW 아침 발열체크 현황</h2>
        <button onClick={modalOn} >어드민으로 로그인<BiLogIn/></button>
        { modalIsClick === 1 ? <LoginModal modal={setIsClick} setLogin={props.setLogin} /> :<hr/>}
      </div>
    )
  }
  else if (props.login === 1) {
    return (
      <div className="header">
        <h2 className="title">GBSW 아침 발열체크 현황</h2>
        <button onClick={modalOn} >발열체크 수동 체크</button>
        { modalIsClick === 1 ? <CheckModal modal={setIsClick} /> :<hr/>}
      </div>
    )
  }
  else {
    alert("잘못된 접근입니다.")
    props.setLogin(0)
  }
}