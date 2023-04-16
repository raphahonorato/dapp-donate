import Web3 from 'web3';
import ABI from './ABI.json'


const CONTRACT_ADDRESS = '0xD38Fd25eC6967bA5B5002A0841432Be364C6D622'

export async function doLogin() {
    if (!window.ethereum) throw new Error('Metamask não encontrada!')

    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.requestAccounts()

    if (!accounts || !accounts.length) throw new Error('Carteira não encontrada ou não permitida!')

    localStorage.setItem('wallet', accounts[0])
    return accounts[0]
}

function getContract() {
    const web3 = new Web3(window.ethereum)
    const from = localStorage.getItem('wallet')
    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from })

}


export function addCampaign(campaign) {
    const contract = getContract()
    return contract.methods.addCampaign(campaign.title, campaign.description, campaign.videoUrl, campaign.imageUrl).send()
}

export function getLastCampaignId(){
    const contract = getContract()
    return contract.methods.nextId().call()
}