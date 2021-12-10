import '../style/Logs.css'
const Entry = (props) => {

  const content = props.props.entries[0].content
  const dayWritten = props.props.entries[0].day_written
  const logType = props.props.entries[0].log_type

  const crewMember = props.props.crewMembers[0]

  return(
    <div className="entry">
      <h3>Day {dayWritten} | {logType} Log | {crewMember.title} {crewMember.first_name} {crewMember.last_name} - {crewMember.job}</h3>
      <p>{content}</p>
      <button>Read Less</button>
    </div>
  )
}
export default Entry;