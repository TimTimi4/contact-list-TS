import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import { Logo, Title } from './styled'

type Props = {
  logo: string,
  title: string,
}

export const Header: React.FC<Props> = ({ logo, title }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Logo sx={{ flexGrow: 0.7 }} variant="h4">
          {logo}
        </Logo>
        <Title sx={{ flexGrow: 1 }} variant="h5">
          {title}
        </Title>
      </Toolbar>
    </AppBar>
  </Box>
)

