import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "fashion", label: "Fashion" },
  { value: "groceries", label: "Groceries" },
  { value: "home-appliances", label: "Home Appliances" },
];

const priceOptions = [
  { value: "low-to-high", label: "Price: Low to High" },
  { value: "high-to-low", label: "Price: High to Low" },
];

const ratingOptions = [
  { value: "5-stars", label: "5 Stars" },
  { value: "4-stars", label: "4 Stars & Above" },
  { value: "3-stars", label: "3 Stars & Above" },
];

const sortByOptions = [
  { value: "latest", label: "Latest" },
  { value: "popularity", label: "Popularity" },
  { value: "best-selling", label: "Best Selling" },
];

const Filter = () => {
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    rating: "",
    sortBy: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="filter-container g-3">
      <Row className="g-3">
        
        <Col md={3}>
          <Form.Select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            aria-label="Category"
          >
            <option value="">Category</option>
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={2}>
          <Form.Select
            value={filters.price}
            onChange={(e) => handleFilterChange("price", e.target.value)}
            aria-label="Price"
          >
            <option value="">Price</option>
            {priceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={2} className="rating-filter">
          <Form.Select
            value={filters.rating}
            onChange={(e) => handleFilterChange("rating", e.target.value)}
            aria-label="Rating"
          >
            <option value="">Rating</option>
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={2}>
          <Form.Select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange("sortBy", e.target.value)}
            aria-label="Sort By"
          >
            <option value="">Sort By</option>
            {sortByOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
