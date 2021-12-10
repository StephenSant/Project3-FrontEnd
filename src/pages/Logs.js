import React, {Component} from 'react';
import axios from 'axios';
import '../style/Logs.css'

class Logs extends Component {
  constructor(){
    super();
    this.state = {
      entries:[{}],
      crewMembers:[{}]
    }
  }

  componentDidMount(){
    axios('https://project3-expedition.herokuapp.com/crew_members.json').then((response) => {
      this.setState({crewMembers: response.data});
      });
    axios('https://project3-expedition.herokuapp.com/log_entries.json').then((response) => {
    this.setState({entries: response.data});
    })
    
  }



  render(){

    const items = []

    for (let index = 0; index < this.state.entries.length; index++) {
      items.push(<div className="entry">
        <h3>Day {this.state.entries[index].day_written} | {this.state.entries[index].log_type} Log | {/*this.state.crewMembers[25].first_name} {{this.state.crewMembers[this.state.entries[index].crew_member_id].first_name} {this.state.crewMembers[this.state.entries[index].crew_member_id].last_name} - {this.state.crewMembers[this.state.entries[index].crew_member_id].job}*/}</h3>
        <p>{this.state.entries[index].content}</p>
        <button>Read Less</button>
        </div>)
    }

    return(
      <main>
        {items}
      </main>
    )
  }
}
export default Logs;