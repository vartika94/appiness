import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(id, name, age, gender, email,phoneNo) {
  return { id, name, age, gender, email,phoneNo };
}

const rows = [
  createData(1,'test1', 11, 'male', 'test1@gmail.com',"9415346313"),
  createData(2,'test2', 12, 'male', 'test2@gmail.com',"9415346313"),
  createData(3,'test3', 13, 'male', 'test3@gmail.com',"9415346313"),
  createData(4,'test4', 14, 'male', 'test4@gmail.com',"9415346313"),
  createData(5,'test5', 15, 'male', 'test5@gmail.com',"9415346313"),
  createData(6,'test6', 16, 'male', 'test6@gmail.com',"9415346313"),
];

export default function Dashboard() {
  const classes = useStyles();

  function handleClick(){
    window.location.href = '/'
  }

  return (
    <div>
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Button variant="contained" color="primary" onClick={handleClick}>Logout</Button>
    </div>
  );
}