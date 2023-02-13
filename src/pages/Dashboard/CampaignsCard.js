import React from "react";
import { useNavigate } from "react-router-dom";
import { toAbsoluteUrl } from "../../utils";
import './CampaignsCard.scss'


const CampaignsCard = (props) => {

  const { cardColor, campaignTitle, completedCampaign, totalCampaign, completedToday, completedCard, navigationPath } = props
  const navigate=useNavigate();
  return (
    <>
      <div className={`campaigns-card ${cardColor}`} onClick={() => navigate(navigationPath)}>
        <div className="card-content">
          <h6 className="card-heading">{campaignTitle}</h6>
          <h3 className="card-disc">{completedCampaign} {totalCampaign ? `/ ${totalCampaign}` : totalCampaign}</h3>
          <p className="card-para"><b>{completedToday}</b> campaigns {completedCard ? 'completed' : 'submitted'} by creators today</p>
        </div>
      </div>
    </>
  );
};

export default CampaignsCard;
