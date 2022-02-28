import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {ContactsTable} from '../../components/ContactsTable'
import {Container} from '../../components/Container'
import { getContacts } from '../../store/actions/contacts'
import { RootState } from '../../store/reducers/index'

type Contact = {
  name: string;
}

const Main = (): JSX.Element => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootState) => state.contacts.contacts)

  // if contacts array is empty, get contacts from server
  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(getContacts())
    }
  }, [contacts.length, dispatch])

  // function to group a contact by letter
  const groupeContacts = useCallback((arr) => {
    /*
    create object where key is main letter, value is grouped contacts.
    Use object because keys is unique and they cannot be duplicate
    */
    const group: any = {}
    arr.forEach((el: Contact) => {
      // get first letter of name
      const letter = el.name[0].toLowerCase()
      // assign contact-value to letter-key
      group[letter] = group[letter] ? group[letter].concat(el) : [el]
    })
    // create array of objects for easy rendering inside component
    return Object.keys(group).map((letter) => ({
      letter, list: group[letter].sort((a:Contact, b:Contact) => (a.name > b.name ? 1 : -1)),
    }))
  }, [])
    return (
    <Container>
      <ContactsTable groups={groupeContacts(contacts)} />
    </Container>
  )
}

export default Main
