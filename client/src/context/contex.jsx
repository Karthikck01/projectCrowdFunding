import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0xAfBC0726D2d6D0c3F2c9D40166ab36AdD54460F4");
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, "createCampaign")

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address,
        form.ownername, 
        form.title, 
        form.description, 
        form.doclink, 
        form.target, 
        new Date(form.deadline).getTime(),
        form.image
      ] );
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
}

const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');

    const parsedCampaings = campaigns.map((campaign, i) => ({
      ownername: campaign.ownername,
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      doclink: campaign.doclink,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i
    }));
    return parsedCampaings;
}