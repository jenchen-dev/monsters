import { Component } from 'react'; 

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: 'Jean', lastName: 'Chen' },
      company: 'ASUS'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName} , I work at {this.state.company}</p>
          <button 
            onClick={() => {
              this.setState(
                () => {
                  return {
                    // shallow merge
                    name: { firstName: 'Okasana', lastName: 'Villanelle' }
                    // this is async, React will stack all the state change and do it altogether
                  };
                },
                () => {
                  console.log(this.state); // from synchonous to callback (async)
                  // this will run only when the state is fully updated
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>

    );
  }
}

export default App;
