import React from "react";
import { Avatar, Button, Divider, FormControl, Grid, InputLabel, TextField } from "@mui/material";
import PaymentCard from "./PaymentCard";
import { toAbsoluteUrl } from "../../utils";

const PaymentsRejectionReason = () => {

  return (
    <>
      <div className="avtar-header">
        <div className="avtar-info">
          <Avatar alt="Remy Sharp" src={toAbsoluteUrl('/images/avtar.png')} sx={{ width: 78, height: 78 }} />
          <h4 className="user-name">Harley Quinn</h4>
        </div>
        <h4 className="avtar-info rejection">Payment Status: Rejected</h4>
      </div>
      <div className='border-paper'>
        <Grid container direction="row" spacing={2} className='mar-bottom-40'>
          <PaymentCard
            cardHeadign="Brand"
            cardContent="900K"
          />
          <PaymentCard
            cardHeadign="Contact Number"
            cardContent="+91 0000000000"
          />
          <PaymentCard
            cardHeadign="Email"
            cardContent="harley@quinn.com"
          />
          <PaymentCard
            cardHeadign="Price"
            cardContent="₹5000"
          />
          <PaymentCard
            cardHeadign="Campaign Title"
            cardContent="Promotional video for Netflix"
          />
          <PaymentCard
            cardHeadign="Submitted On"
            cardContent="11-10-2022"
          />
        </Grid>
        <Divider className='divide-mar-40--40' />
        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item xs={6}>
            <InputLabel id="demo-simple-select-label" className='extra-label'>Enter reason for rejection</InputLabel>
            <FormControl variant="filled">
              <TextField id="filled-multiline-static" label="Type here..." multiline rows={4} variant="filled" />
            </FormControl>
            <div className='btn-row mar-top-20'>
              <Button variant="contained" className='min-width-180-img'>Save</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PaymentsRejectionReason;
