import TextField from '@mui/material/TextField'
import styled from 'styled-components'

export const StyledFields = styled(TextField)`
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`
