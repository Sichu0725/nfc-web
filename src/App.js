import { Header } from "./components/header";
import './style/index.css'
import logo from "./assets/schoolLogo.png"
import React from "react"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {
  const [isNewPage, setNewPage] = useState(0)
  const example = () => {
    const result = []
    //api에서 받아온 json을 풀어서 저 형태로 넣어서 반환하면 됨
    const size = 60 //받아온 json의 길이
    for (let i = 1; i <= size; i++) {
      result.push(<tr key={i}>
                    <td>{i}</td>
                    <td>학생</td>
                    <td>2</td>
                    <td>1</td>
                    <td>20</td>
                    <td>최홍찬</td>
                    <td>X</td>
                    <td>2021-2-15 11:11:59</td>
                  </tr>)
    }
    return result
  }
  const update = () => {
    setNewPage(1)
    toast.success('조회완료!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
      });
  }
  return (
    <div>
      <img src={logo} alt="schoolLogo" className="schoolLogo" />
      <div className="container">
        <Header/>
        <form>
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

          <input type="button" value="조회하기" onClick={update} />
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{textAlign:"left"}}
            />
        </form>

        <div className="check-table">
          <table>
            <tbody>
              <tr>
                <th className="no">NO.</th>
                <th className="category">분류</th>
                <th className="grade">학년</th>
                <th className="class">반</th>
                <th className="s_no">번호</th>
                <th className="name">이름</th>
                <th className="check">발열체크 여부</th>
                <th className="time">시간</th>
              </tr>
              {isNewPage === 1 ? example() : <tr></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
