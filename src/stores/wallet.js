import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useWalletStore = defineStore('wallet', () => {
    const walletAddress = ref(localStorage.getItem('walletAddress') || '');

    const connectWallet = async () => {
        if (typeof window.ethereum === 'undefined') {
            alert('MetaMask не установлен!');
            return false;
        }

        try {
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            walletAddress.value = accounts[0];
            localStorage.setItem('walletAddress', accounts[0]);
            return true;
        } catch (err) {
            console.error('MetaMask Error:', err);
        }
        return false;
    };

    const autoConnect = async () => {
        const storedAddress = localStorage.getItem('walletAddress');
        if (storedAddress && window.ethereum) {
            try {
                const accounts = await window.ethereum.request({method: 'eth_accounts'});
                if (accounts.length > 0 && accounts[0].toLowerCase() === storedAddress.toLowerCase()) {
                    walletAddress.value = accounts[0];
                } else {
                    const newAccounts = await window.ethereum.request({method: 'eth_requestAccounts'});
                    walletAddress.value = newAccounts[0];
                    localStorage.setItem('walletAddress', newAccounts[0]);
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleAccountsChanged = (accounts) => {
        console.log('handleAccountsChanged', {accounts});

        if (accounts.length > 0) {
            walletAddress.value = accounts[0];
            localStorage.setItem('walletAddress', accounts[0]);
        } else {
            walletAddress.value = '';
            localStorage.removeItem('walletAddress');
        }
    };

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return {walletAddress, connectWallet, autoConnect};
});