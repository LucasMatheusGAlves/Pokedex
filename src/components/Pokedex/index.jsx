import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import "./index.css";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;
  const onPreviousClickHandler = () => {
    if(page > 0) {
      setPage(page - 1)
    }
  }
  const onNextClickHandler = () => {
    if(page + 1 !== totalPages) {
      setPage(page + 1)
    }
  }
  return (
    <div>
      <div className="pokedex__header">
        <h1>Pokedex</h1>
        <Pagination page={page + 1} totalPages={totalPages} onPreviousClick={onPreviousClickHandler} onNextClick={onNextClickHandler} />
      </div>
      {loading ? (
        <div className="pokedex__loading">Carregando, seus pokemons...</div>
      ) : (
        <div className="pokedex__box">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index} pokemon={pokemon} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
