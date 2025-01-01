import React from 'react';
import { useCart } from '../context/CartContext'; // Import the cart context
import './produc.css';
function Product() {
  // List of dishes with names, descriptions, and prices
  const dishes = [
    { id: 1, name: 'Red Oil', description: 'Traditional African red oil, rich and flavorful.', price: 5.99, image: 'images/download.jpeg' },
    { id: 2, name: 'Garri', description: 'A popular African dish made from cassava, served with soup.', price: 2.99, image: 'images/garri.jpeg' },
    { id: 3, name: 'Jollof Rice', description: 'A West African rice dish cooked with tomatoes, onions, and spices.', price: 7.99, image: 'images/jollof rice.jpeg' },
    { id: 4, name: 'Fried Rice', description: 'Stir-fried rice with vegetables and choice of protein.', price: 8.99, image: 'images/fried rice.jpeg' },
    { id: 5, name: 'Amala', description: 'A Yoruba dish made from yam flour, served with soup.', price: 6.99, image: 'images/amala.jpeg' },
    { id: 6, name: 'Egusi Soup', description: 'A thick, hearty soup made from ground melon seeds.', price: 9.99, image: 'images/egusi.jpeg' },
    { id: 7, name: 'Pounded Yam', description: 'A starchy dish made from yam, often served with soup.', price: 4.99, image: 'images/pounded yam.jpeg' },
    { id: 8, name: 'Suya', description: 'Grilled beef skewers with spicy seasoning, popular in West Africa.', price: 10.99, image: 'images/suya.jpeg' },
    { id: 9, name: 'Moi Moi', description: 'Steamed bean pudding, often served with rice or as a snack.', price: 3.99, image: 'images/moimoi.jpeg' },
    { id: 10, name: 'Ogbono Soup', description: 'A thick soup made with wild mango seeds, often served with fufu.', price: 9.49, image: 'images/ogbono.jpeg' },
    { id: 11, name: 'Pepper Soup', description: 'A spicy broth made with meat or fish and local spices.', price: 7.49, image: 'images/pepper_soup.jpeg' },
    { id: 12, name: 'Akara', description: 'Fried bean cakes made from black-eyed peas, a popular snack.', price: 4.49, image: 'images/akara.jpeg' },
    { id: 13, name: 'Banga Soup', description: 'A rich and flavorful palm nut soup, often served with starch.', price: 10.49, image: 'images/banga_soup.jpeg' },
    { id: 14, name: 'Ofada Rice', description: 'A unique Nigerian rice variety often paired with stew.', price: 6.49, image: 'images/ofada_rice.jpeg' },
    { id: 15, name: 'Isi Ewu', description: 'A delicacy made from goat head, spiced and served with vegetables.', price: 12.99, image: 'images/isi_ewu.jpeg' },
    { id: 16, name: 'Abacha (African Salad)', description: 'A Nigerian salad made with dried shredded cassava, vegetables, and fish.', price: 8.49, image: 'images/abacha.jpeg' },
    { id: 17, name: 'Nkwobi', description: 'A traditional dish made from cow foot and local spices.', price: 9.49, image: 'images/nkwobi.jpeg' },
    { id: 18, name: 'Ukodo (Yam Pepper Soup)', description: 'A hearty yam and pepper soup with spices and meat.', price: 7.99, image: 'images/ukodo.jpeg' },
    { id: 19, name: 'Ekpang Nkukwo', description: 'A rich vegetable soup dish made from cocoyam leaves and fillings.', price: 11.99, image: 'images/ekpang.jpeg' },
    { id: 20, name: 'Afang Soup', description: 'A delicious soup made with Afang leaves and waterleaf.', price: 8.99, image: 'images/afang_soup.jpeg' },
    { id: 21, name: 'Eba', description: 'A starchy dough made from cassava flour, served with soup.', price: 5.99, image: 'images/eba.jpeg' },
    { id: 22, name: 'Tuwo Shinkafa', description: 'A traditional rice dish served with soup or stew.', price: 6.49, image: 'images/tuwo_shinkahfa.jpeg' },
    { id: 23, name: 'Edikaikong Soup', description: 'A rich soup made from spinach and waterleaf, popular in Nigeria.', price: 9.49, image: 'images/edikikong.jpeg' },
    { id: 24, name: 'Unu Ofio (Roasted Yam)', description: 'Roasted yam served with palm oil or sauce.', price: 4.99, image: 'images/Unu_Ofio.jpeg' },
    { id: 25, name: 'Beans Porridge', description: 'A hearty and nutritious porridge made from beans and spices.', price: 6.99, image: 'images/beans_porage.jpeg' },
    { id: 26, name: 'Masa', description: 'Fried rice cakes made from rice flour, served as a snack or breakfast.', price: 3.49, image: 'images/masa.jpeg' },
    { id: 27, name: 'Okpa', description: 'A traditional food made from bambara nut flour, served as a meal or snack.', price: 2.99, image: 'images/okpa.jpeg' },
    { id: 28, name: 'Peppered Snail', description: 'Snails cooked in a spicy tomato sauce.', price: 12.49, image: 'images/peppered_snail.jpeg' },
    { id: 29, name: 'Wara', description: 'Fried bean cakes made from soybeans, a popular Nigerian snack.', price: 4.99, image: 'images/wara.jpeg' },
    { id: 30, name: 'Efo Riro', description: 'A popular Nigerian spinach stew cooked with tomatoes and spices.', price: 7.49, image: 'images/efo_riro.jpeg' },
    { id: 31, name: 'Palm Wine', description: 'A sweet, fermented alcoholic beverage made from the sap of palm trees.', price: 4.49, image: 'images/palm_wine.jpeg' }
  ];

  const { addToCart } = useCart(); // Get the addToCart function from the context

  return (
    <div className="product-page">
      <h1>Our Menu</h1>
      <div className="product-list">
        {dishes.map((dish) => (
          <div key={dish.id} className="product-item">
            <img src={dish.image} alt={dish.name} className="product-image" />
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>${dish.price}</p>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
