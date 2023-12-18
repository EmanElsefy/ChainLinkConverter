import React, { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [conversion, setConversion] = useState('');

  const getConversion = async () => {
    // Initialize ethers.js with the provider from MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    // Call the smart contract function
    const result = await contract.getChainlinkDataFeedLatestAnswer();

    // Update state with the result
    setConversion(ethers.utils.formatUnits(result, 'wei'));
  };

  return (
    <div>
      <select>
        <option value="BTC/USD">BTC/USD</option>
        <option value="ETH/USD">ETH/USD</option>
        <option value="LINK/USD">LINK/USD</option>
        <option value="AAVE/USD">AAVE/USD</option>
      </select>
      <button onClick={getConversion}>Submit</button>
      <input type="text" value={conversion} readOnly />
    </div>
  );
}

export default App;