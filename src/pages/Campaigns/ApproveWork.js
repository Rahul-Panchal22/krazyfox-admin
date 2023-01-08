import React from "react";
import { Button, FormControl, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { CampaignApplicationStepper } from "../../actions/campaign";
import { toast } from "react-toastify";


const ApproveWork = ({ id }) => {

  const dispatch = useDispatch();

  const handleClick = (status) => {
    const data = {
      id : id,
      applicationStatus : status
    }
    dispatch(CampaignApplicationStepper(data))
    .then((res) => {
      console.log('res------>: ', res);
      toast.success(res.status);
    })
    .catch((err) => {
      toast.error(err);
    });
  }

  return (
    <>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <Button variant="outlined" className="rejected" onClick={() => handleClick(4)}>Reject Application</Button>
        <Button variant="contained" className="approved" onClick={() => handleClick(1)}>Approve Application</Button>
      </Stack>
      {/* <Stack direction="row" spacing={2} className="pending-btn-row">
        <FormControl variant="filled">
          <TextField id="filled-multiline-static" label="Type here..." variant="filled" />
        </FormControl>
        <Button variant="contained" className="approved">Approved</Button>
      </Stack> */}
    </>
  );
};

export default ApproveWork;
