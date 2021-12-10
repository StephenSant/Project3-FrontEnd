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
    axios('https://project3-expedition.herokuapp.com/log_entries.json').then((response) => {
      this.setState({entries: response.data});
    })
    axios('https://project3-expedition.herokuapp.com/crew_members.json').then((response) => {
      this.setState({crewMembers: response.data});
    })
  }



  render(){

    const items = []

    for (const [index, value] of this.state.entries.entries()) {
      items.push(<div className="entry">
        <h3>Day {this.state.entries[index].day_written} | {this.state.entries[index].log_type} Log | {this.state.crewMembers[index].title} {this.state.crewMembers[index].first_name} {this.state.crewMembers[index].last_name} - {this.state.crewMembers[index].job}</h3>
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