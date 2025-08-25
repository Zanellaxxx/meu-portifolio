// App.jsx
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const cardData = [
    {
      image: '/logo.jpg', 
      title: 'Gojo',
      description: 'Nah, I d win'
    },
    {
      image: '/sukuna.jpg',
      title: 'Sukuna',
      description: 'Sukuna is here.'
    },
    {
      image: '/goku.jpg',
      title: 'Goku',
      description: 'KAMEHAMEHAAAA!!!!!!!'
    }
  ];

  return (
    <div className="App">
      <Header />
      <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', padding: '20px' }}>
        {cardData.map((card, index) => (
          <Card 
            key={index} 
            image={card.image} 
            title={card.title} 
            description={card.description} 
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;