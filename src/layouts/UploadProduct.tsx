import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FiX } from 'react-icons/fi';

const UploadProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle modal show/hide
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Button to open the modal */}
      <Button variant="primary" onClick={handleShow}>
        Upload Product Image
      </Button>

      {/* Modal Component */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <FiX className="text-muted" onClick={handleClose} />
            <span className="ms-2">Upload New Product</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="file-upload-container">
            <div className="cloud-icon">
              {/* Cloud Upload Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4s-6.67 2.59-7.35 6.04c-1.02 4.64 2.57 9.02 7.01 10.46 4.44-1.44 8.03-5.82 7.01-10.46zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
            </div>
            <div className="text-center">
              <h3>Upload a Product Image</h3>
              <p>
                Drag and drop a file or
                <label htmlFor="file-upload" className="browse-file-link"> browse file</label>
              </p>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              {selectedFile && (
                <div className="file-details mt-3">
                  <strong>Selected File: </strong>
                  <span>{selectedFile.name}</span>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => console.log('File Uploaded!')}>
            Upload File
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UploadProduct;
