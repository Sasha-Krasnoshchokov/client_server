import React, { useContext } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import { useTable, useTypography, StyledTableRow } from '../styles/styles';
import { CustomTableCell } from './CustomTableCell';

import { actions } from '../controllers/actions';
import { requests } from '../controllers/api';
import { StateContext} from '../controllers/StateContext';

/**   MAIN FUNCTION COMPONENT  */
export const CustomTable = ({ setUserAction, setUserPicksId }) => {
  const context = useContext(StateContext);

  const table = useTable();
  const typography = useTypography();

  const selectedItem = (event) => {
    console.log(event.target.id);
    setUserAction('update');
    setUserPicksId(event.target.id);
  };

  const deleteItem = (id) => {
    const result = window.confirm('Do you want delete news?');
    if (!result) {
      return;
    } else {
      requests(actions.remove(id), context.setNews);
    }
  };

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
          {(context.news).map((row, index) => (
            <Tooltip
              key={row.id}
              onClick={selectedItem}
              interactive
              placement="left"
              id={row.id}
              title={
                <div
                  className={table.delete}
                  onClick={() => deleteItem(row.id)}
                >
                  Delete
                </div>
              }
            >

              <StyledTableRow>
                <CustomTableCell id={row.id} info={index + 1} textStyle={typography.pLink} />
                <CustomTableCell id={row.id} info={row.title} textStyle={typography.pLink} />
                <CustomTableCell id={row.id} info={row.description} textStyle={typography.pLink} />
                <CustomTableCell id={row.id} info={row.posted} textStyle={typography.pLink} />
              </StyledTableRow>

            </Tooltip>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
};
