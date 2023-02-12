import React from "react";
import { toAbsoluteUrl } from "../../utils";
import './OverviewCard.scss'


const OverviewCard = (props) => {

  const { cardIcon, cardHeading, averageView } = props

  return (
    <>
      <div className="overview-card">
        <div className="card-icon">
          <img src={toAbsoluteUrl(`/images/${cardIcon}`)} alt="" />
        </div>
        <div className="card-content">
          <h6 className="card-heading">{cardHeading}</h6>
          <h3 className="card-disc">{averageView}</h3>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
