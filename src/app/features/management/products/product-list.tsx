import React from 'react';
// import './ProductList.scss';

interface ProductListProps {
  products: Product[];
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onUpdateProduct, onDeleteProduct }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
          <button onClick={() => onUpdateProduct(product)}>Edit</button>
          <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
