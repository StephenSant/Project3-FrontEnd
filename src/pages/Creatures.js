import '../style/Creatures.css'
import Thumbnail from '../components/Thumbnail.js'
import axios from 'axios';
import React, {Component} from 'react';

class Creatures extends Component {
  
  constructor(){
    super();
    this.state = {
      creatures:[{}]
    }
    
  }

  loopThroughThumbnails = () => {
    const temp = [];
    for (let i = 0; i < this.state.creatures.length; i++) {
        temp.push(<Thumbnail props ={this.state.creatures[i]}/>)
    }
    return temp
  }

  componentDidMount(){
    axios('https://project3-expedition.herokuapp.com/creatures.json').then((response) => {
      this.setState({creatures: response.data});
    })
  }
  
  render(){
    return(
      <main>
          {this.loopThroughThumbnails()}
      </main>
    )
  }
}



export default Creatures;