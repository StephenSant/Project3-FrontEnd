import '../style/Creatures.css'
import axios from 'axios';
import React, {Component} from 'react';

class ShowCreature extends Component {

  constructor(){
    super();
    this.state = {
    }
    
  }

  componentDidMount(){
    const SetID = (id) => {
      axios(`https://project3-expedition.herokuapp.com/creatures/${id}.json`).then((response) => {
        console.log(response.data)
        this.setState(response.data);
      })
    }
    SetID(window.location.pathname.split("/").pop());
  }

  render(){
    return(
      <main>
        <h1>{this.state.t_species} {this.state.t_genus}</h1>
        <table>
          <thead><tr><td>Species</td><td>Genus</td><td>Family</td><td>Order</td><td>Class</td><td>Phylm</td><td>Kingdom</td><td>Domain</td></tr></thead>
          <tbody><tr><td>{this.state.t_species}</td><td>{this.state.t_genus}</td><td>{this.state.t_family}</td><td>{this.state.t_order}</td><td>{this.state.t_class}</td><td>{this.state.t_phylum}</td><td>{this.state.t_kingdom}</td><td>{this.state.t_domain}</td></tr></tbody>
        </table>  
        <br/>
        <ul>
          <li>Average Height: {this.state.avg_height}</li>
          <li>Average Length: {this.state.avg_length}</li>
          <li>Average Weight: {this.state.avg_weight}</li>
        </ul>
        <p>
          {this.state.description}
        </p>
      </main>
    )
  }
}
export default ShowCreature;