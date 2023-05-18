import React from 'react';
import { useState } from 'react';

function Home() {
  const [error,setError] = useState(null);
  const [showAddress,setShowAddress] = useState(null);

  const loginMetamask = () => {
    if(window.ethereum) {
      window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
        fetchAllData(result[0]);
      })
    } else {
      setError("Por favor instala metamask");
    }
  }

  const fetchAllData =  (fetch) => {
    setShowAddress(fetch);
  }

  return(
    <div>
      METEMASK ADDRESS : {showAddress}
      <button onClick={ loginMetamask }>Login MetaMask</button>
      {error}
    </div>
  )
}

export default Home;