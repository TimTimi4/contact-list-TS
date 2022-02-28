import Typography from '@mui/material/Typography'
import styled from 'styled-components'

export const Logo = styled(Typography)`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizes.fonts.maintitle};

`

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.sizes.fonts.subtitle};
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`
