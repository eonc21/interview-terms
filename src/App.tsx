import React from 'react';
import './App.css';
import { CategoryList } from './components/CategoryList';
import Collapsable from './components/Collapsable';
import  Title  from './components/Title';

function App() {
  return (
    <div className="App">
      <Title text="Interview Preparation" />
        <CategoryList />

        <div className="terms">
            <Collapsable />
        </div>
    </div>
  );
}

export default App;
