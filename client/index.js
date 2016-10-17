//Create new component. This component will produce some HTML
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'

const API_KEY = 'AIzaSyDva9MrZS8JyJpdO0XnIFMkcts2nn1uabk';
// Use this key in your application by passing it with the key=API_KEY parameter.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    );
}

//Take this component generate html and put it in the DOM
ReactDOM.render(<App />,document.querySelector('.container'))