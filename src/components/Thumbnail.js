import '../style/Animal.css'
const Thumbnail = (props) => {

  const creatureName = props.props.species + ' ' + props.props.genus

  return(
    <a href=''>
      <div className='grid-item'>
        <img src='https://via.placeholder.com/150'/>
        <h4>{creatureName}</h4>
      </div>
    </a>
  )
}
export default Thumbnail;