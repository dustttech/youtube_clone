import React, { useState } from "react";
import { Search } from "@styled-icons/evil/Search";
function FormSearch(props) {
  const [value, setValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <form onSubmit={handleSearch} className="c-form" action="">
      <div className="c-form__group">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="search"
          placeholder="Search"
        />
        <button className="c-form__submit-search" type="submit">
          <Search className="c-form__icon" />
        </button>
      </div>
    </form>
  );
}

export default FormSearch;
