export const SearchResult = (props) => {
  console.log(props.data, 2)
  let i = 0
  return (
      <>
      {props.data.map((id) => (
      <tr key={i}>
          <td>{i + 1}</td>
          <td>학생</td>
          {/* <td>{data[i].stu_id / 1000}</td>
          <td>{data[i].stu_id / 100 % 10}</td>
          <td>{data[i].stu_id % 100}</td> */}
          <td>{props.data[i].stu_id}</td>
          <td>{props.data[i].stu_id}</td>
          <td>{props.data[i].stu_id}</td>
          <td>최홍찬</td>
          <td>X</td>
          <td>{props.data[i++].attend_time}</td>
        </tr>
      ))}
      </>
  )
}