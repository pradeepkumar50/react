import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // Inline style using JSX
  //let styling = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  let styling = {};

  return (
    <header className="header footer">
      <h1 style={styling}>KP Firefly Grill</h1>
    </header>
  );
}

function Menu() {
  let pizzas = pizzaData;
  // let pizzas = [];
  let numPizzas = pizzas.length;

  return (
    <main className="menu">
      {/*  tailwindcss */}
      <h2 className= "text-xl text-yellow-500 font-semibold" >Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We are still working on our Menu. Please come back later ....</p>
      )}

      {/* name = {pizza.name} ingredients = {pizza.ingredients} price={pizza.price} photoName={pizza.photoName} */}
      {/* <Pizza
          name="prosciutto pizza"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          photoName="pizzas\prosciutto.jpg"
          price={10}
        /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  /* if (props.pizzaObj.soldOut) {
    return null;
  } */

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  let hours = new Date().getHours();
  console.log(hours, "**");
  let openingHour = 0;
  let closingHour = 24;

  /* if (hours >= openingHour && hours <= closingHour) {
    console.log("KP firefly & Grill Opens now");
  } else {
    console.log("Sorry we are closed now !!!");
  } */

  let isOpen = hours >= openingHour && hours <= closingHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            {" "}
            We're open until {closingHour}:00. Come visit us or order Online ...
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
    //React.createElement('footer',null,"We are currently Open. !!!")
  );
}

// React version 18

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before version 18
//React.render(<App/>)
