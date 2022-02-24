import CardContent from '@mui/material/CardContent'
import styled from 'styled-components'

import {Like} from '../Icons/Like'

export const Wrapper = styled(CardContent)`
  position: relative;
`

export const FieldName = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
`
export const StyledLikeIcon = styled(Like)<any>`
  color: ${({ theme, $favorite }) => ($favorite ? theme.colors.activeIcon : theme.colors.unactiveIcon)};
  position: absolute;
  top: 20px;
  right: 20px;
`
