import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Modal,
  Typography,
  TextareaAutosize
} from "@mui/material";
import Stack from '@mui/material/Stack';
import { ActionArrow, RightStatus, SearchIcon, SparkFill, SparkOutline } from "../../svg";
import { useNavigate, useParams } from "react-router-dom";
import { PaymentListing, paymentTransactionDetails, paymentUpdate } from "../../actions/Payment";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BacketDetails = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { backetId } = useParams();

  const [paymentList, setPaymentList] = useState([]);
  const [search, setSearched] = useState("");

  useEffect(() => {
    getPaymentList();
  }, [])

  const getPaymentList = () => {
    dispatch(paymentTransactionDetails(`?id=${backetId}`))
      .then((res) => {
        if (res.code === 200) {
          setPaymentList(res.data)
          toast.success(res.message);
        } else {
          toast.error("error");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  const onMutate = (e, value) => {
    setSearched(value);
  };

  useEffect(() => {
    if (search !== null || search !== "" || search !== undefined) {
      if (search === null) {
        getPaymentList();
      } else {
        setPaymentList(paymentList.filter((column) => search.includes(column.name)));
      }
    }
  }, [search]);


  const columns = [
    {
      field: "bucket_id",
      headerName: "Sr No.",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Creator Name",
      flex: 1.5,
    },
    {
      field: "brand_logo_url",
      headerName: "Brand Logo",
      flex: 1.5,
      renderCell: (params) => <img src={params.value} alt="" />,
      sortable: false,
      filterable: false,
    },
    {
      field: "campaign_title",
      headerName: "Campaign Title",
      flex: 1.5,
    },
    {
        field: "submission_date",
        headerName: "Submitted On",
        flex: 1.5,
        renderCell : (params) => {
            const startT = new Date(params.value * 1000).toISOString();
            const exportDate = moment(startT).format('DD/MM/YYYY')
            return exportDate
            }
      },
    {
      field: "amount",
      headerName: "Price Range",
      flex: 0.9,
    }
  ];

  return (
    <>
      <div className="search-row">
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
                size='small'
                options={paymentList.map((option) => option.name)}
                onChange={(e, value) => onMutate(e, value)}
                renderInput={(params) => <TextField
                  {...params}
                  label=""
                  placeholder="Search for campaign"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
                }
              />
            </Stack>
          </Grid>
          <Stack direction="row" justifyContent="flex-end" spacing={2} className="filter-row">
          
          <Button variant="contained" className="filter-btn" >Export Excel</Button>
          <Button variant="contained" className="filter-btn active" >Upload Excel</Button>
       
    </Stack>
        </Grid>
      </div>
      <Box sx={{ height: 632, width: "auto" }}>
        <DataGrid
          rows={paymentList}
          columns={columns}
          getRowId={(row) => row?.bucket_id}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </>
  );
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];


export default BacketDetails;
