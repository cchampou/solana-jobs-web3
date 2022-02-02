import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, TransactionSignature } from '@solana/web3.js';

const RequestAirdrop = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const onClick = async () => {
    if (!publicKey) {
      alert('Please open a wallet');
      return;
    }
    console.info('Requesting airdrop');
    let signature: TransactionSignature = '';
    try {
      signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      console.info('Airdrop requested:', signature);
      await connection.confirmTransaction(signature, 'processed');
      console.info('Airdrop successful', signature);
    } catch (e) {
      alert(e.message);
    }
  };

  return <button onClick={onClick}>Airdrop</button>;
};

export default RequestAirdrop;
