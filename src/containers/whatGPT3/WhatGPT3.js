import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components/index";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="¿Qué es GPT-3?"
          text="Así que opinamos amigos que me envían un mensaje como delicia. Todo el frente del plato escuchó oh debería. Su propia residencia defectuosa ni convencida. La conexión ha puesto imposible el ruido de los apartamentos propios. En conjunto, señoría, insistió en que la humanidad. Entrada de soltero amistosa a por."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Las posibilidades están más allá de tu imaginación.
        </h1>
        <p>Explore la biblioteca</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Así que opinamos amigos que me envían un mensaje como delicia. Todo el frente del plato escuchó oh debería."
        />
        <Feature
          title="Base de conocimientos"
          text="En conjunto, señoría, insistió en que la humanidad. Entrada de soltero amistosa a por. Como poner apartamentos propios imposibles b"
        />
        <Feature
          title="Educación"
          text="En conjunto, señoría, insistió en que la humanidad. Entrada de soltero amistosa a por. Como poner apartamentos propios imposibles b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
