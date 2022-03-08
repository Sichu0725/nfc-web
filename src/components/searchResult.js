import moment from 'moment'

export const SearchResult = (props) => {
  let i = 0
  return (
      <>
      {props.data.map((id) => (
      <tr key={i}>
          <td>{i + 1}</td>
          <td>{props.data[i].category}</td>
          {/* <td>{data[i].stu_id / 1000}</td>
          <td>{data[i].stu_id / 100 % 10}</td>
          <td>{data[i].stu_id % 100}</td> */}
          <td>{parseInt(props.data[i].stu_id / 1000)}</td>
          <td>{parseInt(props.data[i].stu_id / 100 % 10)}</td>
          <td>{props.data[i].stu_id % 100}</td>
          <td>{props.data[i].stu_name}</td>
          <td className='check'>O</td>
          <td>{moment(props.data[i++].attend_time).format('YYYY-MM-DD hh:mm:ss')}</td>
        </tr>
      ))}
      </>
  )
}