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

  componentDidMount(){
    axios('https://project3-expedition.herokuapp.com/creatures.json').then((response) => {
      this.setState({creatures: response.data});
    })
  }
  render(){
    return(
      <main>
          <Thumbnail props = {this.state.creatures[0]}/>
      </main>
    )
  }
}
export default Creatures;