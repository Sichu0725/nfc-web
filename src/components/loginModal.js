
export const LoginModal = (props) => {
  const close = () => {
    props.modal(0)
  }
  return (
    <div>
      <div className="modal">
        <h2>ADMIN LOGIN</h2>
        <form className="login_form">
          <input type="text" placeholder="ID" />
          <input type="password" placeholder="PASSWORD" />
        </form>
      </div>
      <div className="modalBg" onClick={close}>
      </div>
    </div>
  )
}