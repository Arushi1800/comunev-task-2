import {useEffect ,useState} from 'react';
import axios from './axios';
import ListDisplay from './components/ListDisplay';

function App() {
  const [list,setList] = useState([]);
  useEffect(() => {
    async function fetchData(){
      const {data} = await axios.get('/api/?results=100&inc=name');
      setList(data.results);
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <h1>TASK 2</h1>
      {
        (list) ? 
        list.map(listItem => (
          <ListDisplay title = {listItem.name.title} first = {listItem.name.first} last ={listItem.name.last}></ListDisplay>
        )): <p>NOT LOADED</p>
      }
    </div>
  );
}

export default App;
