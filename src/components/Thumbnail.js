import '../style/Creatures.css'
import {Link} from "react-router-dom";

const Thumbnail = (props) => {

  const creatureName = props.props.t_species + ' ' + props.props.t_genus

  return(
    <Link to={`/creature/show/${props.props.id}`}>
      <div className='grid-item'>
        <img src='https://via.placeholder.com/150'/>
        <h4>{creatureName}</h4>
      </div>
    </Link>
  )
}
export default Thumbnail;