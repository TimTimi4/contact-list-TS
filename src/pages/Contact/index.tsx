import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import {ContactCard} from '../../components/ContactCard'
import {Container} from '../../components/Container'
import { RootState } from '../../store/reducers'

const Contact = (): JSX.Element => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const { id } = useParams()
  const contact = contacts.contacts.find((p: any) => p.id === Number(id))

  if (!contact) return <Navigate to="/404" />
  return (
    <Container>
      <ContactCard contact={contact} />
    </Container>
  )
}

export default Contact
