import { Theme, Components } from '@mui/material';
import { accordionClasses } from '@mui/material/Accordion';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';

export default function Accordion(theme: Theme) {
  const Accordion: Components = {
    MuiAccordion: {
      styleOverrides: {
        root: {
          [`&.${accordionClasses.expanded}`]: {
            margin: 0,
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          [`& .${accordionSummaryClasses.content}.${accordionSummaryClasses.expanded}`]: {
            margin: theme.spacing(3, 0)
          },
          [`&.${accordionSummaryClasses.focusVisible}`]: {
            backgroundColor: 'transparent'
          },
        }
      }
    },
  };

  return Accordion;
}
