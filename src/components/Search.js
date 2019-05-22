import React, { Component } from 'react';

class SearchDirection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPoint: '',
      lastPoint: '',
    }
    this.functionStart = this.functionInitialPoint.bind(this);
    this.functionEnd = this.functionLastPoint.bind(this);
}

  functionInitialPoint(event) {
    this.setState({
      ...this.state,
      initialPoint: event.target.value
    })
  }

  functionLastPoint(event) {
    this.setState({
      ...this.state,
      lastPoint: event.target.value
    })
  }

  render() {
      return (
          <div className="App">
            <input onChange={(event) => this.functionInitialPoint(event)}  value={this.state.initialPoint} placeholder=" Punto de inicio"></input>
            <input onChange={(event) => this.functionLastPoint(event)}  value={this.state.lastPoint}  placeholder="Punto de llegada"></input>
            <button onClick={() => this.props.coordUser(this.state.initialPoint, this.state.lastPoint)}>Ir</button>
          </div>
      );
  }
}



export default SearchDirection;