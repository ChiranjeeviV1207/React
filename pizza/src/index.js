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
      {/* <Pizza />
      <Pizza /> */}
    </div>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>My Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((piz) => (
          <Pizza pizzaObj={piz} key={piz.name} />
        ))}
      </ul>
      {/* <Pizza
        name="Focaccia Pizza"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={10}
      />
       <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      /> */}
    </div>
  );
}
function Pizza(p) {
  return (
    <li className="pizza">
      <img src={p.pizzaObj.photoName} alt={p.pizzaObj.name} />
      <div>
        <h3>{p.pizzaObj.name}</h3>
        <p>{p.pizzaObj.ingredients}</p>
        <span>{p.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Header() {
  //   return React.createElement("h1", null, "My Company");
  return (
    <header className="header">
      <h1>My Company</h1>
    </header>
  );
}
function Footer() {
  // const hour = new Date().getHours();
  // alert(hour >= 10 && hour <= 22 ? "We are Open now " : "We are Close now ");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are Open now
    </footer>
  );
}

// const mobileData = [
//   {
//     name: "Samsumg",
//   },
//   {
//     name: "poco",
//   },
// ];
// function App1() {
//   return (
//     <div className="container">
//       <Header1 />
//       {/* <List />
//       <Footer />
//       <Mobile /> */}

//       <Mobile
//         name="iPhone 13 pro"
//         Details="128GB RAM, 64MP, 5G"
//         PhotoName="download1.png"
//         price={56000}
//       />

//       <Mobile
//         name="iPhone 11"
//         Details="128GB RAM, 64MP, 4G"
//         PhotoName="download2.png"
//         price={39000}
//       />
//     </div>
//   );
// }
// function Header1() {
//   // const css={color:"blue"};
//   return (
//     <header className="header">
//       <h1 style={{ color: "orange", fontSize: "50px" }}>
//         Welcome to the Apple store
//       </h1>
//     </header>
//   );
// }
// function Mobile(props) {
//   return (
//     <div className="mobile">
//       {/* <h2>iPhone</h2>
//       <img src="download1.png" alt="Pic" />
//       <img src="download2.png" alt="Pic" /> */}
//       <h2>{props.name}</h2>
//       <h2>{props.Details}</h2>
//       <div>
//         <img src={props.PhotoName} alt="hey" />
//       </div>
//       <h2>{props.price + 99}</h2>
//     </div>
//   );
// }
// function List() {
//   return (
//     <div>
//       <img src="logo192.png" alt="Pic" />
//       <img src="logo512.png" alt="Pic2" />
//     </div>
//   );
// }
// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 9;
//   const closeHour = 22;
//   const open = hour >= openHour && hour <= closeHour;
//   console.log(open);

//   if (hour >= openHour && hour <= closeHour) alert("We are currently open");
//   else alert("Sorry we're closed");

//   return (
//     <h2>{new Date().toLocaleTimeString()} Let's buy or order from home</h2>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
