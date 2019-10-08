import React from "react"
import uuid from 'react-uuid'
import clsx from 'clsx'
import {Grid} from "@material-ui/core"
import {lime, blue} from '@material-ui/core/colors'
import {makeStyles} from "@material-ui/core/styles"

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
      speed: 500,
      interval: {},
      rows: 23,
      cols: 40,
      generation: 0,
      // grid: Array(this.rows).fill(Array(this.cols).fill(false))
      grid: pattern2
    };
  }

  arrayDeepCopy = arr => {
    return JSON.parse(JSON.stringify(arr));
  };

  playRandom = () => {
    let newGrid = Array(this.state.rows).fill(
      Array(this.state.cols).fill(false)
    );
    newGrid = newGrid.map(row => {
      return row.map(col => {
        return Math.random() - 0.5 > 0;
      });
    });
    this.setState({ grid: newGrid });
  };

  checkGameOver = async (g1, g2) => {
    if (JSON.stringify(g1) === JSON.stringify(g2)) {
      this.stopGame();
      this.playRandom();
      // this.startGame();
    }
  };

  nextGen = () => {
    const { grid, generation } = this.state;
    let newGrid = this.arrayDeepCopy(grid);
    // let newGrid = Array(this.state.rows).fill(Array(this.state.cols).fill(true))
    for (let i = 0; i < this.state.rows; i++)
      for (let j = 0; j < this.state.cols; j++) {
        newGrid[i][j] = this.liveOrDie(i, j);
      }

    this.checkGameOver(grid, newGrid);
    this.setState({ grid: newGrid, generation: generation + 1 });
  };

  liveOrDie = (row, col) => {
    const { grid } = this.state;
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

  clear = () => {
    let newGrid = this.arrayDeepCopy(this.state.grid);
    newGrid = newGrid.map(row => {
      return row.map(col => {
        return false;
      });
    });
    this.setState({ grid: newGrid, generation: 0 });
  };

  stopGame = () => {
    clearInterval(this.state.interval);
  };

  startGame = () => {
    this.setState({ interval: setInterval(this.nextGen, this.state.speed) });
  };

  componentDidMount() {
    this.playRandom();
    this.startGame();
  }

  render() {
    // const classes = useGameStyles()
    return (
      <Grid container direction="column" style={{opacity: 0.8}}>
        <GameGridRow
          cols={this.state.cols}
          grid={this.state.grid}
          rows={this.state.rows}
          selectBox={this.selectBox}
        />
      </Grid>
    );
  }
}

const GameCell = (props) => {
    const classes = useCellStyles();
    const {status} = props;
  
    return (
        <div className={clsx(classes.root, status ? classes.alive : classes.dead)}
        style={{width: '0.5rem', height: '0.5rem'}}/>    
    );
  }

const GameGridRow = (props) => {
    const renderGrid = props.grid.map((row, i) => {
      const gridRow = row.map((col, j) => {
        return (
          <Grid item key={uuid()}>
            <GameCell key={i + "_" + j} status={col} />
          </Grid>
        );
      });
      return <Grid container key={uuid()} direction="row">{gridRow}</Grid>;
    });

    return <Grid item key={uuid()}>{renderGrid}</Grid>;
  }
