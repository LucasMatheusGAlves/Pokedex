/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./index.css";
import FavoriteContext from "../../contexts/favoritesContext";
import { motion } from 'framer-motion';

const typeBackgrounds = {
  normal: "no-repeat #939ba3 center/55px url(../public/imgs/normal.png)",
  fire: "no-repeat #f49a3e center/55px url(../public/imgs/fire.png)",
  water: "no-repeat #538edd center/55px url(../public/imgs/water.png)",
  electric: "no-repeat #f3d500 center/55px url(../public/imgs/electric.png)",
  grass: "no-repeat #4ec144 center/55px url(../public/imgs/grass.png)",
  ice: "no-repeat #67d1bf center/55px url(../public/imgs/ice.png)",
  fighting: "no-repeat #d5326a center/55px url(../public/imgs/fighting.png)",
  poison: "no-repeat #b361d1 center/55px url(../public/imgs/poison.png)",
  ground: "no-repeat #dc7533 center/55px url(../public/imgs/ground.png)",
  flying: "no-repeat #91a7e4 center/55px url(../public/imgs/flying.png)",
  psychic: "no-repeat #f26876 center/55px url(../public/imgs/psychic.png)",
  bug: "no-repeat #86c600 center/55px url(../public/imgs/bug.png)",
  rock: "no-repeat #c3b883 center/55px url(../public/imgs/rock.png)",
  ghost: "no-repeat #5765b2 center/55px url(../public/imgs/ghost.png)",
  dragon: "no-repeat #3869cb center/55px url(../public/imgs/dragon.png)",
  dark: "no-repeat #5c5367 center/55px url(../public/imgs/dark.png)",
  steel: "no-repeat #658da4 center/55px url(../public/imgs/steel.png)",
  fairy: "no-repeat #f486ed center/55px url(../public/imgs/fairy.png)"
};

const typeColors = {
  normal: "#939ba3",
  fire: "#f49a3e",
  water: "#538edd",
  electric: "#f3d500",
  grass: "#4ec144",
  ice: "#67d1bf",
  fighting: "#d5326a",
  poison: "#b361d1",
  ground: "#dc7533",
  flying: "#91a7e4",
  psychic: "#f26876",
  bug: "#86c600",
  rock: "#c3b883",
  ghost: "#5765b2",
  dragon: "#3869cb",
  dark: "#5c5367",
  steel: "#658da4",
  fairy: "#f486ed"
};

const entrance = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Pokemon = (props) => {
  const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
  const {pokemon} = props
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name)
  }
  const heart = favoritePokemons.includes(pokemon.name) ? "💓" : "🤍" 
  const typeBackground = typeBackgrounds[pokemon.types[0].type.name];

  const imgDefault = "../../../public/imgs/pokeball.png";
  
  return (
    <div className="pokemon__container" style={{background: typeBackground}}>
      <motion.div initial="initial" animate="animate" variants={entrance} className="pokemon__box">
        <img src={pokemon.sprites.front_default || imgDefault} alt={pokemon.name} className="pokemon__box__image"/>
      </motion.div>
      <div className="pokemon__body">
        <div className="pokemon__body__top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="pokemon__body__bottom">
          <div className="pokemon__body__type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} style={{backgroundColor: typeColors[type.type.name]}} className="pokemon__body__type__text">{type.type.name}</div>
              )
            })}
          </div>
          <button className="pokemon__body__favorite" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
