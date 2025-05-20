
import React, { useState } from 'react';
import { 
  ChevronDown,
  X, 
  PhoneCall
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const [auxCode, setAuxCode] = useState('Ready');

  return (
    <div className="bg-call-header text-call-header-text p-4 flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <div>
          <span className="block text-sm">Agent Name</span>
          <span className="font-semibold text-lg">Shirley</span>
        </div>
        
        <div>
          <span className="block text-sm">Aux Code</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-blue-900 hover:text-white">
                {auxCode} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setAuxCode('Ready')}>Ready</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAuxCode('Not Ready')}>Not Ready</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAuxCode('Break')}>Break</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white text-call-header border-white hover:bg-gray-100">
              Dialler Controls
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <span className="mr-2 flex items-center justify-center w-4 h-4">D</span> Dialpad
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="mr-2 flex items-center justify-center w-4 h-4">H</span> Hold
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="mr-2 flex items-center justify-center w-4 h-4">T</span> Transfer
            </DropdownMenuItem>
            <DropdownMenuItem>
              <X className="mr-2 h-4 w-4" /> Disconnect
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PhoneCall className="mr-2 h-4 w-4" /> Redial
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button variant="outline" className="bg-white text-call-header border-white hover:bg-gray-100">
          <ChevronDown className="mr-2 h-4 w-4" /> Call Back
        </Button>
        
        <Button variant="destructive">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
