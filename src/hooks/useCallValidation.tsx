
import React, { createContext, useContext, useState } from 'react';

interface ValidationState {
  rmnVerification: boolean;
  ivrVerification: boolean;
  overallVerification: boolean;
}

interface CallValidationContextType {
  validationState: ValidationState;
  updateValidation: (type: 'rmn' | 'verification', value: boolean) => void;
  showCustomerDetails: boolean;
}

const CallValidationContext = createContext<CallValidationContextType | undefined>(undefined);

export const CallValidationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [validationState, setValidationState] = useState<ValidationState>({
    rmnVerification: false,
    ivrVerification: true, // IVR is always verified as per requirements
    overallVerification: false
  });
  
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  
  const updateValidation = (type: 'rmn' | 'verification', value: boolean) => {
    if (type === 'rmn') {
      setValidationState(prev => ({
        ...prev,
        rmnVerification: value,
        // Overall verification is true only if both RMN and IVR are verified
        overallVerification: value && prev.ivrVerification
      }));
    } else if (type === 'verification') {
      // For verification flow, set the overall verification directly
      setValidationState(prev => ({
        ...prev,
        rmnVerification: true, // In verification flow, RMN is considered verified
        overallVerification: value
      }));
      
      // If verification was successful, show customer details
      if (value) {
        setShowCustomerDetails(true);
      }
    }
  };
  
  return (
    <CallValidationContext.Provider value={{ 
      validationState, 
      updateValidation,
      showCustomerDetails
    }}>
      {children}
    </CallValidationContext.Provider>
  );
};

export const useCallValidation = () => {
  const context = useContext(CallValidationContext);
  if (!context) {
    throw new Error('useCallValidation must be used within a CallValidationProvider');
  }
  return context;
};
