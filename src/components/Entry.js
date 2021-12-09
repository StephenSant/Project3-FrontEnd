import '../style/Logs.css'
const Entry = (props) => {

  const content = props.props.content
  const dayWritten = props.props.day_written
  const logType = props.props.log_type

  return(
    <div className="entry">
      <h3>Day {dayWritten} | {logType} Logs | Dr. Carl Baker - Geologist</h3>
      <p>{content}</p>
      <button>Read Less</button>
    </div>
  )
}
export default Entry;