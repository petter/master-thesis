import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState(state => ({...state, data})))
      .catch(error => this.setState(state => ({...state, error})));
  }

  componentDidUpdate() {
    console.log("State updated!", this.state);
  }

  render() {
    if(this.state.error) {
      return (
        <div>
          <h1>An error occurred</h1>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    if(this.state.data === undefined) {
      return 'Loading...';
    }

    const name = this.state.data.name;
    const pokemonTypes = this.state.data.types;
    const image = this.state.data.sprites.front_default;

    return (
      <div>
        <img src={image} />
        <h1>{name}</h1>
        <h2>Types</h2>
        <ul>
          {pokemonTypes.map(pokemonType => (
            <li key={pokemonType.type.name}>{pokemonType.type.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}


export default Pokemon;
