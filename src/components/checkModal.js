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
          <label>분류 </label>
          <select>
            <option>전체</option>
            <option>고등학교</option>
            <option>중학교</option>
            <option>선생님(교직원)</option>
          </select>

          <label> 학년 </label>
          <select>
            <option>전체</option>
            <option>1학년</option>
            <option>2학년</option>
            <option>3학년</option>
          </select>

          <label> 반 </label>
          <select>
            <option>전체</option>
            <option>1반</option>
            <option>2반</option>
            <option>3반</option>
            <option>4반</option>
          </select>

          <input id="checkBtn" type="button" value="등록" onClick={check} />
        </div>
        <img src={logo} alt="학교로고" className="modal-logo" />
        <p>회색 바탕 클릭시 모달 나가짐</p>
      </div>
      <div className="modalBg" onClick={close} />
    </div>
  )
}