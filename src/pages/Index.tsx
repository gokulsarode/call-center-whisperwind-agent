
import React, { useState } from 'react';
import Header from '@/components/Header';
import CallDetails from '@/components/CallDetails';
import CallWrapUp from '@/components/CallWrapUp';
import VerificationModal from '@/components/VerificationModal';
import TabsNavigation from '@/components/TabsNavigation';
import CustomerDetails from '@/components/CustomerDetails';
import { CallValidationProvider, useCallValidation } from '@/hooks/useCallValidation';
import { ProductSelectionProvider } from '@/hooks/useProductSelection';

const CallCenterPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'verification' | 'rmn'>('verification');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'verification' | 'rmn' | 'validate-rmn' | 'mother-tongue'>('verification');
  
  // Show verification modal when switching to 'rmn' (No & No Scenario) tab
  const handleTabChange = (tab: 'verification' | 'rmn') => {
    if (tab === 'rmn') {
      setModalType('rmn');
      setIsModalOpen(true);
    }
    setActiveTab(tab);
  };
  
  const handleValidateClick = () => {
    setIsModalOpen(true);
  };
  
  const setModalTypeHandler = (type: 'verification' | 'rmn' | 'validate-rmn' | 'mother-tongue') => {
    setModalType(type);
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
            setModalType={setModalTypeHandler}
          />
        </TabsNavigation>
        
        <VerificationModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          type={modalType} 
        />
      </div>
    </div>
  );
};

const CallDetailsContent: React.FC<{ 
  activeTab: 'verification' | 'rmn'; 
  onValidateClick: () => void;
  setModalType: (type: 'verification' | 'rmn' | 'validate-rmn' | 'mother-tongue') => void;
}> = ({ activeTab, onValidateClick, setModalType }) => {
  return (
    <>
      <CallDetails 
        onValidateClick={onValidateClick} 
        activeTab={activeTab} 
        modalType={setModalType} 
      />
      <CallWrapUp />
      <CustomerDetails activeTab={activeTab} />
    </>
  );
};

const Index: React.FC = () => {
  return (
    <CallValidationProvider>
      <ProductSelectionProvider>
        <CallCenterPage />
      </ProductSelectionProvider>
    </CallValidationProvider>
  );
};

export default Index;
