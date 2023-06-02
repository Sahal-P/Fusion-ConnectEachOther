import './Admin.css'
import { Routes, Route} from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { TopBar } from './screens/global/TopBar'
import { Dashboard } from './screens/dashboard/Dashboard'
import { Team } from './screens/team/Team'
import { Invoice } from './screens/invoice/Invoice'
import { Contact } from './screens/contact/Contact'
import { Bar } from './screens/bar/Bar'
import { Form } from './screens/form/Form'
import { Pie } from './screens/pie/Pie'
import { FAQ } from './screens/FAQ/FAQ'
import { Geography } from './screens/geography/Geography'
import { Calendar } from './screens/calendar/Calendar'
import { SideBar } from './screens/global/SideBar'

export const Admin = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='Admin'>
            <SideBar/>
            <main className="admin_content">
              <TopBar/>
              <Routes>
                    <Route path='' element={<Dashboard/>}/>
                    <Route path='invoice' element={<Invoice/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='team' element={<Team/>}/>
                    <Route path='bar' element={<Bar/>}/>
                    <Route path='pie' element={<Pie/>}/>
                    <Route path='form' element={<Form/>}/>
                    <Route path='faq' element={<FAQ/>}/>
                    <Route path='geography' element={<Geography/>}/>
                    <Route path='calendar' element={<Calendar/>}/>
              </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}
