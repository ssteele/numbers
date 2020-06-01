'use strict';

const e = React.createElement;

class Counting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <input
            className="small-12 columns input"
            type="number"
            name="number"
            value={this.state.value}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>

        <div className="row">
          <button
            className={"small-5 columns button large round"}
            onClick={() => {
              const newValue = +this.state.value - 1;
              if (newValue >= 0) {
                this.setState({ value: newValue })};
              }
            }
          >-1</button>

          <button
            className={"small-5 columns button large round"}
            onClick={() => this.setState({ value: +this.state.value + 1 })}
          >+1</button>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#counting');
ReactDOM.render(e(Counting), domContainer);
