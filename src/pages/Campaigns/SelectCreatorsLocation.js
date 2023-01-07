import React, { useState } from 'react'
import { Autocomplete, Box, Button, ButtonGroup, Chip, FilledInput, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { SearchIcon } from '../../svg';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Campaigns.scss'
// import Dropzone from 'react-dropzone';

const categoriesList = ['Surat', 'Maharashtra']


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const SelectCreatorsLocation = () => {

  const [kycList, setKycList] = useState([]);
  const [multiSelect, setMultiSelect] = useState([])
  const [search, setSearched] = useState("")
  const [filter, /* setFilter */] = useState()
  const [map, setMap] = React.useState(null)

  const handleSelect = (e) => {
    const {
      target: { value },
    } = e;
    setMultiSelect(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeFilter = (e) => {
    // if (e.target.value == '5') {
    //   getAllKycListing();
    // } else {
    //   dispatch(KycFilterListing(`?kyc_filter=${e.target.value}`))
    //     .then((res) => {
    //       setKycList(res.data);
    //     })
    //     .catch((err) => {
    //       toast.error(err);
    //     });
    // }
  };

  const onMutate = (e, value) => {
    setSearched(value);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB3qfOgTiJdEa5hv_l03saH8RMne_sQzqM"
  })

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const columns = [
    {
      field: "id",
      headerName: "Sr No.",
      minWidth: 60,
    },
    {
      field: "creator_name",
      headerName: "Creator Name",
      minWidth: 220,
      sortable: false,
      filterable: false,
    },
    {
      field: "followers",
      headerName: "Followers",
      minWidth: 120,
    },
    {
      field: "state",
      headerName: "State",
      minWidth: 180,
    },
    {
      field: "contact",
      headerName: "Contact",
      minWidth: 180,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 110,
    },
  ];

  const rows = [
    { id: 1, creator_name: 'Johny Depp', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 2, creator_name: 'Cersei', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 3, creator_name: 'Jaime', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 4, creator_name: 'Arya', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 5, creator_name: 'Daenerys', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 6, creator_name: 'Bhautik', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 7, creator_name: 'Ferrara', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 8, creator_name: 'Rossini', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 9, creator_name: 'Harvey', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 10, creator_name: 'Daenerys', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 11, creator_name: 'Rahul', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 12, creator_name: 'Ferrara', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 13, creator_name: 'Rossini', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
    { id: 14, creator_name: 'Harvey', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  ];

  return (
    <>
      <div className="select-creators-by-sec">
        <ButtonGroup className='campaign-select-row' variant="contained" aria-label="outlined primary button group">
          <Button className='active'>Unfiltered</Button>
          <Button>Location</Button>
          <Button>Follower Range</Button>
          <Button>Exclusive Creators</Button>
          <Button>Hyper Local</Button>
        </ButtonGroup>
      </div>
      <div className="search-row mar-top-30">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={8}>
            <Stack spacing={2} sx={{ width: 630 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                size="small"
                onChange={onMutate}
                options={kycList.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label=""
                    placeholder="Search for creators"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="filled" sx={{ m: 1, maxWidth: 400 }}>
              <Select
                value={filter}
                onChange={handleChangeFilter}
                displayEmpty
                size='small'
                required
              >
                <MenuItem value={5}>View all creators</MenuItem>
                <MenuItem value={1}>KYC completed</MenuItem>
                <MenuItem value={2}>KYC Not completed</MenuItem>
                <MenuItem value={3}>Aadhar and Pan card verification</MenuItem>
                <MenuItem value={4}>Bank Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <div className="map-section">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            style={{width: '100%'}}
          >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : <></>}
      </div>
      <div className="mar-top-30">
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={3} textAlign="right" className="mar-top-30">
            <Button variant="contained">Select</Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default SelectCreatorsLocation;
