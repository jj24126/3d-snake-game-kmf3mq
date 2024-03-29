import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import display from './display';
import Snake from './Snake';
import SnakeTests from './SnakeTests';
import WorldModel from './WorldModel';
import CanvasView from './CanvasView';
import Point from './Point';
import GameController from './GameController';
import HumanPlayer from './HumanPlayer';
import SnakeController from './SnakeController';
import Player from './Player';
import LRKeyInputHandler from'./LRKeyInputHandler';
import AvoidWallsPlayer from './AvoidWallsPlayer';

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

const snk1 = new Snake(new Point(4,3),2)
const snk2 = new Snake(new Point(7,8),4)
display(snk1.position.x)
const wm = new WorldModel()
wm.update(1)
snk1.turnRight()
snk1.move(10)
wm.update(1)
display(snk1.position.x)

const cv = new CanvasView(40)
wm.addView(cv)
wm.addSnakes(snk1)
wm.addSnakes(snk2)
cv.display(wm)
wm.update(1)

const GC = new GameController(wm)
const lrk = new LRKeyInputHandler()
const sc1 = new SnakeController(wm,snk1)
const sc2 = new SnakeController(wm,snk2)

const hp = new HumanPlayer(sc1,lrk)
const awp = new AvoidWallsPlayer(sc2)
GC.p1 = hp
GC.p2 = awp




