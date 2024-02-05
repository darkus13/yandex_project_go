// DistributedCalculator.js
import React, { useState } from 'react';
import CalculatorTab from './CalculatorTab';
import CalculatorSettingsTab from './CalculatorSettingsTab';
import ComputingResourcesTab from './ComputingResourcesTab';

const DistributedCalculator = () => {
  const [activeTab, setActiveTab] = useState('calculator');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange('calculator')}>Calculator</button>
        <button onClick={() => handleTabChange('calculatorSettings')}>Calculator Settings</button>
        <button onClick={() => handleTabChange('computingResources')}>Computing Resources</button>
      </div>
      {activeTab === 'calculator' && <CalculatorTab />}
      {activeTab === 'calculatorSettings' && <CalculatorSettingsTab />}
      {activeTab === 'computingResources' && <ComputingResourcesTab />}
    </div>
  );
};

export default DistributedCalculator;
