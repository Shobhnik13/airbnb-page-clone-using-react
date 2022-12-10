import './App.css';
import Navbar from './components/navbar'
import Main from './components/main'
import Card from './components/card'
import Data from './data'
console.log(Data); 
function App() {
  const cards=Data.map(item=>{
    return (
      <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Main />
      <section className='cards-list'>
      {cards}
      </section>
      </div>
  );
}

export default App;
