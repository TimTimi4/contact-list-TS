import Typography from '@mui/material/Typography'

import { FieldName } from './styled'

type Props = {
  title: string;
}

export const CardLine: React.FC<Props> = ({ title, children }) => (
  <Typography sx={{ mb: 1.5 }}>
    <FieldName>{title}: </FieldName>{children}
  </Typography>
)

