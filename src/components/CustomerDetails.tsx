
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCallValidation } from '@/hooks/useCallValidation';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CustomerDetailsProps {
  activeTab: 'verification' | 'rmn';
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ activeTab }) => {
  const { validationState } = useCallValidation();
  const isVerified = validationState.overallVerification;
  const [showMaskedDetails, setShowMaskedDetails] = React.useState(false);
  
  const toggleMaskedDetails = () => {
    setShowMaskedDetails(prev => !prev);
  };
  
  // Helper function to mask data based on tab and validation status
  const maskData = (data: string) => {
    if (activeTab === 'verification' || isVerified || showMaskedDetails) {
      return data;
    }
    return "****";
  };
  
  return (
    <div className="bg-white p-6 border rounded-md mb-6">
      <div className="bg-section-header text-section-header-text p-3 mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Customer Details</h2>
        {activeTab === 'rmn' && !isVerified && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMaskedDetails}
            className="flex items-center gap-2"
          >
            {showMaskedDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showMaskedDetails ? 'Hide Details' : 'Show Details'}
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <div className="mb-4">
            <span className="font-medium block mb-1">Last 5 interactions:</span>
            <Select disabled={!isVerified && !showMaskedDetails}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maskData("Call - 02/05/2025")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="call1">Call - 02/05/2025</SelectItem>
                <SelectItem value="call2">Call - 01/05/2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Last 5 SRs:</span>
            <Select disabled={!isVerified && !showMaskedDetails}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maskData("SR123456 - Account Issue")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sr1">SR123456 - Account Issue</SelectItem>
                <SelectItem value="sr2">SR789012 - Card Issue</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Last 5 transactions:</span>
            <Select disabled={!isVerified && !showMaskedDetails}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maskData("$102.45 - Amazon - 01/05/2025")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tx1">$102.45 - Amazon - 01/05/2025</SelectItem>
                <SelectItem value="tx2">$24.99 - Netflix - 29/04/2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Classification:</span>
            <span>{maskData("Privy")}</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Segment:</span>
            <span>{maskData("Gold")}</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">IT Type:</span>
            <span>{maskData("NR")}</span>
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <span className="font-medium block mb-1">Digital channel status:</span>
            <Select disabled={!isVerified && !showMaskedDetails}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maskData("Active")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">MB:</span>
            <Select disabled={!isVerified && !showMaskedDetails}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maskData("Active")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">NB:</span>
            <span>{maskData("Yes")}</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">DC/CC:</span>
            <Select disabled={!isVerified && !showMaskedDetails}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maskData("Credit Card (****1234)")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cc1">Credit Card (****1234)</SelectItem>
                <SelectItem value="dc1">Debit Card (****5678)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Whatsapp:</span>
            <span>{maskData("Active")}</span>
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <span className="font-medium block mb-1">Re-KYC Status:</span>
            <span>{maskData("Complete")}</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Interaction with NO/PNO/BO/GR:</span>
            <span>{maskData("Yes (1)")}</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Repeat Email Flag:</span>
            <span>{maskData("No")}</span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Account number:</span>
            <Select disabled={!isVerified && !showMaskedDetails}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maskData("123456789")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="acc1">123456789</SelectItem>
                <SelectItem value="acc2">987654321</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <span className="font-medium block mb-1">Account status:</span>
            <Select disabled={!isVerified && !showMaskedDetails}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maskData("Active")} />
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
