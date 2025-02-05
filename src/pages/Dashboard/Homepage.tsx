import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Navigation from "../../layouts/Navigation";
import ProductCard from "../../layouts/ProductCard";
import HeroSection from "../../layouts/Hero";
import Filter from "../../layouts/Filter";
import Category from "../../layouts/Category";
import Footer from "../../layouts/Footer";
import Benefits from "../../layouts/Benefits";
import ShoppingCart from "./ShoppingCard";
import { IProduct } from "../../utils/freshcart.util";
import CartModal from "../../layouts/CartModal";
import ProductDetails from "../../layouts/ProductDetails";

const Dashboard = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); 

  const addToCart = (product: any) => {
    setCartItems([...cartItems, product]);
  };
  

  const [cartCount, setCartCount] = useState(0); 
  const [isCartOpen, setIsCartOpen] = useState(false); 
  
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen); 
  };


 const [products, setProducts] = useState<any[]>([
  {
    id: 1,
    name: "Organic Apples",
    price: 2.49,
    discount: 0.20, // 20% discount
    discountedPrice: 2.49 * (1 - 0.20),
    image: "/images/freshcart/apples.png",
    rating: 4.5,
    description: "Hand-picked organic apples, naturally grown without pesticides. These apples are crisp, juicy, and full of refreshing flavor. Ideal for snacking, baking, or adding a crunchy texture to your favorite salads.",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 0.99,
    discount: 0.15, // 15% discount
    discountedPrice: 0.99 * (1 - 0.15),
    image: "/images/freshcart/bananas.png",
    rating: 4.7,
    description: "Fresh, organically grown bananas that are rich in potassium and fiber. These bananas are perfect for smoothies, oatmeal toppings, or as a quick and nutritious snack on the go.",
  },
  {
    id: 3,
    name: "Fresh Lettuce",
    price: 1.99,
    discount: 0.10, // 10% discount
    discountedPrice: 1.99 * (1 - 0.10),
    image: "/images/freshcart/lettuce.png",
    rating: 4.3,
    description: "Crisp and fresh lettuce leaves, cultivated with care to bring you the highest quality greens. Perfect for salads, sandwiches, or as a crunchy base for your favorite wraps.",
  },
  {
    id: 4,
    name: "Juicy Oranges",
    price: 3.99,
    discount: 0.25, // 25% discount
    discountedPrice: 3.99 * (1 - 0.25),
    image: "/images/freshcart/orange.png",
    rating: 4.6,
    description: "Bright and tangy oranges bursting with citrus flavor. Packed with vitamin C and antioxidants, these oranges are great for juicing, snacking, or adding zest to your dishes.",
  },
  {
    id: 5,
    name: "Fresh Strawberries",
    price: 4.99,
    discount: 0.30, // 30% discount
    discountedPrice: 4.99 * (1 - 0.30),
    image: "/images/freshcart/strawberries.png",
    rating: 4.8,
    description: "Sweet and luscious strawberries, handpicked at peak ripeness for the best taste. Enjoy them fresh, in desserts, smoothies, or dipped in chocolate for a decadent treat.",
  },
  {
    id: 6,
    name: "Ripe Mangoes",
    price: 5.49,
    discount: 0.20, // 20% discount
    discountedPrice: 5.49 * (1 - 0.20),
    image: "/images/freshcart/mangoes.png",
    rating: 4.9,
    description: "Juicy and aromatic mangoes with a naturally sweet and tropical taste. Perfect for fruit salads, smoothies, or enjoying on their own as a refreshing snack.",
  },
  {
    id: 7,
    name: "Green Broccoli",
    price: 2.99,
    discount: 0.10, // 10% discount
    discountedPrice: 2.99 * (1 - 0.10),
    image: "/images/freshcart/broccoli.png",
    rating: 4.4,
    description: "Nutritious and fresh broccoli florets, packed with vitamins and minerals. Steam, roast, or stir-fry them for a delicious and healthy addition to any meal.",
  },
  {
    id: 8,
    name: "Organic Cauliflower",
    price: 3.29,
    discount: 0.18, // 18% discount
    discountedPrice: 3.29 * (1 - 0.18),
    image: "/images/freshcart/cauliflower.png",
    rating: 4.5,
    description: "Versatile organic cauliflower, perfect for roasting, steaming, or making low-carb cauliflower rice. A healthy and delicious choice for any meal.",
  },
]);


  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null); 

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };


  const renderProductCards = () =>
    products.map((product) => (
      <Col key={product.id}>
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          discount={product.discountedPrice}
          rating={product.rating}
          onAddToCart={() => addToCart(product)}  
          onClick={() => handleShowModal(product)} 
        />
      </Col>
    ));

  return (
    <>
      <div className="dashboard">
        <Navigation cartCount={cartItems.length} handleCartToggle={handleCartToggle} />

        <HeroSection />

        <div className="mrgb2"></div>

        <Filter />

        <Container className="mt-4">
          <Row>
            <Col>
              <Row xs={1} md={2} lg={4} className="g-4">
              {renderProductCards()}
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="mrgb4"></div>

        <Category />
        <div className="mrgb4"></div>

        <Benefits />


        <Footer />

        <ShoppingCart isOpen={isCartOpen} onClose={handleCartToggle}/>


        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <ProductDetails product={selectedProduct} onAddToCart={addToCart} />
          )}
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
};

export default Dashboard;
