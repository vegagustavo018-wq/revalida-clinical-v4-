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
  analytics: saved('analytics', { totalSessions: 0, totalTime: 0, bySpecialty: {} }),
  updateAnalytics: (data) => {
    const updated = { ...get().analytics, ...data }
    set({ analytics: updated })
    localStorage.setItem('analytics', JSON.stringify(updated))
  },

  // Tutorial
  tutorialCompleted: saved('tutorialCompleted', false),
  completeTutorial: () => { set({ tutorialCompleted: true }); localStorage.setItem('tutorialCompleted', 'true') },
  resetTutorial: () => { set({ tutorialCompleted: false }); localStorage.removeItem('tutorialCompleted') },
}))
