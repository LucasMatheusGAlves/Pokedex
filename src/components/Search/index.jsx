import "./index.css";
import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("dito")
  const {onSearch} = props
  const onChangeHandler = (e) => {
    setSearch(e.target.value)
    if(e.target.value.length === 0) {
      onSearch(undefined)
    }
  }

  const onButtonClickHandler = () => {
    onSearch(search) 
  }

  return (
    <div className="search__container">
      <div className="search__box">
        <input type="text" placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="search__btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Search;
