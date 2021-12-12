import { Alert, AlertTitle } from '@material-ui/lab';

import { useAlertStyle } from '../styles/styles';

export const AlertMessage = ({ trySubmit, serverResponse }) => {
  const alert = useAlertStyle();

  return (
    <>
      {
        trySubmit && serverResponse
          &&
            (
              <Alert className={alert.wrap} severity="success">
                <AlertTitle>Success publising</AlertTitle>
              </Alert>
            )
      }
      {
        trySubmit && !serverResponse
            &&
          (
            <Alert className={alert.wrap} severity="error">
              <AlertTitle>Error</AlertTitle>
            </Alert>
          )
      }
    </>
  );
}
