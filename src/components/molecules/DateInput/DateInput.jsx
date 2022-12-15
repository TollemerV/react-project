import * as React from 'react';
import { Box } from '@mui/system';
import { InputLabel } from '@mui/material';
import DatePicker from "react-datepicker";
function DateInput(){
    const [value, setValue] = React.useState(new Date());
    return <Box>
                <InputLabel>DateTimePicker</InputLabel>
                <DatePicker selected={value} onChange={(date) => setValue(date)} />
            </Box>;
}
export default DateInput;