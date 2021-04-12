import JavaScriptProduct from "Components/assets/CardImage.jpg";
import CssProduct from "Components/assets/cssproduct.jpg";

const products = [
  {
    id: 1,
    title: "JavaScript",
    slang: "javascript",
    summary:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web",
    image: JavaScriptProduct,
  },
  {
    id: 2,
    title: "CSS",
    slang: "css",
    summary:
      "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
    image: CssProduct,
  },
  {
    id: 3,
    title: "JavaScript2",
    slang: "javascript2",
    summary:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web",
    image: JavaScriptProduct,
  },
  {
    id: 4,
    title: "CSS2",
    slang: "css2",
    summary:
      "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
    image: CssProduct,
  },
  {
    id: 5,
    title: "CSS3",
    slang: "css3",
    summary:
      "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
    image: CssProduct,
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
