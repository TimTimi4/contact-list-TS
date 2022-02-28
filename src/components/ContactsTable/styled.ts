import { NavLink } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import styled from 'styled-components'

import {Like} from '../Icons/Like'

export const StyledLikeIcon = styled(Like)<any>`
  color: ${({ theme, $favorite }) => ($favorite ? theme.colors.activeIcon : theme.colors.unactiveIcon)};
  cursor: pointer;
`

export const StyledInfoIcon = styled(NavLink)`
  cursor: pointer;
`

export const StyledTable = styled(Table)`
  @media ${({ theme }) => theme.media.tablet} {
    min-width: 400px;
  }
  @media ${({ theme }) => theme.media.mobileL} {
    min-width: 200px;
  }
`

export const TableCellTablet = styled(TableCell)`
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`
export const TableCellMobileM = styled(TableCell)`
  @media ${({ theme }) => theme.media.mobileL} {
    display: none;
  }
`
