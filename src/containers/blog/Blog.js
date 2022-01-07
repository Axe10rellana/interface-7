import React from "react";
import "./blog.css";
import { Article } from "../../components/index";

//imagenes
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Están sucediendo muchas cosas, estamos escribiendo en un blog al
          respecto.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Dic 13, 2021"
            title="GPT-03 y Open AI es el futuro. Exploremos cómo es?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Dic 13, 2021"
            title="GPT-03 y Open AI es el futuro. Exploremos cómo es?"
          />
          <Article
            imgUrl={blog03}
            date="Dic 13, 2021"
            title="GPT-03 y Open AI es el futuro. Exploremos cómo es?"
          />
          <Article
            imgUrl={blog04}
            date="Dic 13, 2021"
            title="GPT-03 y Open AI es el futuro. Exploremos cómo es?"
          />
          <Article
            imgUrl={blog05}
            date="Dic 13, 2021"
            title="GPT-03 y Open AI es el futuro. Exploremos cómo es?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
