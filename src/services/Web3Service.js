import Web3 from 'web3';

export async function doLogin() {
    if (!window.ethereum) throw new Error('Metamask não encontrada!')

    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.requestAccounts()

    if (!accounts || !accounts.length) throw new Error('Carteira não encontrada ou não permitida!')

    return accounts[0]
}