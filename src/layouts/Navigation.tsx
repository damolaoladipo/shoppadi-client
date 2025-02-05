import { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { INavigationCart } from "../utils/interface.util";

const Navigation = ({ cartCount, handleCartToggle }: INavigationCart) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler to toggle the cart visibility
  const onCartClick = () => {
    handleCartToggle();
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-nav shadow-sm">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            FreshCart
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="nav-link-modern">
                Home
              </Nav.Link>
              <Nav.Link href="#shop" className="nav-link-modern">
                Shop
              </Nav.Link>
              <Nav.Link href="#pages" className="nav-link-modern">
                Pages
              </Nav.Link>
              <Nav.Link href="#blog" className="nav-link-modern">
                Blog
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link-modern">
                About Us
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-modern">
                Contact Us
              </Nav.Link>
            </Nav>

            <Form className="d-flex align-items-center position-relative" style={{ maxWidth: "300px", flexGrow: "1" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="modern-search"
                aria-label="Search"
                style={{
                  borderRadius: "10px",
                  padding: "10px 40px 10px 15px",
                  border: "1px solid #ccc",
                }}
              />
              <AiOutlineSearch
                size={20}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#15A157",
                  cursor: "pointer",
                }}
              />
            </Form>

            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft: "20px" }}>
              <div style={{ textAlign: "center", cursor: "pointer" }} onClick={onCartClick}>
                <div
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    padding: "10px",
                    transition: "all 0.3s ease-in-out",
                  }}
                  className="icon-container"
                >
                  <AiOutlineShoppingCart size={28} style={{ color: "#15A157" }} />
                  {cartCount > 0 && (
                    <span className="cart-count">{cartCount}</span> // Display cart item count
                  )}
                </div>
              </div>

              <Dropdown>
                <Dropdown.Toggle
                  as="div"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    padding: "10px",
                    transition: "all 0.3s ease-in-out",
                  }}
                  className="icon-container"
                >
                  <AiOutlineUser size={28} style={{ color: "#15A157" }} />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", padding: "10px", minWidth: "200px" }}>
                  {isLoggedIn ? (
                    <>
                      <Dropdown.Item
                        href="#orders"
                        style={{
                          padding: "10px",
                          borderRadius: "6px",
                          transition: "all 0.3s ease-in-out",
                        }}
                        className="dropdown-modern"
                      >
                        Orders
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#wishlist"
                        style={{
                          padding: "10px",
                          borderRadius: "6px",
                          transition: "all 0.3s ease-in-out",
                        }}
                        className="dropdown-modern"
                      >
                        Wishlist
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#account"
                        style={{
                          padding: "10px",
                          borderRadius: "6px",
                          transition: "all 0.3s ease-in-out",
                        }}
                        className="dropdown-modern"
                      >
                        Account
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#settings"
                        style={{
                          padding: "10px",
                          borderRadius: "6px",
                          transition: "all 0.3s ease-in-out",
                        }}
                        className="dropdown-modern"
                      >
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#logout"
                        onClick={() => setIsLoggedIn(false)}
                        style={{
                          padding: "10px",
                          borderRadius: "6px",
                          transition: "all 0.3s ease-in-out",
                        }}
                        className="dropdown-modern"
                      >
                        Logout
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item
                        href="/login"
                        style={{
                          padding: "10px",
                          borderRadius: "6px",
                          transition: "all 0.3s ease-in-out",
                        }}
                        className="dropdown-modern"
                      >
                        Sign In
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/register"
                        style={{
                          padding: "10px",
                          borderRadius: "6px",
                          transition: "all 0.3s ease-in-out",
                        }}
                        className="dropdown-modern"
                      >
                        Sign Up
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        .nav-link-modern {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
          transition: color 0.3s ease-in-out;
        }
        .nav-link-modern:hover {
          color: #15a157;
        }
        .modern-search {
          border-radius: 20px;
          padding: 8px 16px;
        }
        .modern-btn {
          border-radius: 20px;
          padding: 8px 16px;
          font-size: 0.9rem;
        }
        .icon-container:hover {
          background-color: #f1f1f1;
        }
        .dropdown-modern:hover {
          background-color: #f8f9fa;
          color: #15a157;
        }
        .cart-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: red;
          color: white;
          border-radius: 50%;
          font-size: 12px;
          padding: 4px 8px;
        }
      `}</style>
    </>
  );
};

export default Navigation;
