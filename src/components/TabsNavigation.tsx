
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabsNavigationProps {
  activeTab: 'verification' | 'rmn';
  onTabChange: (tab: 'verification' | 'rmn') => void;
  children: React.ReactNode;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({ activeTab, onTabChange, children }) => {
  return (
    <Tabs 
      value={activeTab} 
      onValueChange={(value) => onTabChange(value as 'verification' | 'rmn')}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="verification">Verification Flow</TabsTrigger>
        <TabsTrigger value="rmn">RMN Validation</TabsTrigger>
      </TabsList>
      <TabsContent value={activeTab} className="mt-6">
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default TabsNavigation;
