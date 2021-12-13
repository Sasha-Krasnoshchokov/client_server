import React from 'react';

import Typography from '@material-ui/core/Typography';

import { StyledTableCell } from '../styles/styles';

/**   MAIN FUNCTION COMPONENT  */
export const CustomTableCell = ({ id, info, textStyle }) => {

  return (
    <StyledTableCell
      component="th"
      style={{ padding: '0'}}
      scope="row"
      align="center"
    >

      <Typography
        className={textStyle}
        variant="body2"
        id={id}
      >
        {info}
      </Typography>

    </StyledTableCell>
  );
}
