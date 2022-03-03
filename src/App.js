import { Header } from "./components/header";
import './style/index.css'
import logo from "./assets/schoolLogo.png"
import React from "react"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { SearchResult } from "./components/searchResult";

function App() {
  const [searchOption, setSearchOption] = useState({
    category : 'all',
    grade : 'all',
    class : 'all'
  })
  let result = []
  const [isLogged, setIsLogged] = useState(0)
  const [data, setData] = useState([])
  const optionChageCate = (e) => {
    setSearchOption({
      category : e.target.value,
      grade: searchOption.grade,
      class : searchOption.class
    })
  }
  const optionChageGrade = (e) => {
    setSearchOption({
      category : searchOption.category,
      grade : e.target.value,
      class : searchOption.class
    })
  }
  const optionChageClass = (e) => {
    setSearchOption({
      category : searchOption.category,
      grade : searchOption.grade,
      class : e.target.value
    })
  }
  const update = async() => {
    await fetch("http://localhost:8888/inquiry").catch(err => console.log(err + "가 발생했다."))
    .then((res) => res.json()).then(res => setData(res))
    console.log(data, "data")
    // let i = 0
    // result = []
    // result = data.map((id) => (
    //   <tr key={i}>
    //       <td>{i + 1}</td>
    //       <td>학생</td>
    //       {/* <td>{data[i].stu_id / 1000}</td>
    //       <td>{data[i].stu_id / 100 % 10}</td>
    //       <td>{data[i].stu_id % 100}</td> */}
    //       <td>{data[i].stu_id}</td>
    //       <td>{data[i].stu_id}</td>
    //       <td>{data[i].stu_id}</td>
    //       <td>최홍찬</td>
    //       <td>X</td>
    //       <td>{data[i].attend_time}</td>
    //     </tr>
    // ))
    console.log(result, "1")
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
    //example(result)
  }
  return (
    <div>
      <img src={logo} alt="schoolLogo" className="schoolLogo" />
      <div className="container">
        <Header login={isLogged} setLogin={setIsLogged} />
        <form>
          <label>분류 </label>
          <select value={searchOption.category} name="category" onChange={optionChageCate}>
            <option value="all">전체</option>
            <option value="high">고등학교</option>
            <option value="middle">중학교</option>
            <option value="teacher">선생님(교직원)</option>
          </select>

          <label> 학년 </label>
          <select value={searchOption.grade} name="grade" onChange={optionChageGrade}>
            <option value="all">전체</option>
            <option value="one">1학년</option>
            <option value="two">2학년</option>
            <option value="three">3학년</option>
          </select>

          <label> 반 </label>
          <select value={searchOption.class} name="class" onChange={optionChageClass}>
            <option value="all">전체</option>
            <option value="first">1반</option>
            <option value="second">2반</option>
            <option value="third">3반</option>
            <option value="four">4반</option>
          </select>

          <input id="searchBtn" type="button" value="조회하기" onClick={update}></input>
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
              <SearchResult data={data}/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
