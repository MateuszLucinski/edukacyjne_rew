import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f4effa85',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));