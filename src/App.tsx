import {  useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {Header} from './components/Header'
import CircularUnderLoad from './components/Loader'
import NotFoundPage from './components/NotFoundPage'
import Contact from './pages/Contact'
import  Main  from './pages/Main'
import { RootState } from './store/reducers/index'
import { Theme } from './styles/theme'

const App = (): JSX.Element => {
  const { failed, loading } = useSelector((state: RootState) => state.contacts.getСontacts)
  return (
    <Theme>
      <Header logo="Contact List" title="Contacts" />
      {loading && <CircularUnderLoad /> }
      { failed && <NotFoundPage /> }
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Contact />} path="/contacts/:id" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App

