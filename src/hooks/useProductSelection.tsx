
import React, { createContext, useContext, useState } from 'react';

export type ProductType = 'channel' | 'card' | 'account' | 'balance' | 'transaction' | '';

interface ProductSelectionContextType {
  selectedProduct: ProductType;
  setSelectedProduct: (product: ProductType) => void;
}

const ProductSelectionContext = createContext<ProductSelectionContextType | undefined>(undefined);

export const ProductSelectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>('');
  
  return (
    <ProductSelectionContext.Provider value={{ 
      selectedProduct,
      setSelectedProduct
    }}>
      {children}
    </ProductSelectionContext.Provider>
  );
};

export const useProductSelection = () => {
  const context = useContext(ProductSelectionContext);
  if (!context) {
    throw new Error('useProductSelection must be used within a ProductSelectionProvider');
  }
  return context;
};
