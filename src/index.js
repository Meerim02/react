import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"

    




// const nav = <nav></nav>
// const header  = <header></header>
// const main = <main><h1>Hello</h1></main>
// const footer = <footer></footer>

// const Header = () => {
//     return <header>Header</header>
// }

// const Main = () => {
//     return <main>Main</main>
// }

// const Footer = () => {
//     return <footer>Footer</footer>
// }





ReactDOM.render(
    <div>
       <Header/>
       <Main/>
       <Footer/>
    </div>
    ,document.getElementById("root")
)
