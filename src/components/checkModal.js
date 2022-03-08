import logo from "../assets/schoolLogo.png"
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CheckModal = (props) => {
  const check = () => {
    toast.info('등록완료!', {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
      });

      console.log("등록 완료?")
  }
  const close = () => {
    props.modal(0)
  }
  
  return (
    <div>
      <hr/>
      <div className="modal">
        <h2>발열체크 현황 수동 체크</h2>
        <div className="check-form">
          <input type="number" placeholder="학번을 입력해주세요" />
          <input type="text" placeholder="이름을 입력해주세요" />
          <input type="password" placeholder="인증코드를 입력해주세요" />
          <input id="checkBtn" type="button" value="등록" onClick={check} />
        </div>
        <img src={logo} alt="학교로고" className="modal-logo" />
        <p>회색 바탕 클릭시 모달 나가짐</p>
      </div>
      <div className="modalBg" onClick={close} />
    </div>
  )
}