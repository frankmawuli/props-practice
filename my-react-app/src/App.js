import Navbar from './Components/Navbar';
import data from  './Components/data'
import Content from './Components/Content';
import './App.css'
function App() {
  let info = data.map((element) =>{
    return(<
            Content
            key = {element.id}
            {...element}
          />)
  })
  const style ={
    marginTop: '150px'
  }
  return (
    <div className="App">
      
        <Navbar/>
        hqq
        <div style={style}>
          {info}
        </div>
      
      
    </div>
  );
}

export default App;
