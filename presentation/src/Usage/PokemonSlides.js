import React from 'react';
import { Slide, Heading } from 'spectacle';
import Code from '../components/Code';
import Pokemon from './Pokemon';

const PokemonSlides = () => (
	<>
    <Slide>
      <Heading>Using PTS (in a more complete implementation)</Heading>
      <Code language="typescript">{`
        template FetchJSON {
          class FetchJSON extends Component {
            componentDidMount() {
              fetch(this.props.url)
                .then(response => response.json())
                .then(data => this.setState(state => ({...state, data})))
                .catch(error => this.setState(state => ({...state, error})));
            }
          }
        } 
      `}</Code>
    </Slide>
    <Slide>
      <Heading>Using PTS (in a more complete implementation)</Heading>
      <Code language="typescript">{`
        template StateLogger {
          class StateLogger extends Component {
            componentDidUpdate() {
              console.log("State updated!", this.state);
            }
          }
        }
      `}</Code>
    </Slide>
    <Slide>
      <Heading>Using PTS (in a more complete implementation)</Heading>
      <Code language="typescript">{`
        pack Pokemon {
          inst FetchJSON { FetchJSON -> Pokemon };
          inst StateLogger { StateLogger -> Pokemon };
          addto Pokemon {
            render() {
              if(this.state.error) { return ... }

              if(this.state.data === undefined) return 'Loading...';

              const name = this.state.data.name;
              const pokemonType = this.state.data.types;
              const image = this.state.data.sprites.front_default;
              return (
                <div>
                  <img src={image} />
                  <h1>{name}</h1>

                  <h2>Types</h2>
                  <ul>
                    {pokemoneTypes.map(pokemonType => (
                      <li>{pokemonType.name}</li>
                    ))}
                  </ul>
                </div>
              );
            }
          }
        }
      `}</Code>
    </Slide>
    <Slide>
      {/* <Heading>The resulting Pokémon component</Heading> */}
      <FlexBox height="100%">
        <Pokemon url="https://pokeapi.co/api/v2/pokemon/ditto" />
      </FlexBox>
    </Slide>
	</>
);

export default PokemonSlides;