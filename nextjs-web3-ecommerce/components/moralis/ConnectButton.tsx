import { Button } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useMoralis } from 'react-moralis';

interface ConnectButtonProps {
  onClick: () => void;
}

export const ConnectButton = ({ onClick }: ConnectButtonProps) => {
  const { chainId, account, isWeb3Enabled } = useMoralis();

  const connectString = useMemo(() => {
    let output = '';
    if (account) {
      output += `${account.substring(0, 5)}...${account.substring(account.length - 3)}`;
    }
    if (chainId) {
      output += ` (${chainId})`;
    }
    return output;
  }, [account, chainId]);

  return (
    <Button colorScheme={isWeb3Enabled ? 'blue' : 'red'} onClick={onClick} border='0px' height='42px' width='90px'>
      {isWeb3Enabled ? connectString.substring(0, 5)+"..." : 'Connect'}
    </Button>
  );
};
