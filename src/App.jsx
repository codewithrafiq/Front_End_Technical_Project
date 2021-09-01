import React, { useState } from 'react'
import data from './data/Data.json'
import MUIDataTable from "mui-datatables";
import { columns } from './common_utils/columns'
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
// import Dlg from './Dlg'




const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [fromDate, setFromDate] = React.useState(new Date('2021-08-18T21:11:54'));
  const [toDate, setToDate] = React.useState(new Date('2021-08-18T21:11:54'));
  const [personName, setPersonName] = React.useState([]);
  const [personName2, setPersonName2] = React.useState([]);
  const [price, setPrice] = useState(0)
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleFomChange = (date) => {
    setFromDate(date);
  };
  const handleToChange = (date) => {
    setToDate(date);
  };

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const handleChange2 = (event) => {
    setPersonName2(event.target.value);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("personName---------->",personName);
    setOpen(false);
  };
  const handleClose4 = () => {
    console.log("personName---------->",personName);
    setOpen4(false);
  };
  
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  
  const handleClose2 = () => {
    setOpen2(false);
    console.log("personName---------->",personName);

  };
  const handleClickOpen3 = () => {
    setOpen2(false);
    setOpen3(true);
  };
  const handleClickOpen4 = () => {
    setOpen(false);
    setOpen4(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };




  const getSelectedRows = (curRowSelected, allRowsSelected) => {
    allRowsSelected.map(item => {
      let item_s = data[item["index"]]
      setPrice(price + item_s["price"])
    }
    )
  }

  let newData = [];
  data.map((item, index) => {
    newData.push({ sl: index + 1, ...item });
  });

  const options = {
    onRowsSelect: getSelectedRows,
    selectableRows: false,
    filterType: 'checkbox',
  };


  const handelDlgClick=()=>{
    setOpen(true);
  }
  

  return (
    <div>
      <MUIDataTable
        title={"Front End Technical Project"}
        data={newData}
        columns={columns}
        options={options}
      />
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        style={{ padding: "20px" }}
      >
        <Button style={{ margin: "10px" }} variant="contained" onClick={handleClickOpen2} color="primary">
          Book
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Return
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Return a Product"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  value={personName}
                  onChange={handleChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {newData.map((item, i) => (
                    <MenuItem key={i} value={item["name"]} style={getStyles(item["name"], personName, theme)}>
                      {
                        item["name"]
                      }
                    </MenuItem>
                  ))}
                </Select>
                <TextField id="standard-basic" type="number" label="User Mileage" />
              </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No
            </Button>
            <Button onClick={handleClickOpen4} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>


        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Book A Product"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  value={personName2}
                  onChange={handleChange2}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {newData.map((item, i) => (
                    <MenuItem key={i} value={item["name"]} style={getStyles(item["name"], personName, theme)}>
                      {
                        item["name"]
                      }
                    </MenuItem>
                  ))}
                </Select>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="outlined"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-from"
                    label="Form"
                    value={fromDate}
                    onChange={handleFomChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <KeyboardDatePicker
                    disableToolbar
                    variant="outlined"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-to"
                    label="To"
                    value={toDate}
                    onChange={handleToChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2} color="primary">
              No
            </Button>
            <Button onClick={handleClickOpen3} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>

          





          {/* Sub Dialog box */}

        <Dialog
          open={open3}
          onClose={handleClose3}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Return a Product"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">

                    <h2>Test Confirm Page</h2>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose3} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open4}
          onClose={handleClose4}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Return a Product"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">

                    <h2>Test Return Page</h2>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose4} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

          



      </Grid>
    </div>
  )
}

export default App
