
import React, { useState } from 'react';
import Header from '@/components/Header';
import CallDetails from '@/components/CallDetails';
import CallWrapUp from '@/components/CallWrapUp';
import VerificationModal from '@/components/VerificationModal';
import TabsNavigation from '@/components/TabsNavigation';
import CustomerDetails from '@/components/CustomerDetails';
import { CallValidationProvider, useCallValidation } from '@/hooks/useCallValidation';

const CallCenterPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'verification' | 'rmn'>('verification');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleTabChange = (tab: 'verification' | 'rmn') => {
    setActiveTab(tab);
  };
  
  const handleValidateClick = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-center mb-6">Customer details</h1>
        
        <TabsNavigation activeTab={activeTab} onTabChange={handleTabChange}>
          <CallDetailsContent 
            activeTab={activeTab} 
            onValidateClick={handleValidateClick} 
          />
        </TabsNavigation>
        
        <VerificationModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          type={activeTab} 
        />
      </div>
    </div>
  );
};

const CallDetailsContent: React.FC<{ 
  activeTab: 'verification' | 'rmn'; 
  onValidateClick: () => void;
}> = ({ activeTab, onValidateClick }) => {
  const { showCustomerDetails } = useCallValidation();
  
  return (
    <>
      <CallDetails onValidateClick={onValidateClick} activeTab={activeTab} />
      {showCustomerDetails && activeTab === 'verification' && <CustomerDetails />}
      <CallWrapUp />
    </>
  );
};

const Index: React.FC = () => {
  return (
    <CallValidationProvider>
      <CallCenterPage />
    </CallValidationProvider>
  );
};

export default Index;
