import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Paper from '@material-ui/core/Paper';

import { useNewsForm, useTypography } from '../styles/styles';

export const NewsFormField = ({ title, value, callback }) => {
  const newsForm = useNewsForm();
  const typography = useTypography();

  return (
    <Paper className={newsForm.paper} component="div">

      <Paper className={typography.h5} component="label">
        {title}
      </Paper>

      <TextareaAutosize
        className={newsForm.inputs}
        onChange={(event) => callback(event.target.value)}
        maxRows={4}
        aria-label="maximum height"
        placeholder="Enter information"
        value={value}
      />

    </Paper>
  );
}
