import './App.css';
import Countries from './component/Countries/Countries';

function App() {
  
  // console.log(countries);
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}


/* const [countries, setCountries] = useState([])
  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }) */

/* function Country(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
    </div>
  )
} */


export default App;
