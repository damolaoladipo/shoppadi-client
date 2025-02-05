import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosAPI from "../../api/axios";
import { Modal, Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IProduct } from "../../utils/freshcart.util";

const fetchProducts = async () => {
  const response = await axiosAPI.product.getAll({});
  return response.data;
};

const ProductList = () => {
  const { data: products, isLoading, error } = useQuery<IProduct[]>({ queryKey: ["products"], queryFn: fetchProducts });
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <Container>
      <h2 className="my-4">Product List</h2>
      <Row>
        {Array.isArray(products) && products.map((product: IProduct) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card onClick={() => setSelectedProduct(product)} className="cursor-pointer text-center p-3" style={{ borderRadius: "0" }}>
              <Card.Img variant="top" src={product.image} height="200" style={{ objectFit: "cover" }} />
              <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${product.discountedPrice.toFixed(2)} <br/>
            {product.discount > 0 && (
              <span className="text-danger">
                <s>${product.price.toFixed(2)}</s> ({product.discount * 100}% Off)
              </span>
            )}
          </Card.Text>
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedProduct && <ProductDetailsModal product={selectedProduct} handleClose={() => setSelectedProduct(null)} />}
    </Container>
  );
};

const ProductDetailsModal = ({ product, handleClose }: { product: IProduct; handleClose: () => void }) => {
  return (
    <Modal show={!!product} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img src={product?.image} alt={product?.name} className="img-fluid mb-3" style={{ borderRadius: "0" }} />
        <p><strong>Price:</strong> ${product?.discountedPrice.toFixed(2)}</p>
        {product?.discount > 0 && (
          <p className="text-danger">
            <s>${product?.price.toFixed(2)}</s> ({product?.discount * 100}% Off)
          </p>
        )}
        <p><strong>Stock:</strong> {product?.inStock}</p>
        <p><strong>Category:</strong> {product?.category}</p>
        <p><strong>Description:</strong> {product?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductList;
