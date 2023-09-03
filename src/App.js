import { Container } from "react-bootstrap";
import MyNavBar from "./component/NavBar";
import Header from "./component/Header";
import Categories from "./component/Category";
import Item from "./component/MenuItem";
import MenuItem from "./component/MenuItem";
import { items } from "./data";
import { useState } from "react";
function App() {
  const[itemsData,setItemsData]= useState(items);


  const AllCategories = ['الكل', ...new Set(items.map((item)=> item.category))];


  //filter by category

  const FilterByCategory=(category)=>{
    if(category === 'الكل'){
      setItemsData(items)
    }else{
      const newArray = items.filter((item)=> item.category === category);
    setItemsData(newArray);
    }


  }

//Filter By Search
  const FilterBySearch=(word)=>{
    if(word !== ''){    
      const newArray = items.filter((item)=> item.title === word);
      setItemsData(newArray);
    }
     


  }



  return (
   <div className="font color-body"> 
      <MyNavBar filterBySearch={FilterBySearch}/>
    <Container>
      <Header/>
      <Categories filterByCategory={FilterByCategory}
      allCategories={AllCategories} />

      <MenuItem itemsData={itemsData}/>
    
    </Container>
   </div>
  );
}

export default App;
