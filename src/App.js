import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks= ["annwar",'Jafor','omgir', 'salam', 'lildar', 'goriver sele'];
  const products= [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price: '6.99'},
    {name: 'Premiere EL', price: '$249.99'}
  ]
  const beepFriends = [
    {name:'redoyan', job:'student', age:'22'},
    {name:'maju', job:'student', age:'22'},
    {name:'fahim', job:'student', age:'24'},
    {name:'arif', job:'student', age:'25'},
    {name:'mithu', job:'student', age:'25'}
  ]

  const productNames=products.map(product=>product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map(nayok=> <li>{nayok}</li>)}
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
          {
            products.map(product=> <li>{product.name}</li> )
          }
        </ul>
        {/* <img src={logo} className="App-logo" alt="logo" /><p>Edit <code>src/App.js</code> and save to reload.</p> */}
        
        {/* first way */}
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product> */}
        {/* second way */}
        {
          products.map(product=> <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name="Sultan" job="web developer"></Person>
        <Person name="kawser" job="web developer"></Person>

        {beepFriends.map(friend=> <Friends friend={friend}></Friends>)}
        {/* <Friends friend={beepFriends[0]}></Friends>
        <Friends friend={beepFriends[3]}></Friends> */}
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  /**in this case i used 4 type for this eventHandler. the shortest way has been applied at the end */
  // const handleIncrease = () => setCount(count + 1);
  // // {
  // //   // const  newCount = count + 1;
  // //   // setCount(newCount);
  // //   setCount(count + 1);
  // // }
  return(
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onMouseOver={() => setCount(count + 1)}>Increase</button>
      <button onMouseOver={()=>setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
} 
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      {
        users.map(user=> <li>{user.name} - {user.email}</li>)
}
    </div>
  )
}

function Friends(props) {
  const friendsStyle= {
    border:'5px solid blue',
    borderRadius:"5px",
    height:"150px",
    width:'400px',
    backgroundColor:'salmon',
    marginBottom:"10px",
    padding:'10px'
  }
  const {name, job, age}= props.friend;
  return(
    <div style={friendsStyle}>
      {/* <h3>Name: {props.friend.name}</h3>
      <h6>{props.friend.job}</h6>
      <h6>{props.friend.age}</h6> */}
      <h3>Name: {name}</h3>
      <h6>{job}</h6>
      <h6>{age}</h6>
    </div>
  )
}

function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightpink',
    height:'200px',
    width: "200px",
    float:'left',
    marginBottom: "10px"
  }
  // second ways shorten way
  const {name, price}=  props.product;
  console.log(name, price)
  return(
    <div style={productStyle}>
      {/* frist way */}
      {/* <h2>{props.name}</h2>
      <h1>{props.price}</h1> */}

      {/* second way */}
      {/* <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5> */}

      {/* second ways shorten way */}
      <h3>{name}</h3>
      <h5>{price}</h5>

      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'2px solid gold',
    width: "400px",
    margin: '10px'
  }
  console.log(props)
  return (
    <div style={personStyle}>
      <h3>My Name: {props.name} </h3>
      <p>My Profession: {props.job} </p>
    </div>
  )
}

export default App;
