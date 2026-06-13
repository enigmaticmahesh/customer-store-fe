import ApiQueryProvider from './api/api-query-provider'
import AppRoutes from './AppRoutes'
import './App.css'

function App() {
  return (
      <ApiQueryProvider>
          <AppRoutes />
      </ApiQueryProvider>
  )
}

export default App
