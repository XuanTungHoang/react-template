import { Theme, Components, listClasses } from '@mui/material';
import { MenuListClassKey } from '@mui/material/MenuList';

export default function Paper(theme: Theme) {
  const Paper: Components = {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: theme.spacing(4),
          borderRadius: theme.spacing(4),
          boxShadow: theme.customShadows[1],
          [`& .${listClasses.root}`]: {
            paddingTop: 0,
            paddingBottom: 0,
          }
        },
      },
    }
  };

  return Paper;
}
