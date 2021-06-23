import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import rectangle from'./Rectangle.png'


function App() {

  const [coins,setCoins]= useState([]);
  const [search,setSearch]=useState("");

 useEffect(() => {

    setInterval(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false').then((res)=>{
      setCoins(res.data)
    }).catch((err)=>{
      console.log(err);
    })
    }, 1000);

    
  },[])


const filteredcoins = coins.filter((coin)=>{
 return( coin.name.toLowerCase().includes(search.toLowerCase()))
})

 



return (
 <div className="App">

   <div className="coinsearch">
   <img className="rectangle" src={rectangle}/>

     <h1 className="currencyh1">Select your Currency</h1>
     <form>
       <input type="text"  placeholder="Search" className="cointext  button1" onChange={(e)=>{setSearch(e.target.value)}}/>

  </form>
</div>

<div className="coinmain">
{filteredcoins.map((coin)=>{
  return(
    <div className="coincontainer">
      <div className="coinbar">

      <div className="coinh1">{coin.name}</div>
      <div> <p> INR.{coin.current_price}</p></div>
      <div><img className="image" src={coin.image}  /></div>

</div>


      </div>)})}

             </div>
             </div>)
}

    



export default App;
