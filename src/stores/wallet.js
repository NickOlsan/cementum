import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useWalletStore = defineStore('wallet', () => {
    const walletAddress = ref(localStorage.getItem('walletAddress') || '');

    // Функция для переключения на Binance Smart Chain
    const switchToBSC = async () => {
        if (typeof window.ethereum === 'undefined') return false;
        
        try {
            // Пробуем переключиться на BSC
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x38' }], // 0x38 = 56 в шестнадцатеричном формате
            });
            return true;
        } catch (switchError) {
            // Если сеть не добавлена в MetaMask, добавляем её
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: '0x38',
                                chainName: 'Binance Smart Chain',
                                nativeCurrency: {
                                    name: 'BNB',
                                    symbol: 'BNB',
                                    decimals: 18
                                },
                                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                                blockExplorerUrls: ['https://bscscan.com/']
                            },
                        ],
                    });
                    return true;
                } catch (addError) {
                    console.error('Ошибка при добавлении BSC:', addError);
                    return false;
                }
            }
            console.error('Ошибка при переключении на BSC:', switchError);
            return false;
        }
    };

    const connectWallet = async () => {
        if (typeof window.ethereum === 'undefined') {
            alert('MetaMask не установлен!');
            return false;
        }

        try {
            // Сначала переключаемся на BSC
            const switched = await switchToBSC();
            if (!switched) {
                alert('Не удалось переключиться на Binance Smart Chain!');
                return false;
            }
            
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
                // Переключаемся на BSC при автоподключении
                await switchToBSC();
                
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

    return {walletAddress, connectWallet, autoConnect, switchToBSC};
});