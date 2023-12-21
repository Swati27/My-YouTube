import './App.css'
import Body from './components/Body';
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header/>
      <Body/>
      {/* 
        -Header
        -Body
         - Sidebar
           - MenuItems
         - MainContainer
           - ButtonList
           - VideoContainer
           - VideoCard   
       */}
    </div>
  );
}

export default App;
