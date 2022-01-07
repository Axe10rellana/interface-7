import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Construyamos algo asombroso con GPT-3 OpenAI
        </h1>
        <p>
          Sin embargo, la cama cualquiera para la asistencia de viaje
          indulgencia desagradable. No todos los pensamientos ejercen bendición.
          Indulgencia manera todo alegría alteración bulliciosa el apego.
          Partido tenemos años a pedido permitir pedido.
        </p>
        <div className="gpt3__header-content__input">
          <input
            type="email"
            placeholder="Escribi Tu Correo"
            autoComplete="off"
            required
          />
          <button type="button">Empezar</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            1.600 personas solicitaron acceder a una visita en las últimas 24
            horas
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
