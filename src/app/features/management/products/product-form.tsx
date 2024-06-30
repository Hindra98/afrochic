import React, { useState } from 'react';
// import './ProductForm.scss';

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now(),
      name,
      description,
      price,
      imageUrl,
    };
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice(0);
    setImageUrl('');
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      ></textarea>
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(Number(e.target.value))} 
      />
      <input 
        type="text" 
        placeholder="Image URL" 
        value={imageUrl} 
        onChange={(e) => setImageUrl(e.target.value)} 
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
