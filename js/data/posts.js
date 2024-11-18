import audiR8Post from "./content/audi_r8.post.js";
import porsche911GT3Post from "./content/porsche_911_GT3.post.js";
import electricCarsPost from "./content/electric_cars.post.js";
import classicCarsPost from "./content/classic_cars.post.js";

const AUTHOR = {
  name: "Nicolas Cervino",
  image: "assets/autor.jpg"
};

const categories = {
  superdeportivos: {
    id: 'superdeportivos',
    title: 'Superdeportivos',
    description: 'Los autos más rápidos y exclusivos del mundo',
    image: 'assets/categories/superdeportivos.jpg'
  },
  electricos: {
    id: 'electricos',
    title: 'Eléctricos',
    description: 'El futuro de la movilidad sostenible',
    image: 'assets/categories/electricos.jpg'
  },
  clasicos: {
    id: 'clasicos',
    title: 'Clásicos',
    description: 'Joyas automotrices del pasado',
    image: 'assets/categories/clasicos.jpg'
  },
  tecnologia: {
    id: 'tecnologia',
    title: 'Tecnología',
    description: 'Innovaciones en la industria automotriz',
    image: 'assets/categories/tecnologia.jpg'
  }
};

const posts = {
  1: {
    title: "Audi R8: El Fin de una Era",
    category: "superdeportivos",
    author: AUTHOR,
    date: "Octubre 2024",
    featuredImage: "assets/posts/audi-r8/hero.jpg",
    content: audiR8Post,
  },
  2: { // Porsche post content
    title: "Porsche 911 GT3: La Nueva Generación del Ícono Alemán",
    category: "superdeportivos",
    author: AUTHOR,
    date: "15 Octubre, 2024",
    featuredImage: "assets/posts/porsche-911-gt3/hero.jpg",
    content: porsche911GT3Post
  },
  3: { // Tesla post content
    title: "El Futuro de la Movilidad Eléctrica: Tendencias 2024",
    category: "electricos",
    author: AUTHOR,
    date: "12 Octubre, 2024",
    featuredImage: "assets/posts/electric-cars/hero.jpg",
    content: electricCarsPost,
  },
  4: {
    title: "Los 5 Autos Clásicos Más Cotizados del Momento",
    category: "clasicos",
    author: AUTHOR,
    date: "10 Octubre, 2024",
    featuredImage: "assets/posts/classic-cars/hero.jpg",
    content: classicCarsPost,
  }
};

export { categories, posts as default };