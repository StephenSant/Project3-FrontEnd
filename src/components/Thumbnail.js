import '../style/Creatures.css'
const Thumbnail = (props) => {

  const creatureName = props.props.t_species + ' ' + props.props.t_genus

  return(
    <a href='/creature/show'>
      <div className='grid-item'>
        <img src='https://via.placeholder.com/150'/>
        <h4>{creatureName}</h4>
      </div>
    </a>
  )
}
export default Thumbnail;