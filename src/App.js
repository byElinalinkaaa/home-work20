import { Provider } from "react-redux"
import { Navigate, Route, Routes } from "react-router"
import AuthPage from "./page/auth/AuthPage"
import TodoPage from "./page/todo/TodoPage"
import { store } from "./store"
import "./App.css"

function AppContent() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App
