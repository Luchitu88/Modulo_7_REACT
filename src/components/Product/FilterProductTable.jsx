import SearchBar from './SearchBar.jsx'
import ProductTable from './ProductTable.jsx';
import { useState } from 'react';
 function  FilterableProductTable  ({ products })  {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
    return (
      <div>
            <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly} 
            onFilterTextChange={setFilterText} 
            onInStockOnlyChange={setInStockOnly}/>
            
            <ProductTable products={products}
            filterText={filterText}
            inStockOnly={inStockOnly} />       
      </div>
    );
  }
  
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];
  
 
  export default function FilterProductTable(){
    return <FilterableProductTable products={PRODUCTS} />;
  }