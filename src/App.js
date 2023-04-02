import React from 'react';
import './App.css';
import Form from './Form';


class App extends React.Component {
  constructor(props){
    super(props);
    this.amount=0;
    this.state = {
      data:{}
    }
  }
  componentDidMount(){
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data:result.rates
        })
      })
  }

  render(){
    return (
      <div className="App">
        <h3>Currency Converter</h3>
        <Form data={this.state.data} />
      </div>
    );
  }
  
}

export default App;
