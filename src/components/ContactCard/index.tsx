import * as React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'

import { ModalForm } from '../ModalForm'
import  { CardLine }  from './Item'
import {
  StyledLikeIcon,
  Wrapper,
} from './styled'

type Props = {
  contact: {
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
    favorite: boolean,
  }
}

export const ContactCard: React.FC<Props> = ({ contact }) => (
  <Card sx={{ minWidth: 275 }}>
    <Wrapper>
      <CardLine title="Name">{contact.name}</CardLine>
      <CardLine title="Address">
        {contact.address.city}, {contact.address.country}, {contact.address.streetC}
      </CardLine>
      <CardLine title="Phone">{contact.phone}</CardLine>
      <CardLine title="Company">{contact.company.name}, {contact.company.bs}</CardLine>
      <CardLine title="E-mail">{contact.email}</CardLine>
      <CardLine title="Username">{contact.username}</CardLine>
      <StyledLikeIcon $favorite={contact.favorite} />
    </Wrapper>
    <CardActions>
      <ModalForm contact={contact} />
    </CardActions>
  </Card>
)

