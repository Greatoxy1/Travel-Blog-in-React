import Container from './components/Container';
import { Router } from './components/Router';
import Map from './components/Map';
import './App.css';
export function App(){
  return(
    <>
   <div className="App">
    <Router/>
    
     </div>
    <div className="container">
     
      <Container/>
       <Map/>
      <div>

    </div> 
    </div>
    </>
  )
}