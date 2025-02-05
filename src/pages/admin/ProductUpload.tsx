import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../api/axios";
import Title from "../../components/title/Title";
import TextInput from "../../components/input/TextInput";
import Button from "../../components/Button/Button";
import { notification } from "antd";
import { Modal, Form } from "react-bootstrap";

interface ProductUploadModalProps {
  show: boolean;
  handleClose: () => void;
}

const ProductUploadModal = ({ show, handleClose }: ProductUploadModalProps) => {
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    stock: 0,
    category: "",
    description: "",
    image: null as File | null,
  });

  const [preview, setPreview] = useState<string | null>(null);

  const uploadProductMutation = useMutation({
    mutationFn: (payload: FormData) => axiosAPI.product.createProduct(payload),
    onSuccess: () => {
      notification.success({
        message: "Product Uploaded Successfully!",
        description: "Your product has been uploaded.",
      });
      handleClose();
    },
    onError: (error: any) => {
      notification.error({
          message: error.response?.data?.errors?.[0] || "Upload failed.",
          description: undefined
      });
    },
  });

  const handleInputChange = (name: string, value: string | number) => {
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/") && file.size < 5000000) {
      setProductData({ ...productData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      notification.error({
          message: "Invalid file type or size. Please select an image under 5MB.",
          description: undefined
      });
    }
  };

  const handleSubmit = async () => {
    const { name, price, stock, category, description, image } = productData;

    if (!name || !price || !stock || !category || !description || !image) {
      notification.error({
          message: "All fields are required.",
          description: undefined
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("stock", stock.toString());
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);

    uploadProductMutation.mutate(formData);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="square-modal" // Adding a custom class for styling
    >
      <Modal.Header closeButton>
        <Modal.Title>Upload New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-container">
          <Title text="Upload Product" color="brand-green" size="fs-40" />
          <p className="fs-18 brand-gray">Fill in the details below to upload your product.</p>

          <div className="form">
            <TextInput
              type="text"
              placeholder="Product Name"
              value={productData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />

            <TextInput
              type="number"
              placeholder="Price"
              value={productData.price.toString()}
              onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
            />

            <TextInput
              type="number"
              placeholder="Stock Quantity"
              value={productData.stock.toString()}
              onChange={(e) => handleInputChange("stock", parseInt(e.target.value))}
            />

            <TextInput
              type="text"
              placeholder="Category"
              value={productData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
            />

            {/* Using react-bootstrap TextArea for Product Description */}
            <Form.Group className="mb-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                value={productData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </Form.Group>

            <div className="image-upload">
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {preview && (
                <div className="image-preview">
                  <img src={preview} alt="Product Preview" className="img-fluid" />
                </div>
              )}
            </div>

            <Button text="Upload Product" onClick={handleSubmit} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductUploadModal;
