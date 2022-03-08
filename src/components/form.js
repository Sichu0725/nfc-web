import { ToastContainer } from "react-toastify"
export const Form = (props) => {
  return (
    <form>
          <label>분류 </label>
          <select value={props.searchOption.category} name="category" onChange={props.optionChageCate}>
            <option value="all">전체</option>
            <option value="high">고등학교</option>
            <option value="middle">중학교</option>
            <option value="teacher">선생님(교직원)</option>
          </select>

          <label> 학년 </label>
          <select value={props.searchOption.grade} name="grade" onChange={props.optionChageGrade}>
            <option value="all">전체</option>
            <option value="one">1학년</option>
            <option value="two">2학년</option>
            <option value="three">3학년</option>
          </select>

          <label> 반 </label>
          <select value={props.searchOption.class} name="class" onChange={props.optionChageClass}>
            <option value="all">전체</option>
            <option value="first">1반</option>
            <option value="second">2반</option>
            <option value="third">3반</option>
            <option value="four">4반</option>
          </select>

          <input id="searchBtn" type="button" value="조회하기" onClick={props.update}></input>
          
        </form>
  )
}