
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useCallValidation } from '@/hooks/useCallValidation';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'verification' | 'rmn' | 'validate-rmn' | 'mother-tongue';
}

const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose, type }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { toast } = useToast();
  const { updateValidation } = useCallValidation();
  
  const handleSubmit = () => {
    if (type === 'validate-rmn') {
      // For the RMN validation popup from validate button
      toast({
        title: 'RMN Validation Required',
        description: 'Please request customer to call from RMN.',
      });
      onClose();
      return;
    }
    
    // For mother tongue verification
    if (type === 'mother-tongue') {
      if (selectedOption === 'marathi') {
        toast({
          title: 'Verification Successful',
          description: 'Customer verification completed successfully.',
        });
        updateValidation('rmn', true);
      } else {
        toast({
          title: 'Verification Failed',
          description: 'The answer provided is incorrect.',
          variant: 'destructive',
        });
        updateValidation('rmn', false);
      }
      onClose();
      return;
    }
    
    // For regular verification flow
    if (selectedOption === '123') {
      toast({
        title: 'Verification Successful',
        description: 'Customer verification completed successfully.',
      });
      updateValidation(type === 'rmn' ? 'rmn' : 'verification', true);
    } else {
      toast({
        title: 'Verification Failed',
        description: 'The answer provided is incorrect.',
        variant: 'destructive',
      });
      updateValidation(type === 'rmn' ? 'rmn' : 'verification', false);
    }
    
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">
              {type === 'validate-rmn' ? 'RMN Validation' : 
               type === 'mother-tongue' ? 'Verification Question' : 'Verification Engine'}
            </DialogTitle>
            <Button variant="ghost" onClick={onClose} className="-mt-2">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-4">
          {type === 'validate-rmn' ? (
            <h3 className="text-lg font-medium text-blue-700 mb-4">
              Please request customer to call from RMN.
            </h3>
          ) : type === 'mother-tongue' ? (
            <>
              <h3 className="text-lg font-medium text-blue-700 mb-4">What is your mother tongue?</h3>
              
              <RadioGroup value={selectedOption || ''} onValueChange={setSelectedOption}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hindi" id="hindi" />
                    <Label htmlFor="hindi">Hindi</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="marathi" id="marathi" />
                    <Label htmlFor="marathi">Marathi</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="english" id="english" />
                    <Label htmlFor="english">English</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="kannada" id="kannada" />
                    <Label htmlFor="kannada">Kannada</Label>
                  </div>
                </div>
              </RadioGroup>
            </>
          ) : (
            <>
              <h3 className="text-lg font-medium text-blue-700 mb-4">What is the customer's maiden name?</h3>
              
              <RadioGroup value={selectedOption || ''} onValueChange={setSelectedOption}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ABC" id="ABC" />
                    <Label htmlFor="ABC">ABC</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="XYZ" id="XYZ" />
                    <Label htmlFor="XYZ">XYZ</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="123" id="123" />
                    <Label htmlFor="123">123</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="RMN" id="RMN" />
                    <Label htmlFor="RMN">RMN</Label>
                  </div>
                </div>
              </RadioGroup>
            </>
          )}
        </div>
        
        <Button 
          onClick={handleSubmit} 
          className="w-full mt-4 bg-blue-400 hover:bg-blue-500 text-white"
        >
          {type === 'validate-rmn' ? 'Acknowledge' : 'Submit'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
