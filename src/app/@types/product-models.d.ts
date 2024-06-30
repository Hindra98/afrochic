// interface Product {

//     id: number;
//     title: string;
//     image: string;
//     price: number;
//     category: string;
//     decription: string;

// }

interface Product {
  id: number;
  name: string;
  description: string;
  category?: string;
  price: number;
  imageUrl: string;
}


interface AllProducts{
    productList: Product[];
}

interface ProductUI{
    product: Product;
}

type ProductList = Product[];

interface selectedProductPayloadAction {

    type: string;
    payload: Product;
}

interface getProductsAction {
    type: string;
    payload: Product[];
}