import React from "react";

import "../assets/styles/components/Search.scss";

const Search = () => {
  const title = "Qué quieres ver hoy?";
  const searching = "Encuéntralo";
  return (
    <React.Fragment>
      <section className="main">
        <h2 className="main__title">{title}</h2>
        <input type="text" className="input" placeholder={searching} />
      </section>
    </React.Fragment>
  );
};

export default Search;
