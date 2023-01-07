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

// const SubmitWork = ({ id }) => {

//   const dispatch = useDispatch();

//   const [fileupload, setFileupload] = useState([]);
//   const [imageUrl, setImageUrl] = useState([]);
//   const [fileupload1, setFileupload1] = useState();
//   const [fileupload2, setFileupload2] = useState();
//   const [fileupload3, setFileupload3] = useState();
//   const [fileupload4, setFileupload4] = useState();
//   const [formField, setFormField] = useState(defaultFormField);

//   const {
//     link
//   } = formField;

//   const onMutate = (e) => {
//     const { value, name } = e.target;
//     setFormField((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };


const SubmitWork = () => {

    const dispatch = useDispatch();

  const [fileupload, setFileupload] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [fileupload1, setFileupload1] = useState();
  const [fileupload2, setFileupload2] = useState();
  const [fileupload3, setFileupload3] = useState();
  const [fileupload4, setFileupload4] = useState();
  const [formField, setFormField] = useState(defaultFormField);

  return (
    <>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <FormControl variant="filled">
          <TextField id="filled-multiline-static" label="Type here..." variant="filled" />
        </FormControl>
        <Button variant="contained" className="approved">Approved</Button>
      </Stack>
      <Link to="/">https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiGl-zUvtr6AhUuxTgGHWxBAxUQPAgI</Link>
      <Stack direction="row" spacing={1}>
        {/* <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} imageUrl={imageUrl} setImageUrl={setImageUrl} /> */}
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload1={setFileupload1} setFileupload2={setFileupload2} setFileupload3={setFileupload3} setFileupload4={setFileupload4} fileupload1={fileupload1} fileupload2={fileupload2} fileupload3={fileupload3} fileupload4={fileupload4} imageUrl={imageUrl}  setImageUrl={setImageUrl} imgselect={1} />
        {/* <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload2={setFileupload2} fileupload2={fileupload2} imageUrl={imageUrl} setImageUrl={setImageUrl} imgselect={2} />
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload3={setFileupload3} fileupload3={fileupload3} imageUrl={imageUrl} setImageUrl={setImageUrl} imgselect={3} />
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload4={setFileupload4} fileupload4={fileupload4} imageUrl={imageUrl} setImageUrl={setImageUrl} imgselect={4} /> */}
      </Stack>
    </>
  );
};

export default SubmitWork
