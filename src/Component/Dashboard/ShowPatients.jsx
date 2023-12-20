import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserService from "../Service/UserService";
import Typography from '@mui/material/Typography'

function ShowPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatientDetail();
  }, []);

  const getPatientDetail = async () => {
    try {
      const response = await UserService.getAllPatients();
      if (response.data.code === "200") {
        setPatients(response.data.payload);
        console.log(patients)
      }
    } catch (error) {
      alert("Error while fetching patients data!!")
    }
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgb(25, 118, 210)",
      fontSize: 16,
      fontWeight: "bold",
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Typography variant="h3" color="initial">Patients Detail</Typography>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="center" >Patient ID</StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Age</StyledTableCell>
                <StyledTableCell align="center">Gender</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">City</StyledTableCell>
                <StyledTableCell align="center">State</StyledTableCell>
                <StyledTableCell align="center">Pincode</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => (
                <StyledTableRow key={patient.id}>
                  <StyledTableCell component="th" scope="row" align="center" style={{ fontWeight: 'bolder' }}>
                    {patient.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{patient.firstName}</StyledTableCell>
                  <StyledTableCell align="center">{patient.lastName}</StyledTableCell>
                  <StyledTableCell align="center">{patient.age}</StyledTableCell>
                  <StyledTableCell align="center">{patient.gender}</StyledTableCell>
                  <StyledTableCell align="center">{patient.email}</StyledTableCell>
                  <StyledTableCell align="center">{patient.city}</StyledTableCell>
                  <StyledTableCell align="center">{patient.state}</StyledTableCell>
                  <StyledTableCell align="center">{patient.pinCode}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ShowPatients;
