import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import { useTable, useTypography, StyledTableRow } from '../styles/styles';
import { CustomTableCell } from './CustomTableCell';

export const CustomTable = ({ array, setUserAction }) => {
  const table = useTable();
  const typography = useTypography();

  const [toDisplay, setToDisplay] = useState(array);

  useEffect(() => {
    setToDisplay(array);
  }, [array]);

  const userTryDelete = (id) => {
    const result = window.confirm('Do you want delete news?');
    if (!result) {
      return;
    } else {
    }
  };

  if(!toDisplay) {
    return <></>;
  }

  return (
    <TableContainer component={Paper} className={table.paper}>
      <Table aria-label="customized table">

        <TableHead>
          <TableRow>
            <CustomTableCell info='№' textStyle={typography.h3} />
            <CustomTableCell info='News title' textStyle={typography.h3} />
            <CustomTableCell info='News description' textStyle={typography.h3} />
            <CustomTableCell info='Posted' textStyle={typography.h3} />
          </TableRow>
        </TableHead>

        <TableBody>
          {array.map((row, index) => (
            <Tooltip
              key={row.id}
              onClick={(event) => {
                setUserAction('update');
                console.log(event.currentTarget.id);
              }}
              interactive
              placement="left"
              title={
                <div
                  className={table.delete}
                  onClick={() => userTryDelete(row.id)}
                >
                  Delete
                </div>
              }
            >

              <StyledTableRow id={row.id}>
                <CustomTableCell info={index + 1} textStyle={typography.pLink} />
                <CustomTableCell info={row.title} textStyle={typography.pLink} />
                <CustomTableCell info={row.description} textStyle={typography.pLink} />
                <CustomTableCell info={row.posted} textStyle={typography.pLink} />
              </StyledTableRow>

            </Tooltip>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
};
