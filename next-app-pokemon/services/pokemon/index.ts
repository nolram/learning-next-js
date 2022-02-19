import { HttpClient } from '../client/http-client-interceptor';
import { ResponsePokemons, PokemonStats } from '../../types/pokemon';
import { AxiosResponse } from 'axios';


class PokemonApi extends HttpClient {
  public constructor() {
    super('https://pokeapi.co/api/v2/');
  }

  public getPokemons = () => this.instance.get<ResponsePokemons>('/pokemon');
  
  public getPokemon = (id: string) => this.instance.get<PokemonStats>(`/pokemon/${id}`);
}

export default new PokemonApi()