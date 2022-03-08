import { Header } from "./components/header";
import './style/index.css'
import logo from "./assets/schoolLogo.png"
import React from "react"
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { SearchResult } from "./components/searchResult";
import { Form } from "./components/form";
import { Head } from "./components/head";
//import useSwr from "swr"

function App() {
  //const { data, error } = useSWR('/api/user', fetcher)

  //if (error) return <div>failed to load</div>
  //if (!data) return <div>loading...</div>
  //return <div>hello {data.name}!</div>

  const [searchOption, setSearchOption] = useState({
    category : 'all',
    grade : 'all',
    class : 'all'
  })
  const [mode, setMode] = useState(1)
  const [isLogged, setIsLogged] = useState(0)
  const [value, setData] = useState([])
  const [modalIsClick, setIsClick] = useState(0)

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
    await fetch("http://localhost:8888/inquiry").catch(err => toast.warning(`ERROR가 발생했습니다. ${err}`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
    })).then((res) => res.json()).then(res => setData(res))
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
  //

  useEffect(() => {
    update()
  }, [])

  if (mode) {
    return (
      <div>
        <Head/>
        <img src={logo} alt="schoolLogo" className="schoolLogo" />
        <div className="container">
          <Header setMode={setMode} login={isLogged} setLogin={setIsLogged} modalIsClick={modalIsClick} setIsClick={setIsClick} />
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
                <SearchResult data={value}/>
              </tbody>
            </table>
          </div>
        </div>
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
      </div>
    );
  }
  else {
    return (
      <div>
        <img src={logo} alt="schoolLogo" className="schoolLogo" />
        <div className="container">
          <Header setMode={setMode} login={isLogged} setLogin={setIsLogged} />
          
          <Form mode={mode} update={update} searchOption={searchOption} optionChageCate={optionChageCate} optionChageGrade={optionChageGrade} optionChageClass={optionChageClass}/>
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
                <SearchResult data={value}/>
              </tbody>
            </table>
          </div>
        </div>
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
      </div>
    );
  }
}

export default App;
