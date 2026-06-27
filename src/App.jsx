import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Sidebar } from './components/Common/Sidebar'
import { Header } from './components/Common/Header'
import { useAppStore } from './store/appStore'

import Dashboard from './pages/Dashboard'
import References from './pages/References'
import Flashcards from './pages/Flashcards'
import CommunicationHub from './pages/CommunicationHub'
import Explorer from './pages/Explorer'
import StationPractice from './pages/StationPractice'
import Settings from './pages/Settings'
import WellBeing from './pages/WellBeing'
import ErrorRepository from './pages/ErrorRepository'
import DiagnosticAI from './pages/DiagnosticAI'

function Layout() {
  const location = useLocation()
  const theme = useAppStore(s => s.theme)

  return (
    <div className={`${theme} flex h-screen bg-gray-950 text-gray-100 overflow-hidden`}>
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header pathname={location.pathname} />
        <main className="flex-1 overflow-hidden flex flex-col">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/explorador" element={<Explorer />} />
            <Route path="/estacoes" element={<StationPractice />} />
            <Route path="/referencias" element={<References />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/comunicacao" element={<CommunicationHub />} />
            <Route path="/diagnostico" element={<DiagnosticAI />} />
            <Route path="/erros" element={<ErrorRepository />} />
            <Route path="/bem-estar" element={<WellBeing />} />
            <Route path="/configuracoes" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
