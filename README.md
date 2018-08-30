# Tic Fac Toe by the A Team - Ryan, Matt and Mr T.


## Our link: https://tic-fac-toe.netlify.com/

![](https://i.imgur.com/oW45CM7.png)

## Preparation

### Wireframe

Live Figma Preview: https://www.figma.com/file/VMhodyDAjR7Y5lQPIH1lzmHE/Untitled

![](https://i.imgur.com/GUWEpgo.png)

### Component Hierarchy

#### View 1: Choose Players

- Wrapper
  - Header
  - Page Wrapper
    - Box
      - Select x2 

#### View 2: Game

- Wrapper
  - Header
  - Page Wrapper
    - Box
    - Board
      - Square (x9)

#### View 3: End of Game

- Wrapper
  - Header
  - Page Wrapper
    - Board
    
### Interesting Code / Challenges

![](https://media0.giphy.com/media/l4HohVwFLzHKcwa6A/giphy.gif)

#### Error handling

Error handling is simple, we just updated the text in our 'Box' component with the error message.

``` javascript
nextView() {
    if (this.state.player1 === this.state.player2) {
      this.setState({ instruction: "Please choose 2 different players" });
    } else {
      this.setState({ view: 2 });
    }
  }
```

#### Building our grids
``` javscript
  buildGrid = () => {
    return [1, 2, 3].map(y =>
      [1, 2, 3].map(x => {
        let coords = `${x}${y}`;
        return (
          <div onClick={() => this.squareHandler(x, y)}>
            <Square
              x={x}
              y={y}
              state={this.board[x][y]}
              id={coords}
              key={coords}
              player={this.state.player}
            />
          </div>
        );
      })
    );
  };
  ```
#### Passing childs state to the parent

##### Parent

```javascript
  player1handler(value) {
    this.setState({
      player1: value
    });
  }
  player2handler(value) {
    this.setState({
      player2: value
    });
  }
```

```javascript
            <Select action={this.player1handler} id="Player 1" />
            ...
            <Select action={this.player2handler} id="Player 2" />
```



##### Child:

```javascript
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.action(event.target.value);
  }
```

