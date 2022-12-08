import './App.css';
import Navbar from './components/navbar'
import Main from './components/main'
import Card from './components/card'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Card 
      img="../images/card1.svg"
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life lessons with Ktie Zaferes"
      prices={136}
      />
   </div>
  );
}

export default App;
