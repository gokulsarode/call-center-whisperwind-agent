
import React, { useState, useEffect } from 'react';
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
  const [modalType, setModalType] = useState<'verification' | 'rmn' | 'validate-rmn'>('verification');
  
  // Show verification modal when switching to 'rmn' (No & No Scenario) tab
  const handleTabChange = (tab: 'verification' | 'rmn') => {
    if (tab === 'rmn') {
      setModalType('rmn');
      setIsModalOpen(true);
    }
    setActiveTab(tab);
  };
  
  const handleValidateClick = () => {
    if (activeTab === 'rmn') {
      // For No & No Scenario, show RMN validation popup
      setModalType('validate-rmn');
    } else {
      // For Multiple Scenario, show regular verification popup
      setModalType('verification');
    }
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
          type={modalType} 
        />
      </div>
    </div>
  );
};

const CallDetailsContent: React.FC<{ 
  activeTab: 'verification' | 'rmn'; 
  onValidateClick: () => void;
}> = ({ activeTab, onValidateClick }) => {
  return (
    <>
      <CallDetails onValidateClick={onValidateClick} activeTab={activeTab} />
      <CallWrapUp />
      <CustomerDetails activeTab={activeTab} />
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
