import Container from './components/Container';
import { Router } from './components/Router';
import MenuBar from './components/MenuBar';
import Map from './components/Map';
import './App.css';
export function App(){
  return(
    <>
   <div className="App">
    <Router/>
     <MenuBar/>
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