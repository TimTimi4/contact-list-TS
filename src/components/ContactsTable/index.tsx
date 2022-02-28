import { useDispatch, useSelector } from 'react-redux'

import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import { editContact } from '../../store/actions/contacts'
import { RootState } from '../../store/reducers/index'
import {Info} from '../Icons/Info'
import Head from './Head'
import {
  StyledInfoIcon,
  StyledLikeIcon,
  StyledTable,
  TableCellMobileM,
  TableCellTablet,
} from './styled'

type Props = { 
  groups: ContactGroup[];
}

type ContactGroup = {
  letter: string;
  list: Contact[];
}

type Contact = {
    id?: number,
    name: string,
    address: {
      country: string,
      city: string,
      streetC: string,
    },
    phone: string,
    company: {
      name: string,
      bs: string,
    },
    email: string,
    username: string,
    favorite?: boolean,
}

export const ContactsTable: React.FC<Props> = ({ groups }) => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootState) => state.contacts.contacts)

  const handleClickLikeIcon = (contact: Contact) => {
    dispatch(editContact(contacts.map((c: Contact) => {
      if (contact.id === c.id) return { ...contact, favorite: !contact.favorite }
      return c
    })))
  }

  return (
    <TableContainer component={Paper}>
      {groups.map((group: ContactGroup) => (
        <StyledTable aria-label="caption table" key={group.letter} sx={{ minWidth: 650 }}>
          <caption style={{ captionSide: 'top', fontSize: '20px' }}>{group.letter.toUpperCase()}</caption>
          <Head />
          <TableBody>
            {group.list.map((contact) => (
              <TableRow
                key={contact.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{contact.name}</TableCell>
                <TableCellMobileM align="left">{contact.phone}</TableCellMobileM>
                <TableCellTablet align="left">{contact.address.city}, {contact.address.country}</TableCellTablet>
                <TableCell align="center">
                  <StyledInfoIcon to={`/contacts/${contact.id}`}>
                    <Info />
                  </StyledInfoIcon>
                </TableCell>
                <TableCell align="center">
                  <StyledLikeIcon
                    $favorite={contact.favorite}
                    onClick={() => handleClickLikeIcon(contact)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      ))}
    </TableContainer>
  )
}

