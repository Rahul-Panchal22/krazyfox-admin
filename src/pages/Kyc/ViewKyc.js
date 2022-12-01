import React from "react";
import { Divider, Grid, Chip, Avatar } from "@mui/material";
import KycCard from "./KycCard";
import { KycStatus } from "../../svg";
import { toAbsoluteUrl } from "../../utils";


const ViewKyc = () => {

  return (
    <>
      <div className="avtar-header">
        <div className="avtar-info">
          <Avatar alt="Remy Sharp" src={toAbsoluteUrl('/images/avtar.png')} sx={{ width: 78, height: 78 }} />
          <h4 className="user-name">Harley Quinn</h4>
        </div>
      </div>
      <div className='border-paper'>
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          <KycCard
            cardHeadign="Followers"
            cardContent="900K"
          />
          <KycCard
            cardHeadign="Contact Number"
            cardContent="+91 0000000000"
          />
          <KycCard
            cardHeadign="Email"
            cardContent="harley@quinn.com"
          />
          <KycCard
            cardHeadign="Category"
            chipList
            chipItem={['chip 1', 'chip 2', 'chip 3', 'chip 4']}
          />
          <KycCard
            cardHeadign="Address"
            cardContent="Boompanda HQ, near Balewadi High Street, 422004"
          />
          <KycCard
            cardHeadign="City"
            cardContent="Pune"
          />
          <KycCard
            cardHeadign="State"
            cardContent="Maharashtra"
          />
          <KycCard
            cardHeadign="Gender"
            cardContent="Female"
          />
          <KycCard
            cardHeadign="Language"
            cardContent="Hindi"
          />
          <KycCard
            cardHeadign="Genre"
            cardContent="Fashion"
          />
          <KycCard
            cardHeadign="Sub-Genre"
            cardContent="Beauty"
          />
        </Grid>
        <Divider className='divide-mar-40--40' />
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          {['It’s Harley', '@iam.harley', '@iam.harley'].map((text, i) => (
            <Grid item xs={6} key={i}>
              <KycStatus /> &nbsp;&nbsp;&nbsp;{text}
            </Grid>
          ))}
        </Grid>
        <Divider className='divide-mar-40--40' />
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          <Grid item xs={6} className="veiw-card">
            <p className="label">Aadhar Card</p>
            <figure className='view-doc d-flex-start-start'>
              <img src={toAbsoluteUrl("/images/view-doc.png")} alt="" />
              <img src={toAbsoluteUrl("/images/view-doc.png")} alt="" />
            </figure>
            <Chip icon={<KycStatus svgFill='#1B5E20' />} label="Verified" variant="outlined" className='verified-tag' />
          </Grid>
          <Grid item xs={6} className="veiw-card">
            <p className="label">PAN Card</p>
            <figure className='view-doc d-flex-start-start'>
              <img src={toAbsoluteUrl("/images/view-doc.png")} alt="" />
            </figure>
            <Chip icon={<KycStatus svgFill='#1B5E20' />} label="Verified" variant="outlined" className='verified-tag' />
          </Grid>
          <Grid item xs={6} className="veiw-card">
            <p className="label">Passbook</p>
            <figure className='view-doc d-flex-start-start'>
              <img src={toAbsoluteUrl("/images/view-doc.png")} alt="" />
            </figure>
            <Chip icon={<KycStatus svgFill='#1B5E20' />} label="Verified" variant="outlined" className='verified-tag' />
          </Grid>
        </Grid>
        <Divider className='divide-mar-40--40' />
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          <KycCard
          cardWidth={4}
            cardHeadign="Bank Account Number"
            cardContent="0000000000000000"
          />
          <KycCard
            cardHeadign="IFSC"
            cardContent="ABCD000000"
          />
          <KycCard
            cardHeadign="Account Holder Name"
            cardContent="Harley Quinn"
          />
        </Grid>
      </div>
    </>
  );
};

export default ViewKyc;
