
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useCallValidation } from '@/hooks/useCallValidation';

interface CallDetailsProps {
  onValidateClick: () => void;
  activeTab: 'verification' | 'rmn';
}

const CallDetails: React.FC<CallDetailsProps> = ({ onValidateClick, activeTab }) => {
  const { validationState } = useCallValidation();
  const [rmnStatus, setRmnStatus] = useState('No');
  const [ivrStatus, setIvrStatus] = useState('Yes');
  
  // Get validation status based on active tab
  const validationStatus = activeTab === 'verification' ? 'Yes' : 'No';
  
  return (
    <div className="bg-white p-6 border rounded-md mb-6">
      <div className="bg-section-header text-section-header-text p-3 mb-4">
        <h2 className="text-lg font-semibold">Call Details</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Customer Name:</span>
          <span>Vinayak</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Source of the call:</span>
          <span>Mobile platform</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Language:</span>
          <span>English</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Agent Repeat Call:</span>
          <span>Yes</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">CLI:</span>
          <span>8765432191</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Agent Repeat Count:</span>
          <span>2</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">CRN:</span>
          <span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select CRN" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="crn1">CRN 1</SelectItem>
                <SelectItem value="crn2">CRN 2</SelectItem>
              </SelectContent>
            </Select>
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">IVR Repeat Count:</span>
          <span>5</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Treatment:</span>
          <span>Red carpet</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">C2C – Embark Information:</span>
          <span>Yes</span>
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-4">
          <Button onClick={onValidateClick} className="bg-section-header text-white hover:bg-blue-800">
            Validate
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <span className="flex items-center justify-center w-4 h-4">D</span> Dialpad
          </Button>
        </div>
        
        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <span className="font-medium">RMN Validation Status:</span>
            {activeTab === 'verification' ? (
              <Select value={rmnStatus} onValueChange={setRmnStatus}>
                <SelectTrigger className="w-[80px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <span className="text-validation-no font-semibold">No</span>
            )}
          </div>
          
          <div className="flex gap-2 items-center">
            <span className="font-medium">IVR Validation Status:</span>
            {activeTab === 'verification' ? (
              <Select value={ivrStatus} onValueChange={setIvrStatus}>
                <SelectTrigger className="w-[80px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <span className="text-validation-no font-semibold">No</span>
            )}
          </div>
          
          <div className="flex gap-2">
            <span className="font-medium">Validation Status:</span>
            <span className={validationStatus === 'Yes' ? 'text-validation-yes font-semibold' : 'text-validation-no font-semibold'}>
              {validationStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;
