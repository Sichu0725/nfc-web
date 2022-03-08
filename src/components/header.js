import { CheckModal } from "./checkModal"


export const Header =(props) => {
  const modalOn = () => {
    props.setIsClick(1)
  }

  return (
    <div className="header">
      <h2 className="title">GBSW 아침 발열체크 현황</h2>
      <button onClick={modalOn} >발열체크 수동 체크</button>
      { props.modalIsClick === 1 ? <CheckModal modal={props.setIsClick} /> :<hr/>}
    </div>
  )
}