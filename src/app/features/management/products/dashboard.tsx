import React, { useState } from 'react';
import ProductList from './product-list';
import ProductForm from './product-form';
import { ProductService } from './service-products';
// import './AdminDashboard.scss';

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const productService = new ProductService();

  const handleAddProduct = (product: Product) => {
    productService.addProduct(product);
    setProducts(productService.getAllProducts());
  };

  const handleUpdateProduct = (product: Product) => {
    productService.updateProduct(product);
    setProducts(productService.getAllProducts());
  };

  const handleDeleteProduct = (productId: number) => {
    productService.deleteProduct(productId);
    setProducts(productService.getAllProducts());
  };

  return (
    <div className="admin-dashboard">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList 
        products={products} 
        onUpdateProduct={handleUpdateProduct} 
        onDeleteProduct={handleDeleteProduct} 
      />
    </div>
  );
};

export default AdminDashboard;
