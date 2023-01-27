import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Grid,
  IconButton,
  TextField,
  MenuItem,
  Select,
  FilledInput,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Stack from '@mui/material/Stack';
import { ActionArrow, KycStatus, SearchIcon } from "../../svg";
import { KycFilterListing, KycListing } from "../../actions/kyc";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Kyc = () => {
  const dispatch = useDispatch();
  const [kycList, setKycList] = useState([]);
  const [/* AllkycList, */ setAllKycList] = useState([]);
  // const [filter, /* setFilter */] = useState();
  const [search, setSearched] = useState("");
  const navigate = useNavigate()

  const getAllKycListing = () => {
    dispatch(KycListing())
      .then((res) => {
        console.log("response -----> ", res.data);
        toast.success(res.message);
        setKycList(res.data);
        setAllKycList(res.data);
      })
      .catch((err) => {
        toast.success(err);
      });
  };

  useEffect(() => {
    getAllKycListing();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "Sr No.",
      flex: 0.8,
      renderCell: (params) => (params.id ? params.id : "-"),
    },
    {
      field: "creator_name",
      headerName: "Creator Name",
      flex: 1.6,
      sortable: false,
      filterable: false,
      renderCell: (params) => (params?.row?.name ? params?.row?.name : "-"),
    },
    {
      field: "followers",
      headerName: "Followers",
      flex: 0.8,
      renderCell: (params) => params?.row?.campaign_followers_range ? params?.row?.campaign_followers_range : "-",
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
      renderCell: (params) => params?.row?.address ? params?.row?.address : "-",
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
      renderCell: (params) =>
        params?.row?.phone_number ? params?.row?.phone_number : "-",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1.3,
    },
    {
      field: "kyc_status",
      headerName: "KYC",
      flex: 0.5,
      renderCell: (params) => {
        if (params.value === null || params.value === "0" || params.value === 0 ) {
          return (
            <Stack direction="row" spacing={2}>
              <KycStatus svgFill="red" />
            </Stack>
          );
        } else {
          return (
            <Stack direction="row" spacing={2}>
              <KycStatus svgFill="green" />
            </Stack>
          );
        }
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.6,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();
          const api = params.api;
          const thisRow = {};
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          navigate(`/view-kyc/${thisRow.id}`);
        };
        return (
          <IconButton aria-label="fingerprint" onClick={(e) => onClick(e)}>
            <ActionArrow />
          </IconButton>
        );
      },
    },
  ];

  const handleChangeFilter = (e) => {
    if (e.target.value == '5') {
      getAllKycListing();
    } else {
      dispatch(KycFilterListing(`?kyc_filter=${e.target.value}`))
        .then((res) => {
          setKycList(res.data);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  const onMutate = (e, value) => {
    setSearched(value);
  };

  useEffect(() => {
    if (search !== null || search !== "" || search !== undefined) {
      if (search === null) {
        getAllKycListing();
      } else {
        setKycList(kycList.filter((column) => search.includes(column.name)));
      }
    }
  }, [search]);

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
                size="small"
                onChange={onMutate}
                options={kycList.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search for creators"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          {" "}
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                  />
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="filled" sx={{ m: 1, maxWidth: 400 }}>
              <Select
                // value={filter}
                onChange={handleChangeFilter}
                displayEmpty
                size='small'
                required
              >
                <MenuItem value={1}>View all</MenuItem>
                <MenuItem value={2}>KYC completed</MenuItem>
                <MenuItem value={3}>KYC Incomplete</MenuItem>
                <MenuItem value={4}>Documents Verified</MenuItem>
                <MenuItem value={5}>Document Verification Pending</MenuItem>
                <MenuItem value={6}>Bank Details Verified</MenuItem>
                <MenuItem value={7}>Bank Details Verification Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <Box sx={{ height: 632, width: "auto" }}>
        <DataGrid
          rows={kycList}
          columns={columns}
          getRowId={(row) => row.id}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </Box>
    </>
  );
};


export default Kyc;
