import "../../styles/components/cardsSection/cardsSection.css";

import React from "react";
import Cards from "../cards/Cards";

export default function CardsSection() {
  return (
    <section className="cards-section">
      <div className="header">
        <h3>The Destination</h3>
      </div>

      <div className="cards-container">
        <Cards title={"Santotoni Beach"}></Cards>
        <Cards title={"Santotoni Beach"}></Cards>
        <Cards title={"Santotoni Beach"}></Cards>
        <Cards title={"Santotoni Beach"}></Cards>
        <Cards title={"Santotoni Beach"}></Cards>
        <Cards title={"Santotoni Beach"}></Cards>
      </div>
    </section>
  );
}
