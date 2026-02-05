import { createContext, useState, useEffect } from "react"
import { doctors } from "../assets/assets"

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const currencySymbol = '$'

  // 🗓️ Appointments State
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('appointments')
    return saved ? JSON.parse(saved) : []
  })

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])

  const value = {
    doctors,
    currencySymbol,
    appointments,
    setAppointments,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
