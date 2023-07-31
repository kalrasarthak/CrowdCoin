import web3 from "./web3";
import CampaignFactoty from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactoty.interface),
  "0x5CFB4c438F88a4B37f7D34f0B0dAF901236E7fF6"
);

export default instance;
