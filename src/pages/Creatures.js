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
    for (let i = 0; i < this.state.creatures.length; i++) {
      return(
        <Thumbnail props ={this.state.creatures[i]}/>
      )
    }
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