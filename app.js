class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
  
  var style = {
    'font-weight': this.state.done ? 'bold' : 'normal'
  };
  
    return (
      <li style={style} onMouseEnter={this.onListItemClick.bind(this)} onMouseLeave={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <GroceryListItems todo={todo} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList todos={["cucumber", "kale"]}/>
  </div>
);

ReactDOM.render(<App />,document.getElementById('app'));





ReactDOM.render(<App />,document.getElementById('app'));


