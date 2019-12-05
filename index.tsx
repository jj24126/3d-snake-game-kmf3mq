import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import display from './display';
import Snake from './Snake';
import SnakeTests from './SnakeTests';
import WorldModel from './WorldModel'
import CanvasView from './CanvasView'
import Point from './Point'

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {  
    return (
      <div>
        <Hello name={this.state.name} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        {
            //<SnakeTests />
        }
        {
          // <DuckTests />
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// Add display statements below
display("Let's get started with React TypeScript!");

const s = new Snake(new Point(4,0),4)
display(s.position.x)
const wm = new WorldModel()
wm.update(1)
s.turnLeft
wm.update(1)
display(s.position.x)

const cv = new CanvasView(40)
//wm.addView = cv
wm.update(1)


