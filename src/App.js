import './App.css';
import Cards from './components/Cards';

const Data = [
  {
    image: "https://images.olx.com.pk/thumbnails/304656137-240x180.webp",
    description: "Earphones",
    price: "RS 1,150",
    address: "Gojra Bypass   2 minute ago",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/304656142-240x180.webp",
    description: "Nissan highway 2017 model japan",
    price: "RS 2,450,000",
    address: "Jaranwala Faislabad    5 minute ago",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/304664213-240x180.webp",
    description: "Honda CD 70",
    price: "RS 18,500",
    address: "Allama Iqbal Town-College Block Lahore   10 minute ago",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/304655358-240x180.webp",
    description: "iphone xs 64 non pta",
    price: "RS 23,000",
    address: "Bahria Town Sector D   1 minute ago",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/299742790-240x180.webp",
    description: "10 Marla plot for sale C block Pia Colony Multan",
    price: "RS 5,000,000",
    address: "PIA Employees Housing Society, Multan 5 days ago",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/303624594-240x180.webp",
    description: "M50 For Sale Good Condition Like New",
    price: "RS  100,000",
    address: "Alam Chowk, Gujranwala 3 days ago",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/304868458-240x180.webp",
    description: "Audionic Max 230",
    price: "RS 4,800",
    address: "Mughalpura Lahore  1 minute ago",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/301077132-400x300.webp",
    description: "Imc Estate Offering 5 Marla Plot For Sale",
    price: "RS 4,800,000",
    address: "Bahria Town - Alamgir Block Extension, Lahore   1 minute ago",
  },
];
function App() {
  return (
    <div className="App">
      <h1>olx Cards UI With React </h1>

      <div className='Cards_Wrapper'>
        {
          Data.map((e, i) => {
            return (
              <Cards
                key={i}
                description={e.description}
                image={e.image}
                price={e.price}
                feature={e.feature}
                address={e.address}
              />
            )
          })

        }

      </div>

      <h1>olx Cards UI With React </h1>
    </div>
  );
}

export default App;
