
import React, { createContext, useContext, useState } from 'react';

interface ValidationState {
  rmnVerification: boolean;
  ivrVerification: boolean;
  overallVerification: boolean;
  verification: boolean;
}

interface CallValidationContextType {
  validationState: ValidationState;
  updateValidation: (type: 'rmn' | 'verification', value: boolean) => void;
}

const CallValidationContext = createContext<CallValidationContextType | undefined>(undefined);

export const CallValidationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [validationState, setValidationState] = useState<ValidationState>({
    rmnVerification: false,
    ivrVerification: true, // IVR is always verified as per requirements
    overallVerification: false,
    verification: true, // This will make Multiple Scenario always show Yes for validation
  });
  
  const updateValidation = (type: 'rmn' | 'verification', value: boolean) => {
    if (type === 'rmn') {
      // For No & No Scenario tab
      setValidationState(prev => ({
        ...prev,
        rmnVerification: value,
        overallVerification: value,
        verification: false // No & No Scenario
      }));
    } else if (type === 'verification') {
      // For Multiple Scenario tab, validation status should always be Yes
      setValidationState(prev => ({
        ...prev,
        rmnVerification: value,
        overallVerification: true, // Always true for Multiple Scenario
        verification: true // Always true for Multiple Scenario
      }));
    }
  };
  
  return (
    <CallValidationContext.Provider value={{ 
      validationState, 
      updateValidation
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
