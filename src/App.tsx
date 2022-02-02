import React from 'react';
import Wallet from './Wallet';
import RequestAirdrop from './RequestAirdrop';

const App = () => {
  return (
    <Wallet>
      <h1>Solana</h1>
      <RequestAirdrop />
    </Wallet>
  );
};

export default App;
