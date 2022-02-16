import { useState } from "react"
import { LoginModal } from "./loginModal"
import { BiLogIn } from "react-icons/bi"


export const Header =() => {
  const [modalIsClick, setIsClick] = useState(0)
  const login = () => {
    console.log("응 로그인 하지마~")
    setIsClick(1)
  }
  return (
    <div className="header">
      <h2 className="title">GBSW 아침 발열체크 현황</h2>
      <button onClick={login} >어드민으로 로그인<BiLogIn/></button>
      { modalIsClick === 1 ? <LoginModal modal={setIsClick} /> :<hr/>}
    </div>
  )
}