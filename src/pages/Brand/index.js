import React, { lazy, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { SparkFill, SparkOutline } from "../../svg";
import { useDispatch } from "react-redux";
import { BrandsListing } from "../../actions/brands";
import { toast } from "react-toastify";
import "./Brand.scss";

const Brand = () => {
  const [brandList, setBrandList] = useState([]);
  const [search, setSearched] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "Sr No.", width: 80 },
    {
      field: "brand_logo_url",
      headerName: "Brand Logo",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => <img src={params.value} alt="" />,
    },
    {
      field: "brand_name",
      headerName: "Brand Name",
      width: 150,
      renderCell: (params) => params.value ? params.value : '-'
    },
    {
      field: "poc_name",
      headerName: "POC Name",
      width: 180,
      renderCell: (params) => params.value ? params.value : '-'
    },
    {
      field: "poc_phone",
      headerName: "POC Contact",
      width: 160,
      renderCell: (params) => params.value ? params.value : '-'
    },
    {
      field: "categoriesArrayList",
      headerName: "Category",
      width: 110,
      renderCell: (params) => {
        const value = params.value
        return <Chip label={`${value.length > 0 ? value[0].name : 'Not Data'}`} variant="outlined" />
      }
    },
    {
      field: "status",
      headerName: "Live/ Paused",
      width: 110,
      renderCell: (params) =>
        params.value === 1 ? <SparkFill /> : <SparkOutline />,
    },
    {
      field: "action",
      headerName: "Action",
      width: 110,
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

          navigate(`/view-brand/${thisRow.id}`);
        };

        return (
          <IconButton aria-label="fingerprint" onClick={onClick}>
            <VisibilityIcon />
          </IconButton>
        );
      },
    },
  ];

  const getAllBrandListing = () => {
    dispatch(BrandsListing())
      .then((res) => {
        toast.success(res.message);
        setBrandList(res.data);
      })
      .catch((err) => {
        toast.success(err);
      });
  };

  useEffect(() => {
    getAllBrandListing();
  }, []);

  const handleRedirection = (e) => {
    navigate("/Add-brand");
  };

  const onMutate = (e, value) => {
    setSearched(value);
  };

  useEffect(() => {
    if (search !== null || search !== "" || search !== undefined) {
      if (search === null) {
        getAllBrandListing();
      } else {
        setBrandList(
          brandList.filter((column) => search.includes(column.brand_name))
        );
      }
    } else {
      getAllBrandListing();
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
          <Grid item xs={9}>
            <Stack spacing={2} sx={{ width: 630 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                size="small"
                options={brandList.map((option) => option.brand_name)}
                onChange={(e, value) => onMutate(e, value)}
                renderInput={(params) => (
                  <TextField {...params} label="Search for brand" />
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Button variant="contained" onClick={handleRedirection}>
              + Add New Brand
            </Button>
          </Grid>
        </Grid>
      </div>
      <Box sx={{ height: 632, width: "100%" }}>
        <DataGrid
          rows={brandList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </>
  );
};

export default Brand;
