import { useContext } from "react";
import "./index.css";
import FavoriteContext from "../../contexts/favoritesContext";

const Navbar = () => {
  const {favoritePokemons} = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img src={logoImg} alt="PokeApi Logo" className="navbar-img" />
      </div>
      <div className="favorites">{favoritePokemons.length}💓</div>
    </nav>
  );
};

export default Navbar;
