import '../style/Animal.css'
import Thumbnail from '../components/Thumbnail.js'
import axios from 'axios';
import React, {Component} from 'react';

class Animals extends Component {
  constructor(){
    super();
    this.state = {
      creatures:[{}]
    }
  }

  componentDidMount(){
    axios('http://localhost:3000/creatures.json').then((response) => {
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
export default Animals;