import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import Footer from './footer';
import NavBar from './navbar';
import { useAppContext } from '../contexts/AppContext';

import { ethers } from 'ethers';
import { getWeb3, initNotify, initOnboard } from '../util/wallet';
import { NFT_TREES_ABI } from '../util/abi/nft_trees_abi';
import { CONTRACT_ADDRESS } from '../util/address';

const Layout = ({
  children,
  title,
  selectLang,
  openLang,
  page = "home"
}) => {
  const context = useAppContext()

  const [address, setAddress] = useState(null)
  const [network, setNetwork] = useState(null)
  const [balance, setBalance] = useState(null)

  const [connected, setConnected] = useState(false)
  const [web3, setWeb3] = useState(null)


  useEffect(async () => {
    const _web3 = await getWeb3()
    setWeb3(_web3)
  }, [])
  useEffect(async () => {
    const onBoard = initOnboard({
      address: context.setAddress,
      network: setNetwork,
      balance: setBalance,
      wallet: wallet => {
        if (wallet.provider) {
          context.setWallet(wallet)
          context.setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'))
          console.log("web3?", web3)
          if(web3){
            const contract = new web3.eth.Contract(NFT_TREES_ABI, CONTRACT_ADDRESS)
            context.setContract(contract)
            console.log("contract", contract)
          }
        } else {
          console.log(wallet)
          context.setProvider(null)
          context.setWallet({})
        }
        window.localStorage.setItem('selectedWallet', wallet.name)
      }
    })
    context.setOnBoard(onBoard)
    context.setNotify(initNotify())
    // addWalletListener()
  }, [web3])


  useEffect(() => {
    const previouslySelectedWallet =
      window.localStorage.getItem('selectedWallet')
    if (previouslySelectedWallet && context.onBoard) {
      context.onBoard.walletSelect(previouslySelectedWallet)
    }
  }, [context.onBoard])


  useEffect(() => {
    setWeb3(window.__web3 || null);
  }, []);



  return (
    <div className='flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden text-app-black-100'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar address={context.address} wallet={context.wallet} />
      <main className="w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout