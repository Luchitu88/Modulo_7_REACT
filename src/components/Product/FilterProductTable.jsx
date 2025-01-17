import SearchBar from './SearchBar.jsx'
import ProductTable from './ProductTable.jsx';
import { useState } from 'react';
import {PRODUCTS} from '../../store/features/product/productSlice.js';
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
 
  export default function FilterProductTable(){
    return <FilterableProductTable products={PRODUCTS} />;
  }