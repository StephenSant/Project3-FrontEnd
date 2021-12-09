import '../style/Creatures.css'
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
    axios('http://localhost:3000/creatures.json').then((response) => {
      this.setState({creatures: response.data});
    })
  }

  render(){
    return(
      <main>
        <h1>Creature Name</h1>
        <table>
          <thead><tr><td>Species</td><td>Genus</td><td>Family</td><td>Sub-order</td><td>Order</td><td>Phylm</td><td>Kingdom</td><td>Domain</td></tr></thead>
          <tbody><tr><td>Stephenus Bovris</td><td>Bovris</td><td>asf</td><td>asdasf</td><td>sfahgh</td><td>fasfg</td><td>agxve</td><td>fsafsf</td></tr></tbody>
        </table>  
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit perspiciatis ratione doloribus explicabo. Atque vero animi corrupti doloribus voluptatibus, amet neque nobis tempore aut, explicabo sed tempora expedita. Quidem rerum nemo distinctio accusantium sint porro earum at? Distinctio accusamus dolorum est, voluptas excepturi modi tempora, dolore quis eos facere ipsa et incidunt iste labore veritatis, porro ullam in repudiandae expedita eligendi doloremque ipsam aliquid! Blanditiis perspiciatis ex est, cumque suscipit voluptatem aspernatur facere, omnis distinctio, necessitatibus cupiditate eos vero repudiandae. Voluptatibus quae nesciunt voluptatem expedita, voluptatum culpa doloribus animi, aliquid tempora aliquam fuga ducimus veritatis magni. Deleniti ducimus animi in provident blanditiis fugiat rerum consectetur facere quo aperiam omnis reprehenderit vero aut, rem quaerat sapiente odio alias, officiis error porro quos incidunt! Modi provident explicabo accusantium labore recusandae culpa facere dicta? Temporibus natus assumenda nesciunt minus, dolorum totam autem odit rerum soluta iste exercitationem odio esse aliquam sequi asperiores sint fuga adipisci magni delectus cumque facere quibusdam perspiciatis nemo. Iste soluta asperiores corrupti eius enim quia, quaerat laboriosam voluptas ullam animi perferendis amet reiciendis suscipit unde explicabo incidunt temporibus nisi aut necessitatibus vel optio debitis rem? Facilis earum mollitia sunt perspiciatis, ipsum ipsa id aperiam quae quo eum enim, velit nobis culpa obcaecati facere possimus, ratione molestias. Ratione pariatur repellendus alias impedit repudiandae expedita officiis? Dolorem, quos sit. Voluptate ipsa, laboriosam illo fugiat doloribus animi deleniti. Doloribus dignissimos ipsa assumenda officiis dolorum voluptate repellendus sunt voluptas? Repellat doloribus esse, dolore cum placeat eius sit corrupti commodi inventore provident ut sunt velit exercitationem debitis vitae consequuntur libero mollitia. A, possimus. Vitae veritatis repellat ipsam eveniet adipisci consequuntur. Dicta, error officia dolore nulla impedit doloremque enim reprehenderit dolores at. Magni quam animi porro quasi cum dolore sint nesciunt recusandae amet earum, eius sed natus vero? Repellendus provident expedita, sed optio rem voluptatum vitae? Ab facilis deleniti dolores debitis. Aliquam repudiandae dolores, accusantium eveniet soluta modi nisi saepe quas! Rem voluptates voluptatibus fugit, nemo non enim nisi iusto eum! Aut accusamus nam culpa? Quisquam, modi aliquid dolorem accusamus molestiae sequi dolorum recusandae quae officia quia. Recusandae itaque expedita unde? Voluptas, cumque officia unde commodi aut, placeat itaque odit, vel optio beatae deserunt? Vel odit minus eius, reprehenderit laboriosam ea praesentium! Nam quas ducimus consectetur hic laudantium a. Nesciunt assumenda maiores voluptates! Dicta perspiciatis, officia harum repellendus excepturi cumque ut minima? Architecto harum tenetur libero. Beatae hic modi repellendus, animi ratione reiciendis accusantium eum voluptates id minus eius deserunt facilis qui perferendis necessitatibus laudantium iure sunt ea sequi neque nulla! Inventore omnis aliquam dolor veritatis labore eligendi neque animi sed ratione culpa, odio hic reprehenderit quo eum nobis exercitationem fugit modi velit nesciunt? Deleniti porro at, nesciunt optio animi, minus consequuntur quasi similique magni neque vero nihil earum ab nostrum molestiae debitis tempore autem perspiciatis, pariatur ipsum! Vel dicta et perferendis possimus sunt rerum autem facilis tempore odit, beatae quos eaque distinctio libero nostrum ratione quia mollitia dignissimos expedita quae deserunt dolore sint. Suscipit beatae eaque vitae fuga aut, illum earum molestias incidunt et?
        </p>
      </main>
    )
  }
}
export default Creatures;