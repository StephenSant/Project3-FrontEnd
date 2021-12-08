import '../style/Logs.css'
const Entry = (props) => {

  const content = props.props.entry_text
  const dayWritten = props.props.day_written
  const entryType = props.props.entry_type
  const entryNumber = props.props.entry_number

  return(
    <div className="entry">
      <h3>{dayWritten}: | {entryType} Entry: {entryNumber}  | Dr. Carl Baker - Geologist</h3>
      <p>{content}</p>
      <button>Read Less</button>
    </div>
  )
}
export default Entry;