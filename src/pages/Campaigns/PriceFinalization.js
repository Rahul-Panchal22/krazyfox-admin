import React, { useState } from "react";
import { Button, FormControl, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { CampaignApplicationStepper } from "../../actions/campaign";
import { toast } from "react-toastify";

const defaultFormField = {
  price : ""
};


const PriceFinalization = ({ id }) => {

  const dispatch = useDispatch();

  const [formField, setFormField] = useState(defaultFormField);

  const {
    price
  } = formField;

  const onMutate = (e) => {
    const { value, name } = e.target;
    setFormField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onFinish = (e) => {
    e.preventDefault();
    const data = {
      id : id,
      price : price
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
        <FormControl variant="filled">
          <TextField
           id="filled-multiline-static"
            label="Type here..."
             variant="filled"
             name="price" 
             onChange={onMutate}/>
        </FormControl>
        <Button variant="contained" className="approved" onClick={onFinish}>Approved</Button>
      </Stack>
    </>
  );
};

export default PriceFinalization;
