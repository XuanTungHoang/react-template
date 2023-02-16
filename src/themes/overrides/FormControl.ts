import { Theme, Components, formControlClasses, formHelperTextClasses } from '@mui/material';

export default function FormControl(theme: Theme) {
  const FormControl: Components = {
    MuiFormControl: {
      styleOverrides: {
        root: {
          [`& .${formHelperTextClasses.error}`]: {
            marginLeft: 0,
          }
        },
      },
    },
  };

  return FormControl;
}
