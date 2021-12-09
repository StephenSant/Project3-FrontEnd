import Entry from '../components/Entry.js';
import React, {Component} from 'react';
import axios from 'axios';

class Logs extends Component {
  constructor(){
    super();
    this.state = {
      entries:[{}]
    }
  }

  componentDidMount(){
    axios('https://project3-expedition.herokuapp.com/log_entries.json').then((response) => {
      this.setState({entries: response.data});
    })
  }

  render(){
    return(
      <main>
        {/* Loop this */}
        <Entry props = {this.state.entries[0]}/>
      </main>
    )
  }
}
export default Logs;