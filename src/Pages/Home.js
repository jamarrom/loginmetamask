import React from 'react';
import { useState } from 'react';

function Home() {
  const [error,setError] = useState(null);
  const [showAddress,setShowAddress] = useState(null);
  const [session,setSession] = useState(false);
  let addresAct="";

  const loginMetamask = () => {
    if(window.ethereum) {
      window.ethereum.request({method: 'eth_chainId'}).then(result => {
        if(result==="0x169")
        {
          window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
            fetchAllData(result[0]);
            addresAct = result[0];
            setSession(true);
          })
        }
        else{
          window.ethereum=null;
          alert("Cambia tu red a theta");
          setError("Cambia tu red a theta");
          setSession(false);
        }
      })
    } else {
      setError("Por favor instala metamask");
    }
  }

  const fetchAllData =  (fetch) => {
    setShowAddress(fetch);

    window.ethereum.on('chainChanged', (chainId) => {
      //console.log("Cambio:" +chainId);

      if(chainId==="0x169")
      {
        setError("");
        setShowAddress(addresAct);
        setSession(true);
      }
      else {
        alert("Cambia tu red a theta");
        setError("Cambia tu red a theta");
        setShowAddress("");
        setSession(false);
      }
    });
  }

  return(
    <div>
      METEMASK ADDRESS : {showAddress}
      {!session?<button onClick={ loginMetamask }>Login MetaMask</button>:""}
      {error}
    </div>
  )
}

export default Home;