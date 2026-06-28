import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Sidebar } from './components/Common/Sidebar'
import { Header } from './components/Common/Header'
import { BottomNav } from './components/Common/BottomNav'
import { OnboardingModal } from './components/Tutorial/OnboardingModal'
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
import SimuladoMode from './pages/SimuladoMode'

function Layout() {
  const location = useLocation()
  const theme = useAppStore(s => s.theme)
  const tutorialCompleted = useAppStore(s => s.tutorialCompleted)
  const completeTutorial = useAppStore(s => s.completeTutorial)

  return (
    <div className={`${theme} flex h-screen bg-gray-950 text-gray-100 overflow-hidden`}>
      {!tutorialCompleted && <OnboardingModal onClose={completeTutorial} />}
      {/* Sidebar — visível apenas em md+ */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header pathname={location.pathname} />
        <main className="flex-1 overflow-hidden flex flex-col pb-16 md:pb-0">
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
            <Route path="/simulado" element={<SimuladoMode />} />
            <Route path="/configuracoes" element={<Settings />} />
          </Routes>
        </main>
      </div>

      {/* Bottom nav — visível apenas em mobile/tablet */}
      <BottomNav />
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
