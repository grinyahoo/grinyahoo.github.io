import React from "react"
import uuid from 'react-uuid'
import clsx from 'clsx'
import {Grid} from "@material-ui/core"
import {lime, blue} from '@material-ui/core/colors'
import {makeStyles} from "@material-ui/core/styles"
import './Game.css'
import { resolve } from "path"

const rndBool = () => {
  const rnd =  Math.floor(Math.random()*100);
  return (rnd < 50)
}

const useCellStyles = makeStyles({
  root: {
    backgroundColor: blue[50],
    margin: 0,
    flex: '1 1 auto',
  },
  alive: {
    backgroundColor: lime['A400'],
    borderRadius: '50%',
    // boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1)", 
    filter: "contrast(200%)"
  },
  dead: {
    backgroundColor: 'transparent'
  }
})

const pattern = [
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, true,false, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false, true, true,false,false,false,false,false,false, true, true,false,false,false,false,false,false,false,false,false,false,false,false, true, true,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false, true,false,false,false, true,false,false,false,false, true, true,false,false,false,false,false,false,false,false,false,false,false,false, true, true,false,false,false],
    [false, true, true,false,false,false,false,false,false,false,false, true,false,false,false,false,false, true,false,false,false, true, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false, true, true,false,false,false,false,false,false,false,false, true,false,false,false, true,false, true, true,false,false,false,false, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false, true,false,false,false,false,false, true,false,false,false,false,false,false,false, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false, true,false,false,false, true,false,false,false,false,false,false,false,false, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false, true, true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
  ]
const pattern2 = [
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false, true, true, true, true, true, true, true, true,false, true, true, true, true, true,false,false,false, true, true, true,false,false,false,false,false,false, true, true, true, true, true, true, true,false, true, true, true, true, true],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
  ]


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1000,
      rows: 23,
      cols: 40,
      generation: 0,
      // grid: Array(this.rows).fill(Array(this.cols).fill(false))
      grid: pattern2
    };
    this.interval = {}
    this.grid = pattern2
  }

  

  arrayDeepCopy = arr => {
    return JSON.parse(JSON.stringify(arr));
  };

  updateGrid = (grid) => {this.grid = grid}

  playRandom = () => {
    const {rows, cols} = this.state;
    const newGrid = Array(rows).fill(Array.from({length: cols}, rndBool))
    this.updateGrid(newGrid);
  };

  checkGameOver = (g1, g2) => {
    if (JSON.stringify(g1) === JSON.stringify(g2)) {
      this.stopGame();
      console.log('Game stopped')
    }
  };

  prepareGen = () => {return new Promise((resolve, reject) => {
    const { grid } = this;
    const next =  grid.map((row, i) => {
        return row.map((col, j) => {
          return this.liveOrDie(i,j)
        })
    })
    resolve(next);
    // setTimeout(resolve(next), 1)
  })}

  nextGen = async () => {
    const { grid } = this;
    console.log("Next gen called");
    const t0 = Date.now();
    const nG =  grid.map((row, i) => {
      return row.map((col, j) => {
        return this.liveOrDie(i,j)
      })
  })

    // console.log('Next gen called')
    // const nG = await this.prepareGen();
    // console.log('Next gen ready');

    this.checkGameOver(grid, nG);
    console.log(`Next gen op time: ${Date.now() - t0} ms`)
    this.updateGrid(nG);
    this.setState({generation: this.state.generation + 1})
    console.log(`w/State upd time: ${Date.now() - t0} ms`)
    // setTimeout(this.nextGen, this.state.speed)
    // this.nextGen();
  };

  liveOrDie = (row, col) => {
    const { grid } = this;
    let population = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0) continue;
        try {
          if (grid[row + i][col + j]) {population++}
        } catch (error) {}
      }
    }

    switch (population) {
      case 2:
        return grid[row][col] === true;
      case 3:
        return true;
      default:
        return false;
    }
  };

  // clear = () => {
  //   const newGrid = Array(this.rows).fill(Array(this.cols).fill(false))
    // this.setState({ grid: newGrid, generation: 0 });
  // };

  stopGame = () => {
    clearInterval(this.interval);
  };

  startGame = () => {
    // this.setState({ interval: setInterval(this.nextGen, this.state.speed) });
    this.interval = setInterval(this.nextGen, this.state.speed);
    // this.nextGen();
  };

  componentDidMount() {
    this.playRandom();
    this.startGame();
    // this.nextGen();
  }

  render() {
    // const classes = useGameStyles()
    return (
      <Grid container direction="column" style={{opacity: 0.8}}>
        <GameGridRow
          grid={this.grid}
          gen={this.state.generation}
        />
      </Grid>
    );
  }
}

const GameCell = (props) => {
    // const classes = useCellStyles();
    const cellState = props.status ? 'on' : 'off';

    return (
        <div className={`cell-box ${cellState}`} />    
    );
  }

const GameGridRow = (props) => {
    const renderGrid = props.grid.map((row, i) => {
      const gridRow = row.map((col, j) => {
        return (
          <Grid item >
            <GameCell key={i + "_" + j} status={col} />
          </Grid>
        );
      });
      return <Grid container key={uuid()} direction="row">{gridRow}</Grid>;
    });

    return <Grid item key={uuid()}>{renderGrid}</Grid>;
  }
