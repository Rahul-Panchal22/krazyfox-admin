import { Button, InputLabel } from '@mui/material';
import React from 'react';
import { toAbsoluteUrl } from '../../utils';
import FileUploader from './FileUploader';
import './Upload.scss'


const UploadHere = ({setFileupload1 , setFileupload2, setFileupload3, setFileupload4, fileupload1, fileupload2, fileupload3, fileupload4, uploadText, uploadLabel, imageUrl0, imageUrl,  setImageUrl, uplaodWidth, uplaodHeight, uploadBtn, sideButton, imgselect }) => {
  
  const handleChange = (e) => {
    // setFileupload([...fileupload,e.target.files[0]]);
    if(!fileupload1 ){
      setFileupload1(e.target.files[0])
    }else if(!fileupload2){
      setFileupload2(e.target.files[0])
    }else if(!fileupload3){
      setFileupload3(e.target.files[0])
    }else{
      setFileupload4(e.target.files[0])
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImageUrl(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  }

  console.log("fileupload1", fileupload1);

  return (
    <>
			{/* {uploadLabel ? <InputLabel id="demo-simple-select-label" className='extra-label upload-label'>{uploadLabel}</InputLabel> : ''} */}
      {/* {imageUrl?.length > 0 ? 
        <div className={`uplaoded-ui ${sideButton ? 'side-button' : ''}`} style={{width: uplaodWidth, height: uplaodHeight }}>
          {imageUrl ? <img src={imageUrl} alt="" /> : ''}
					<Button variant="contained" component="label" className='upload-video'>
						<span className='upload-plus-btn'>{uploadBtn}</span>
          	<input type='file' name="file" onChange={(e) => handleChange(e)} required/>
					</Button>
        </div> */}
        {fileupload1 ?
        <video controls autoplay> <source src={fileupload1} type="video/mp4" /></video>
        :
        <FileUploader handleChange={handleChange} uplaodWidth={uplaodWidth} uplaodHeight={uplaodHeight} uploadText={uploadText} uploadBtn={uploadBtn} />
      }
      {fileupload2 ?
        <video controls> <source src={fileupload2} type="video/mp4" /></video>
        :
        <FileUploader handleChange={handleChange} uplaodWidth={uplaodWidth} uplaodHeight={uplaodHeight} uploadText={uploadText} uploadBtn={uploadBtn} />
      }
      {fileupload3 ?
        <video controls> <source src={fileupload3} type="video/mp4" /></video>
        :
        <FileUploader handleChange={handleChange} uplaodWidth={uplaodWidth} uplaodHeight={uplaodHeight} uploadText={uploadText} uploadBtn={uploadBtn} />
      }
      {fileupload4 ?
        <video controls> <source src={fileupload4} type="video/mp4" /></video>
        :
        <FileUploader handleChange={handleChange} uplaodWidth={uplaodWidth} uplaodHeight={uplaodHeight} uploadText={uploadText} uploadBtn={uploadBtn} />
      }
    </>
  );
}

export default UploadHere;