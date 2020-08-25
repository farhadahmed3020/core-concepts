import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const products =[
   {name: 'Photoshop',price:'$90.99'},
   {name: 'Illustrator',price:'$60.99'},
  
   {name:'PDF Reader',price:'$6.99'},
   {name:'Premium pro',price:'$267.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        {/* <Product name ={product[0].name} price= {product[0].price}></Product>
      //   <Product name ={product[1].name} price ={product[1].price}></Product> */}
      {/* // <Product product={product[0]}></Product> 
      // <Product product={product[1]}></Product> 
      // <Product product={product[2]}></Product>
   */}
   <Counter></Counter>
    <Users></Users>
   {
     products.map(product=><li>{product.name}</li>)
   }
   {
    products.map(pd=><Product product={pd}></Product>)
     }
      </header>
    </div>
  );
}
function Counter(){
  const[count,setCount] = useState(20);
 
   return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick = {()=> setCount(count-1)}> Decrease</button>
    </div>
  )
}
function Users() {
  const[users,setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
     <ul>
       {
         users.map(user=><li> Name:{user.name}  Email:{user.phone}</li>)
       }
      
       {
         users.map(user=><li>{user.email}</li>)
       }
     </ul>
    </div>
  )
}
function Product(props) {
  const productStyle={ 
   border : '1px solid gray',
  borderRadius :'5px',   
  backgroundColor:'lightGray',
  height:'200px',
  width: '400px',
  float:'left',
  margin:'10px'
  
  }
  const{name,price} =props.product;
    return(
      <div style= {productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
      </div>
    )
  }

// function Person() {
//   const personStyle={
//     border :'2px solid red',
//     padding : '15px',
//     margin :'20px'
//   }
//   return (
//     <div style={personStyle}>
//   <h1>Name: farhad</h1>
//   <h3>Hero of the years</h3>
//   </div>
//   )
// }


export default App;
