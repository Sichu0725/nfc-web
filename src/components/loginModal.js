import logo from "../assets/schoolLogo.png"
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginModal = (props) => {

  const close = () => {
    props.modal(0)
  }
  const login = () => {
    //대충 id,password 유효성 검사해서 로그인 하는 코드
    props.setLogin(1)
    toast('로그인 성공!', {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
      });
    close()
    //로그인 완료되면 로그인용 헤더로 변경
    console.log("로그인 완료오?")
  }
  return (
    <div>
      <hr/>
      <div className="modal">
        <h2>GBSW 아침 발열 체크 현황</h2>
        <form className="login_form">
          <input className="id"  type="text" placeholder="ID" />
          <input className="pass" type="password" placeholder="PASSWORD" />
          <input id="login-submit" className="login-submit" type="button" value="LOGIN" onClick={login} />
        </form>
        <img src={logo} alt="학교로고" className="modal-logo" />
        <p>회색 바탕 클릭시 모달 나가짐</p>
      </div>
      <div className="modalBg" onClick={close}>
      </div>
    </div>
  )
}