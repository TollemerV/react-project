import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MySelect() {
  const [numTable, setnumTable] = React.useState('');

  const handleChange = (event) => {
    setnumTable(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">numTable</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={numTable}
          label="numTable"
          onChange={handleChange}
        >
          <MenuItem value={1}>table 1</MenuItem>
          <MenuItem value={2}>table 2</MenuItem>
          <MenuItem value={3}>table 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default MySelect;