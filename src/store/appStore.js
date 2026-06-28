import { create } from 'zustand'

const saved = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}

export const useAppStore = create((set, get) => ({
  // Theme
  theme: saved('theme', 'dark'),
  setTheme: (theme) => { set({ theme }); localStorage.setItem('theme', JSON.stringify(theme)) },
  toggleTheme: () => { const next = get().theme === 'dark' ? 'light' : 'dark'; get().setTheme(next) },

  // Sound
  sound: saved('sound', true),
  setSound: (v) => { set({ sound: v }); localStorage.setItem('sound', JSON.stringify(v)) },

  // Station history
  stationHistory: saved('stationHistory', []),
  addStationHistory: (record) => {
    const updated = [record, ...get().stationHistory].slice(0, 100)
    set({ stationHistory: updated })
    localStorage.setItem('stationHistory', JSON.stringify(updated))
  },
  clearStationHistory: () => { set({ stationHistory: [] }); localStorage.removeItem('stationHistory') },

  // Favorite stations
  favoriteStations: saved('favoriteStations', []),
  toggleFavoriteStation: (id) => {
    const favs = get().favoriteStations
    const updated = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]
    set({ favoriteStations: updated })
    localStorage.setItem('favoriteStations', JSON.stringify(updated))
  },

  // Reviewed diseases
  reviewedDiseases: saved('reviewedDiseases', []),
  toggleReviewedDisease: (id) => {
    const revs = get().reviewedDiseases
    const updated = revs.includes(id) ? revs.filter(r => r !== id) : [...revs, id]
    set({ reviewedDiseases: updated })
    localStorage.setItem('reviewedDiseases', JSON.stringify(updated))
  },

  // Simulado history
  simuladoHistory: saved('simuladoHistory', []),
  addSimuladoHistory: (record) => {
    const updated = [record, ...get().simuladoHistory].slice(0, 50)
    set({ simuladoHistory: updated })
    localStorage.setItem('simuladoHistory', JSON.stringify(updated))
  },

  // Station search persistence
  stationSearch: saved('stationSearch', ''),
  setStationSearch: (q) => {
    set({ stationSearch: q })
    localStorage.setItem('stationSearch', JSON.stringify(q))
  },

  // Flashcard favorites
  favoriteFlashcards: saved('favoriteFlashcards', []),
  toggleFavoriteFlashcard: (id) => {
    const favs = get().favoriteFlashcards
    const updated = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]
    set({ favoriteFlashcards: updated })
    localStorage.setItem('favoriteFlashcards', JSON.stringify(updated))
  },

  // My flashcards (user-created)
  myFlashcards: saved('myFlashcards', []),
  addMyFlashcard: (card) => {
    const updated = [{ ...card, id: `my_${Date.now()}`, criador: 'user', taxaAcerto: 0 }, ...get().myFlashcards]
    set({ myFlashcards: updated })
    localStorage.setItem('myFlashcards', JSON.stringify(updated))
  },
  removeMyFlashcard: (id) => {
    const updated = get().myFlashcards.filter(c => c.id !== id)
    set({ myFlashcards: updated })
    localStorage.setItem('myFlashcards', JSON.stringify(updated))
  },
  updateMyFlashcard: (id, updates) => {
    const updated = get().myFlashcards.map(c => c.id === id ? { ...c, ...updates } : c)
    set({ myFlashcards: updated })
    localStorage.setItem('myFlashcards', JSON.stringify(updated))
  },

  // Flashcard study results
  flashcardResults: saved('flashcardResults', {}),
  recordFlashcardResult: (id, result) => {
    const results = { ...get().flashcardResults, [id]: result }
    set({ flashcardResults: results })
    localStorage.setItem('flashcardResults', JSON.stringify(results))
  },

  // Phrase favorites
  favoritePhrases: saved('favoritePhrases', []),
  toggleFavoritePhrase: (id) => {
    const favs = get().favoritePhrases
    const updated = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]
    set({ favoritePhrases: updated })
    localStorage.setItem('favoritePhrases', JSON.stringify(updated))
  },

  // Analytics
  analytics: saved('analytics', { totalSessions: 0, totalTime: 0 }),
  updateAnalytics: (data) => {
    const updated = { ...get().analytics, ...data }
    set({ analytics: updated })
    localStorage.setItem('analytics', JSON.stringify(updated))
  },

  // Tutorial
  tutorialCompleted: saved('tutorialCompleted', false),
  completeTutorial: () => { set({ tutorialCompleted: true }); localStorage.setItem('tutorialCompleted', 'true') },
  resetTutorial: () => { set({ tutorialCompleted: false }); localStorage.removeItem('tutorialCompleted') },

  // Streak & daily session
  studyStreak: saved('studyStreak', 0),
  lastStudyDate: saved('lastStudyDate', ''),
  dailySessionDate: saved('dailySessionDate', ''),
  dailySessionDone: saved('dailySessionDone', false),

  markStudyToday: () => {
    const today = new Date().toISOString().slice(0, 10)
    const { lastStudyDate, studyStreak } = get()
    if (lastStudyDate === today) return
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    const newStreak = lastStudyDate === yesterday ? studyStreak + 1 : 1
    set({ studyStreak: newStreak, lastStudyDate: today })
    localStorage.setItem('studyStreak', JSON.stringify(newStreak))
    localStorage.setItem('lastStudyDate', JSON.stringify(today))
  },

  completeDailySession: () => {
    const today = new Date().toISOString().slice(0, 10)
    set({ dailySessionDone: true, dailySessionDate: today })
    localStorage.setItem('dailySessionDone', 'true')
    localStorage.setItem('dailySessionDate', JSON.stringify(today))
    get().markStudyToday()
  },

  checkDailySession: () => {
    const today = new Date().toISOString().slice(0, 10)
    const { dailySessionDate } = get()
    if (dailySessionDate !== today) {
      set({ dailySessionDone: false, dailySessionDate: today })
      localStorage.setItem('dailySessionDone', 'false')
      localStorage.setItem('dailySessionDate', JSON.stringify(today))
    }
  },

  // WellBeing checklist (persisted, resets daily)
  wellBeingChecklist: saved('wellBeingChecklist', {}),
  wellBeingDate: saved('wellBeingDate', ''),
  toggleWellBeingItem: (idx) => {
    const today = new Date().toISOString().slice(0, 10)
    const { wellBeingDate, wellBeingChecklist } = get()
    const currentChecklist = wellBeingDate === today ? wellBeingChecklist : {}
    const updated = { ...currentChecklist, [idx]: !currentChecklist[idx] }
    set({ wellBeingChecklist: updated, wellBeingDate: today })
    localStorage.setItem('wellBeingChecklist', JSON.stringify(updated))
    localStorage.setItem('wellBeingDate', JSON.stringify(today))
  },
  checkWellBeingChecklist: () => {
    const today = new Date().toISOString().slice(0, 10)
    if (get().wellBeingDate !== today) {
      set({ wellBeingChecklist: {}, wellBeingDate: today })
      localStorage.setItem('wellBeingChecklist', JSON.stringify({}))
      localStorage.setItem('wellBeingDate', JSON.stringify(today))
    }
  },
}))
