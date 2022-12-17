import React, { useEffect, useState } from "react";
import { Divider, Grid, Chip, Avatar } from "@mui/material";
import KycCard from "./KycCard";
import { KycStatus } from "../../svg";
import { toAbsoluteUrl } from "../../utils";
import { fetchCreator } from "../../actions/creators";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


const ViewKyc = () => {
  const [creatorDetail, setCreatorDetail] = useState()
  const dispatch = useDispatch();
  const params = useParams()

  const fetchCreatorDetailThroughId = () => {
    dispatch(fetchCreator(`?creator_id=${params.kycId}`))
      .then((res) => {
        if (res.code === 200) {
          setCreatorDetail(res.data);
          toast.success(res.message);
        } else {
          toast.error("error");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  useEffect(() => {
    fetchCreatorDetailThroughId();
    
  }, []);

  console.log('--------------------------------', creatorDetail)

  return (
    <>
      <div className="avtar-header">
        <div className="avtar-info">
          <Avatar alt="Remy Sharp" src={toAbsoluteUrl('/images/avtar.png')} sx={{ width: 78, height: 78 }} />
          <h4 className="user-name">{creatorDetail ? creatorDetail?.name : '-'}</h4>
        </div>
      </div>
      <div className='border-paper'>
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          <KycCard
            cardHeadign="Followers"
            cardContent={creatorDetail ? creatorDetail?.campaign_followers_range : '-'}
          />
          <KycCard
            cardHeadign="Contact Number"
            cardContent={creatorDetail ? '+'.concat('',creatorDetail.phone_number) : '-'}
          />
          <KycCard
            cardHeadign="Email"
            cardContent={creatorDetail ? creatorDetail.email : '-'}
          />
          <KycCard
            cardHeadign="Category"
            chipList
            chipItem={creatorDetail ? creatorDetail.categoriesArrayList : []}
          />
          <KycCard
            cardHeadign="Address"
            cardContent={creatorDetail ? creatorDetail.address : []}
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
            cardContent={creatorDetail ? creatorDetail.gender : '-'}
          />
          <KycCard
            cardHeadign="Language"
            cardContent={creatorDetail ? creatorDetail.language : '-'}
          />
          <KycCard
            cardHeadign="Genre"
            cardContent={creatorDetail ? creatorDetail.genre : '-'}
          />
          <KycCard
            cardHeadign="Sub-Genre"
            cardContent={creatorDetail ? creatorDetail.sub_genre : '-'}
          />
        </Grid>
        <Divider className='divide-mar-40--40' />
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          {[
            {
              name: 'Aadhar Card',
              value: creatorDetail?.is_adhar_verified
            }, 
            {
              name: 'Bank Detials',
              value: creatorDetail?.is_bank_detail_verified}, 
            {
              name: 'Pan Card',
              value: creatorDetail?.is_pan_card_verified}, 
            {
              name: 'Passbook Verified',
              value: creatorDetail?.is_passbook_verified
            }].map((text, i) => (
            <Grid item xs={6} key={i}>
              <KycStatus svgFill={text.value == '1'? 'green' : 'red'} /> &nbsp;&nbsp;&nbsp;{text.name}
            </Grid>
          ))}
        </Grid>
        <Divider className='divide-mar-40--40' />
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          <Grid item xs={6} className="veiw-card">
            <p className="label">Aadhar Card</p>
            <figure className='view-doc d-flex-start-start'>
              <img src={creatorDetail ? creatorDetail?.adhar_front_url : toAbsoluteUrl("/images/view-doc.png")} alt="" />
              <img src={creatorDetail ? creatorDetail?.adhar_back_url : toAbsoluteUrl("/images/view-doc.png")} alt="" />
            </figure>
            <Chip icon={<KycStatus svgFill='#1B5E20' />} label={`${creatorDetail?.is_adhar_verified == 1 ? 'Verified' : 'Not Verified'}`} variant="outlined" className = {`${creatorDetail?.is_adhar_verified == 1 ? 'verified-tag filled' : 'verified-tag'}`} />
          </Grid>
          <Grid item xs={6} className="veiw-card">
            <p className="label">PAN Card</p>
            <figure className='view-doc d-flex-start-start'>
              <img src={creatorDetail ? creatorDetail?.pan_card_url : ("/images/view-doc.png")} alt="" />
            </figure>
            <Chip icon={<KycStatus svgFill='#1B5E20' />} label={`${creatorDetail?.is_pan_card_verified == 1 ? 'Verified' : 'Not Verified'}`} variant="outlined" className = {`${creatorDetail?.is_pan_card_verified == 1 ? 'verified-tag filled' : 'verified-tag'}`} />
          </Grid>
          <Grid item xs={6} className="veiw-card">
            <p className="label">Passbook</p>
            <figure className='view-doc d-flex-start-start'>
              <img src={creatorDetail ? creatorDetail?.passbook_url: toAbsoluteUrl("/images/view-doc.png")} alt="" />
            </figure>
            <Chip icon={<KycStatus svgFill='#1B5E20' />} label={`${creatorDetail?.is_passbook_verified == 1 ? 'Verified' : 'Not Verified'}`} variant="outlined" className = {`${creatorDetail?.is_passbook_verified == 1 ? 'verified-tag filled' : 'verified-tag'}`} />
          </Grid>
        </Grid>
        <Divider className='divide-mar-40--40' />
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          <KycCard
          cardWidth={4}
            cardHeadign="Bank Account Number"
            cardContent={creatorDetail ? creatorDetail.bank_ac_holder_name : '-'}
          />
          <KycCard
            cardHeadign="IFSC"
            cardContent={creatorDetail ? creatorDetail.bank_ifsc_code : '-'}
          />
          <KycCard
            cardHeadign="Account Holder Name"
            cardContent={creatorDetail ? creatorDetail.bank_ac_holder_name : '-'}
          />
        </Grid>
      </div>
    </>
  );
};

export default ViewKyc;
