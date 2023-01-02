import { Button, InputLabel } from '@mui/material';
import React from 'react';
import { toAbsoluteUrl } from '../../utils';
import './Upload.scss'


const UploadHere = ({setFileupload, fileupload, uploadText, uploadLabel, imageUrl,  setImageUrl, uplaodWidth, uplaodHeight, uploadBtn, sideButton }) => {
  console.log('fileupload: ', fileupload);
  
  const handleChange = (e) => {
    setFileupload([...fileupload,e.target.files[0]]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImageUrl(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <>
			{uploadLabel ? <InputLabel id="demo-simple-select-label" className='extra-label upload-label'>{uploadLabel}</InputLabel> : ''}
      {imageUrl ? 
        <div className={`uplaoded-ui ${sideButton ? 'side-button' : ''}`} style={{width: uplaodWidth, height: uplaodHeight }}>
          {imageUrl ? <img src={imageUrl} alt="" /> : ''}
					<Button variant="contained" component="label" className='upload-video'>
						<span className='upload-plus-btn'>{uploadBtn}</span>
          	<input type='file' name="file" onChange={(e) => handleChange(e)} required/>
					</Button>
        </div>
        :
        <div className='uplaod-ui' style={{width: uplaodWidth, height: uplaodHeight }}>
          <Button variant="contained" component="label" className='upload-video '>
						{uploadText}
						<span className='upload-plus-btn'>{uploadBtn}</span>
	          <input type='file' name="file" onChange={(e) => handleChange(e)} accept=".mp4" multiple required/>
					</Button>
					<span className='uplaod-span'>
						<img src={toAbsoluteUrl('/images/uplaod-icon.svg')} alt="" /><br />
					</span>
        </div>
      }
    </>
  );
}

export default UploadHere;