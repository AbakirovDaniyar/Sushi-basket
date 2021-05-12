import {SushiCard} from './components/SushiCard'
import pic from './images/1.png'
import pic1 from './images/2.png'
import pic2 from './images/3.png'
import pic3 from './images/4.png'
import "./App.css"
function App() {

  const data = [
    {
      bg: pic,
      title: "УНАГИ УРАМАКИ",
      inside1: "угорь, авокадо, сливочный сырб",
      inside2: "огурец, соус, унаги, кунжут",
      price: "100$",
      qty: "8 штук",
      kcal: "Калорийность Ккал 298",
      btn1:"-",
      btn2:"+",
      btn3:"Добавить в корзину"
    },
      {
      bg: pic1,
      title: "МАДРИД РОЛЛ",
      inside1: " Лосось, авокадо, спайси соус ",
      inside2: "перец чили, икра тобико",
      price: "85$",
      qty: "8 штук",
      kcal: " Калорийность Ккал 275",
      btn1:"-",
      btn2:"+",
      btn3:"Добавить в корзину"
    },
      {
      bg: pic2,
      title: "ТЕПЛАЯ КРЕВЕТКА С МОЦАРЕЛЛОЙ ",
      inside1: " Теплый ролл-Креветка, тамаго",
      inside2: "огурец, сливочныйсыр, сыр моцарелла",
      price: "95$",
      qty: "8 штук",
      kcal: "Калорийность Ккал 257",
      btn1:"-",
      btn2:"+",
      btn3:"Добавить в корзину"
    },
      {
      bg: pic3,
      title: " ФРЕШ РОЛЛ С БАКЛАЖАНОМ",
      inside1: " Рисовая бумага, лист салата",
      inside2: "баклажан в чесносом соусе, помидор",
      price: "40$",
      qty: "6 штук",
      kcal: " Калорийность Ккал 255",
      btn1:"-",
      btn2:"+",
      btn3:"Добавить в корзину"
    }
  ]
  return (
    <div className="App">
     {
       data.map((el) => {
         return <SushiCard 
         el={el} />
        
       })
     }
    </div>
  );
}

export  {App};
