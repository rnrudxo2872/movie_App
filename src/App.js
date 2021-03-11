import React from 'react'
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./component/Navigation"
import Home from "./routes/Home"
import About from "./routes/About"

function App(){
  return(
    <div>
      <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      </HashRouter>
    </div>
  )
}

export default App;