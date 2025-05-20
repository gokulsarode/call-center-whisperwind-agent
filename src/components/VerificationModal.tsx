
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
  type: 'verification' | 'rmn';
}

const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose, type }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { toast } = useToast();
  const { updateValidation } = useCallValidation();
  
  const handleSubmit = () => {
    if (type === 'verification') {
      if (selectedOption === '123') {
        toast({
          title: 'Verification Successful',
          description: 'Customer verification completed successfully.',
        });
        updateValidation('verification', true);
      } else {
        toast({
          title: 'Verification Failed',
          description: 'The answer provided is incorrect.',
          variant: 'destructive'
        });
        updateValidation('verification', false);
      }
    } else if (type === 'rmn') {
      toast({
        title: 'RMN Validation',
        description: 'Please request customer to call from RMN.',
        variant: 'destructive'
      });
      updateValidation('rmn', false);
    }
    
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">Verification Engine</DialogTitle>
            <Button variant="ghost" onClick={onClose} className="-mt-2">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        {type === 'verification' ? (
          <>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-blue-700 mb-4">What is the customer maiden name?</h3>
              
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
            </div>
            
            <Button 
              onClick={handleSubmit} 
              className="w-full mt-4 bg-blue-400 hover:bg-blue-500 text-white"
            >
              Submit
            </Button>
          </>
        ) : (
          <div className="py-6">
            <p className="text-center text-lg">Please request customer to call from RMN.</p>
            <Button 
              onClick={handleSubmit} 
              className="w-full mt-6 bg-blue-400 hover:bg-blue-500 text-white"
            >
              OK
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
