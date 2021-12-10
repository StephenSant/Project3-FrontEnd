import Entry from '../components/Entry.js';
import React, {Component} from 'react';
import axios from 'axios';

class Logs extends Component {
  constructor(){
    super();
    this.state = {
      entries:[{}],
      crewMembers:[{}]
    }
  }

  componentDidMount(){
    axios('https://project3-expedition.herokuapp.com/log_entries.json').then((response) => {
      this.setState({entries: response.data});
    })
    axios('https://project3-expedition.herokuapp.com/crew_members.json').then((response) => {
      this.setState({crewMembers: response.data});
    })
  }

  render(){
    return(
      <main>
        {/* Loop this */}
        <Entry props = {this.state}/>
      </main>
    )
  }
}
export default Logs;