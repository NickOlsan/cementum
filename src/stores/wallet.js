import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWalletStore = defineStore('wallet', () => {
  const walletAddress = ref(localStorage.getItem('walletAddress') || '');

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask не установлен!');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      walletAddress.value = accounts[0];
      localStorage.setItem('walletAddress', accounts[0]);
      alert(`Вы успешно вошли как ${accounts[0]}`);
    } catch (err) {
      console.error('MetaMask Error:', err);
      alert(`Ошибка авторизации: ${err.message || err}`);
    }
  };

  const autoConnect = async () => {
    const storedAddress = localStorage.getItem('walletAddress');
    if (storedAddress && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0 && accounts[0].toLowerCase() === storedAddress.toLowerCase()) {
          walletAddress.value = accounts[0];
        } else {
          const newAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          walletAddress.value = newAccounts[0];
          localStorage.setItem('walletAddress', newAccounts[0]);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return { walletAddress, connectWallet, autoConnect };
});