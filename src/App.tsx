import React from 'react';
import './App.css';
import { CategoryList } from './components/CategoryList';
import ObjectOrientedProg from './components/Terms.jsx';
import  Title  from './components/Title';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";


const Home = () => {
  return (
    <div className="App">
      <Title text="Interview Preparation" />
        <CategoryList />

        {/* <div className="terms">
        <Collapsable />
        <Collapsable />
        <Collapsable />
        <Collapsable />
        <Collapsable />
            <Collapsable />
        </div> */}
    </div>
  )

}

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/terms" component={withRouter(ObjectOrientedProg)}  />
       
    </Switch>

    </Router>
   
  );
}

export default App;
