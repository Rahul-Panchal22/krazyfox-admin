import React, { useState } from "react";
import { Button, FormControl, Stack, TextField } from "@mui/material";
import UploadHere from "../../components/UploadFile";
import { Link } from "react-router-dom";
import { CampaignApplicationStepper } from "../../actions/campaign";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const defaultFormField = {
  link : ""
};

const SubmitWork = ({ id }) => {

  const [fileupload, setFileupload] = useState({});
  const [imageUrl, setImageUrl] = useState();

  const dispatch = useDispatch();

  const [formField, setFormField] = useState(defaultFormField);

  const {
    link
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
      submissionLink : link
    }
    console.log('data: ', data);
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
          <TextField id="filled-multiline-static"
           label="Type here..."
            variant="filled"
          name="link" 
          onChange={onMutate}/>
        </FormControl>
        <Button variant="contained" className="approved" onClick={onFinish}>Approved</Button>
      </Stack>
      {/* <Link to="/">https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiGl-zUvtr6AhUuxTgGHWxBAxUQPAgI</Link> */}
      <Stack direction="row" spacing={1}>
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </Stack>
    </>
  );
};

export default SubmitWork;
