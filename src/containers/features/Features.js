import React from "react";
import "./features.css";
import { Feature } from "../../components/index";

const featuresData = [
  {
    title: "Mejorar el final se deshace al instante",
    text: "De ellos, john fino, da de rico. Envejecen y dibujan a la señora. La mejora de la desconfianza final puede ser aplaudida al instante.",
  },
  {
    title: "Conviértete en el activo tendido",
    text: "Considerado simpatizar diez excepcionalmente ocasional asistencia no suficiente. Letra de en convertirse en habilitado activo tendido a.",
  },
  {
    title: "Mensaje o no soy nada",
    text: "Led pregunto posible amante relación elegancia comer igualmente debatiendo. Por mensaje o no soy nada entre la dirección principal.",
  },
  {
    title: "Realmente boy law county",
    text: "Realmente el condado de la ley del muchacho ella no pudo a su hermana. Te quita los pies es como seis. Entre los sexos, se ha construido la ley de permisos. En mesa empotrada en un rubor rápido.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          El futuro es ahora y solo necesita realizarlo. Paso hacia el futuro
          Hoy y haz que suceda.
        </h1>
        <p>Solicite acceso anticipado para comenzar</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            key={item.title + index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
