
import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useProductSelection, ProductType } from "@/hooks/useProductSelection";

const CallWrapUp: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useProductSelection();
  
  const handleProductChange = (value: string) => {
    setSelectedProduct(value as ProductType);
  };
  
  return (
    <div className="bg-white p-6 border rounded-md mb-6">
      <div className="bg-section-header text-section-header-text p-3 mb-4">
        <h2 className="text-lg font-semibold">Wrap Up/Call Tagging</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <label className="font-medium block mb-2">Product</label>
          <Select value={selectedProduct} onValueChange={handleProductChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Product" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="channel">Channel Unblocking</SelectItem>
                <SelectItem value="card">Card Activation</SelectItem>
                <SelectItem value="account">Account Update</SelectItem>
                <SelectItem value="balance">Balance Inquiry</SelectItem>
                <SelectItem value="transaction">Transaction Dispute</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="font-medium block mb-2">Type</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="type1">Type 1</SelectItem>
                <SelectItem value="type2">Type 2</SelectItem>
                <SelectItem value="type3">Type 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="font-medium block mb-2">Sub-Type</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Sub-Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="subtype1">Sub Type 1</SelectItem>
                <SelectItem value="subtype2">Sub Type 2</SelectItem>
                <SelectItem value="subtype3">Sub Type 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button className="bg-gray-600 text-white hover:bg-gray-700">
          Call complete
        </Button>
      </div>
      
      <div className="mt-6 flex justify-end gap-4">
        <Button className="bg-blue-700 text-white hover:bg-blue-800">
          Customer 360
        </Button>
        <Button className="bg-blue-700 text-white hover:bg-blue-800">
          Kforce
        </Button>
      </div>
    </div>
  );
};

export default CallWrapUp;
