import {useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import ProductsItems from "./Components/ProductsItems/ProductsItems";
import UniqProductItem from "./Components/UniqProductItem/UniqProductItem";
import HomeWrapper from "./Pages/HomeWrapper";
import Errors from "./Errors/Errors";
import Gallery from "./Components/Gallery/Gallery";
import ShoppBag from "./Components/ShoppBag/ShoppBag";




function App() {
  const [itemInfo, setItemInfo] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // console.log(itemInfo)

 const onAdd = (itemInfo) =>{
  // console.log(itemInfo)
    // const ProductExist = cartItems.find((item) => item.id === itemInfo.id)
    // if (ProductExist) {
    //     setCartItems(
    //       cartItems.map((item) => 
    //       item.id === itemInfo.id
    //       ?{...ProductExist}
    //       : item)
    //     )
    // }else{
    //    setCartItems([...cartItems, {...itemInfo}])     
    // }
    // console.log(itemInfo)
}

const onRemove = (itemInfo) =>{}

  const [newArrivals, setNewArrivals] = useState([
    {
      id: '1',
      title: 'Thermo Ball Etip Gloves',
      price: 459,
      img: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png.webp'
    },
    {
      id: '2',
      title: 'Thermo Ball Etip Gloves',
      price: 429,
      img: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png.webp'
    },
    {
      id: '3',
      title: 'Thermo Ball Etip Gloves',
      price: 519,
      img: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png.webp'
    },
])
   
    const docTitle = document.title;
    window.addEventListener('blur', () =>{
     document.title = 'Come back...'
    })
    window.addEventListener('focus', () =>{
     document.title = docTitle;
    })

  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<HomeWrapper/>}>
             <Route index element={<Home newArrivals={newArrivals}/>}/>
                <Route path="productsItem">
                    <Route index element={<ProductsItems  onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} setItemInfo={setItemInfo} itemInfo={itemInfo}/>}/>
                    <Route path=":id" element={<UniqProductItem setItemInfo={setItemInfo} itemInfo={itemInfo}/>}/>
                </Route>
             <Route path="shoppBag" element={<ShoppBag  cartItems={cartItems} setCartItems={setCartItems}  onAdd={onAdd}/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="about" element={<About/>}/>
             <Route path="gallery" element={<Gallery setItemInfo={setItemInfo} itemInfo={itemInfo}/>}/>
              
          </Route>
          <Route  path="*" element={<Errors/>}/>
       </Routes>
    </div>
  );
}


  export default App;
   