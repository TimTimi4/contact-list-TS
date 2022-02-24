import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

import { editContact } from '../../store/actions/contacts'
import { RootState } from '../../store/reducers/index'
import { StyledFields } from './styled'

type Props = {
  contact: any;
}

export const ModalForm: React.FC<Props> = ({ contact }) => {
  const dispatch = useDispatch()
  interface IForm{
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
  }

  interface IFormObj{
    address: {
      country: string,
      city: string,
      streetC: string,
    },
    company: {
      name: string,
      bs: string,
    },
  }

  const [open, setOpen] = React.useState<boolean>(false)
  const [form, setForm] = React.useState<IForm>({
    name: '',
    address: {
      country: '',
      city: '',
      streetC: '',
    },
    phone: '',
    company: {
      name: '',
      bs: '',
    },
    email: '',
    username: '',
  })
  const contacts = useSelector((state: RootState) => state.contacts.contacts)

  const handleClickOpen = () => {
    setOpen(true)
    setForm(contact)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleChangeObjectField = (e: any, field: keyof IFormObj) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [field]: {
        ...form[field],
        [name]: value,
      },
    })
  }

  const saveChanges = () => {
    handleClose()
    dispatch(editContact(contacts.map((c: any) => {
      if (contact.id === c.id) return form
      return c
    })))
  }

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Edit Contact
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Contact Info</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            margin="dense"
            name="name"
            onChange={handleChange}
            type="text"
            value={form.name}
            variant="standard"
          />
          <StyledFields
            label="Country"
            margin="dense"
            name="country"
            onChange={(e) => handleChangeObjectField(e, 'address')}
            sx={{ width: '30%', marginRight: '10px' }}
            type="text"
            value={form.address.country}
            variant="standard"
          />
          <StyledFields
            label="City"
            margin="dense"
            name="city"
            onChange={(e) => handleChangeObjectField(e, 'address')}
            sx={{ width: '30%' }}
            type="text"
            value={form.address.city}
            variant="standard"
          />
          <StyledFields
            label="Street"
            margin="dense"
            name="streetC"
            onChange={(e) => handleChangeObjectField(e, 'address')}
            sx={{ width: '36%', marginLeft: '10px' }}
            type="text"
            value={form.address.streetC}
            variant="standard"
          />
          <TextField
            fullWidth
            label="Phone"
            margin="dense"
            name="phone"
            onChange={handleChange}
            type="text"
            value={form.phone}
            variant="standard"
          />
          <StyledFields
            label="Company Name"
            margin="dense"
            name="name"
            onChange={(e) => handleChangeObjectField(e, 'company')}
            sx={{ width: '40%', marginRight: '10px' }}
            type="text"
            value={form.company.name}
            variant="standard"
          />
          <StyledFields
            label="Description"
            margin="dense"
            name="bs"
            onChange={(e) => handleChangeObjectField(e, 'company')}
            sx={{ width: '58%' }}
            type="text"
            value={form.company.bs}
            variant="standard"
          />
          <TextField
            fullWidth
            label="e-mail"
            margin="dense"
            name="email"
            onChange={handleChange}
            type="email"
            value={form.email}
            variant="standard"
          />
          <TextField
            fullWidth
            label="User Name"
            margin="dense"
            name="username"
            onChange={handleChange}
            type="text"
            value={form.username}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveChanges} type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

