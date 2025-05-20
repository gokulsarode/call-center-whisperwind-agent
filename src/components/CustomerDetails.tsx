
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CustomerDetails: React.FC = () => {
  return (
    <div className="bg-white p-6 border rounded-md mb-6">
      <div className="bg-section-header text-section-header-text p-3 mb-4">
        <h2 className="text-lg font-semibold">Customer Details</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <div className="mb-4">
            <span className="font-medium block mb-1">Last 5 interactions:</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Call - 02/05/2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="call1">Call - 02/05/2025</SelectItem>
                <SelectItem value="call2">Call - 01/05/2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Last 5 SRs:</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="SR123456 - Account Issue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sr1">SR123456 - Account Issue</SelectItem>
                <SelectItem value="sr2">SR789012 - Card Issue</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Last 5 transactions:</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="$102.45 - Amazon - 01/05/2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tx1">$102.45 - Amazon - 01/05/2025</SelectItem>
                <SelectItem value="tx2">$24.99 - Netflix - 29/04/2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Classification:</span>
            <span>Privy</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Segment:</span>
            <span>Gold</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">IT Type:</span>
            <span>NR</span>
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <span className="font-medium block mb-1">Digital channel status:</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Active" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">MB:</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Active" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">NB:</span>
            <span>Yes</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">DC/CC:</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Credit Card (****1234)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cc1">Credit Card (****1234)</SelectItem>
                <SelectItem value="dc1">Debit Card (****5678)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Whatsapp:</span>
            <span>Active</span>
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <span className="font-medium block mb-1">Re-KYC Status:</span>
            <span>Complete</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Interaction with NO/PNO/BO/GR:</span>
            <span>Yes (1)</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Repeat Email Flag:</span>
            <span>No</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Account number:</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="123456789" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="acc1">123456789</SelectItem>
                <SelectItem value="acc2">987654321</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Account status:</span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
