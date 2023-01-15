import { Autocomplete, Chip, Grid, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CreatorsFiletrList } from '../../actions/creators';
import { states } from '../../utils/State';

function LocationTab() {

    const dispatch = useDispatch();

    const statelist = states.map(item => item.state);
    const [stateValue, setStateValue] = useState('');
    const [districts, setDistricts] = useState([]);
    const [districtValue, setDistrictValue] = useState('');

    useEffect(() => {
        if (stateValue !== '') {
            const findDis = states.find(item => item.state.includes(stateValue));
            setDistricts(findDis.districts)
        }
    }, [stateValue])

    useEffect(() => {
        if (stateValue !== '' && districtValue !== '') {
            const data = {
                locationArray: [stateValue, districtValue]
            }
            dispatch(CreatorsFiletrList(data))
                .then((res) => {
                    toast.success(res.message);
                    window.location.reload();
                })
                .catch((err) => {
                    toast.error(err);
                });
        }
    }, [stateValue, districtValue])

    const onMutate = (e, value) => {
        setStateValue(value)
    }

    const onSelectDis = (e, value) => {
        setDistrictValue(value);
    }

    return (
        <div className="mar-top-30">
            <Grid item xs={12}>
                <Stack spacing={2} sx={{ width: 630 }}>
                    <Autocomplete
                        // multiple
                        id="tags-filled"
                        options={statelist.map((option) => option)}
                        onChange={(e, value) => onMutate(e, value)}
                        className='multiple-chip'
                        freeSolo
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="filled"
                                placeholder="State"
                            />
                        )}
                    />
                </Stack>
            </Grid>

            <Grid item xs={12}>
                <Stack spacing={2} sx={{ width: 630 }}>
                    <Autocomplete
                        // multiple
                        id="tags-filled"
                        options={districts.map((option) => option)}
                        onChange={(e, value) => onSelectDis(e, value)}
                        className='multiple-chip'
                        freeSolo
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="filled"
                                placeholder="Districts"
                            />
                        )}
                    />
                </Stack>
            </Grid>
        </div>
    )
}

export default LocationTab