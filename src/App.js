import React from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Login from './Login';
import Dashboard from './table';



function App() {
  return (
    <BrowserRouter>
    <div>

    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
   
    </div>
    </BrowserRouter>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//       </header>
//     </div>
//   );
// }

// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

// function App() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="Standard" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     </form>
//   );
// }

