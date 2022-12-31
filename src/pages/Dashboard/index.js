import React, { useEffect, useState } from 'react';
import { Box, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CreatorsListing } from '../../actions/creators';


const Dashboard = () => {

	const dispatch = useDispatch();
	const [creatorsList, setCreatorsList] = useState([])
	
	const columns = [
		{
			field: "id",
			headerName: "Sr No.",
			minWidth: 60,
		},
		{
			field: "name",
			headerName: "Creator Name",
			minWidth: 220,
			sortable: false,
			filterable: false,
			renderCell: (params) => params.value ? params.value : '-'
		},
		{
			field: "campaign_followers_range",
			headerName: "Followers",
			minWidth: 120,
			renderCell: (params) => params.value ? params.value : '-'
		},
		{
			field: "address",
			headerName: "State",
			minWidth: 180,
			renderCell: (params) => params.value ? params.value : '-'
		},
		{
			field: "phone_number",
			headerName: "Contact",
			minWidth: 180,
			renderCell: (params) => params.value ? params.value : '-'
		},
		{
			field: "categoriesArrayList",
			headerName: "Category",
			minWidth: 110,
			// categoriesArrayList,
			renderCell: (params) => {
				const value = params.value
				// console.log("value", value.length > 0 ? value[0].name : 'Not Data')
				return <Chip label={`${value.length > 0 ? value[0].name : 'Not Data'}`} variant="outlined" />
			}
		},
	];

	const getAllCreatorsListing = () => {
		dispatch(CreatorsListing())
			.then((res) => {
				console.log("response -----> ", res.data)
				toast.success(res.message);
				setCreatorsList(res.data);
			})
			.catch((err) => {
				toast.success(err);
			});
	};

	useEffect(() => {
		getAllCreatorsListing()
	}, [])


	return (
		<>
			<Box sx={{ height: 632, width: "auto" }}>
				<DataGrid
					rows={creatorsList}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[5]}
					// checkboxSelection
				/>
			</Box>
		</>
	);
}

export default Dashboard;