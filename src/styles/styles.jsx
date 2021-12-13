import { makeStyles, withStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const useAlertStyle = makeStyles({
  wrap: {
    position: 'absolute',
    right: '0',
    padding: '0 10px',
    height: '30px',
    width: 'max-content',
  },
});

export const useNewsForm = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '0 0 30px',
    width: '100%',
    height: 'max-content',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10px',
  },
  inputs: {
    padding: '5px',
    width: '70%',
    minHeight: '40px',
    fontSize: '14px',
    lineHeight: '150%',
    border: 'none',
    outline: 'none',
  },
});

export const useTable = makeStyles({
  paper: {
    marginBottom: '10px',
  },
  row: {
    '& .cell': {
      padding: '0'
    },
  },
  delete: {
    fontSize: '12px',
    lineHeight: '18px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export const useButton = makeStyles({
  button: {
    padding: '10px 75px',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: 500,
    color: '#000',
    letterSpacing: '2px',
    borderRadius: '5px',
    backgroundColor: '#efefef',
    '&:hover': {
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.55)',
    },
  },
});

export const useLink = makeStyles({
  link: {
    padding: '10px 30px',
    alignItems: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '50px',
    color: '#000',
    letterSpacing: '2px',
    borderRadius: '5px',
    backgroundColor: '#efefef',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.55)',
    },
  },
  text: {
    margin: '0',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#000',
    backgroundColor: '#f00',
  },
});

export const useTypography = makeStyles(({
  h1: {
    margin: '0 0 50px',
    padding: '0',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '150%',
    letterSpacing: '1px',
  },
  h2: {
    margin: '0 0 30px',
    padding: '0',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '150%',
    letterSpacing: '1px',
    color: '#fff',
  },
  h3: {
    margin: '0',
    padding: '16px 24px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '1px',
    color: '#fff',
  },
  h5: {
    margin: '0 20px',
    padding: '0',
    width: '15%',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '150%',
    color: '#000',
    boxShadow: 'none',
  },
  pLink: {
    boxSizing: 'border-box',
    margin: '0',
    padding: '10px',
    width: '100%',
    height: 'max-content',
    fontSize: '14px',
    lineHeight: '150%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export const usePage = makeStyles(({
  homePage: {
    margin: '5% 5% 0',
    height: 'max-content',
    textAlign: 'center',
    boxShadow: 'none',
  },
  tablePage: {
    marginBottom: '25px',
  },
  updatingPage: {
    position: 'absolute',
    left: '5%',
    right: '5%',
    padding: '50px',
    boxSizing: 'border-box',
    height: 'max-content',
    backgroundColor: '#444',
    opacity: '0.98',
    zIndex: 1,
  },
}));
