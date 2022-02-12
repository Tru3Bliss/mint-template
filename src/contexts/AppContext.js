import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState(null)
  const [onBoard, setOnBoard] = useState(null)
  const [notify, setNotify] = useState(null)
  const [contract, setContract] = useState()
  const [address, setAddress] = useState()
  const [wallet, setWallet] = useState()

  return (
    <AppContext.Provider 
      value={{ 
        provider,
        setProvider,
        loading,
        setLoading,
        walletAddress,
        setWalletAddress,
        onBoard,
        setOnBoard,
        notify,
        setNotify,
        contract, 
        setContract,
        address,
        setAddress,
        wallet,
        setWallet
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);