import '../style/Planet.css'
import planet_gif from '../images/globeGif.gif'
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const Planet = () => {
  return(
    <main>
      <div className='info'>
        <div>
          <table>
          <thead><tr><td>Mass<br/>(earth)</td><td>Radius<br/>(earth)</td><td>Gravity<br/>(m/s^2)</td><td>Density<br/>(g/m^3)</td><td>Day Length<br/>(hours)</td><td>Axial Tilt<br/>(degrees)</td></tr></thead>
          <tbody><tr><td>0.47</td><td>0.7</td><td>9.41</td><td>7.54</td><td>26</td><td>20</td></tr></tbody>
          </table>        
        </div>
        <div>
        <div>
          <ul>
            <li>Nitrogen</li>
            <li>Oxygen</li>
            <li>Argon</li>
            <li>Carbon Dioxide</li>
            <li>Ozone</li>
            <li>Other</li>
          </ul>
        </div>
        <div className='pie'>
        <Pie 
        data={{labels: ['Nitrogen', 'Oxygen', 'Argon','Carbon Dioxide', 'Ozone', 'Other'],
          datasets: [{
            label: 'Atmospheric Gases',
            backgroundColor: [
              '#0C4AED',
              '#0C8BF7',
              '#00B5E0',
              '#0CF7E7',
              '#0CED9E',
              '#0CED6A'
            ],
            data: [74, 24.05, 0.8, 1, 0.05,0.1],
          }]
        }}
        options={{
          maintainAspectRatio: false,
          title: {
          display: true,
          text: 'Title',
          fontSize: 25
          },
          legend: {
            display: true,
            position: 'left'
          }
        }}
        /></div>
        </div>
      </div>
      <img className='planet' src={planet_gif} />
    </main>
  )
}
export default Planet;