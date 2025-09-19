import React, { useState } from 'react'
import MapView from './components/MapView'
import Login from './components/Login'
import AlertsPanel from './components/AlertsPanel'
import DirectionsPanel from './components/DirectionsPanel'

export default function App() {
  const [user, setUser] = useState(null)
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'Road Closure', text: 'Accident on NH-48 near Exit 12' },
    { id: 2, type: 'Road Block', text: 'Maintenance on 5th Avenue between A & B' }
  ])

  const [directions, setDirections] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Smart Traffic Hub</h1>
        <div className="flex items-center gap-4">
          <DirectionsPanel setDirections={setDirections} />
          <Login user={user} onLogin={setUser} />
        </div>
      </header>

      <main className="flex-1 flex">
        <section className="w-3/4">
          <MapView alerts={alerts} directions={directions} />
        </section>
        <aside className="w-1/4 border-l p-4">
          <AlertsPanel alerts={alerts} onClear={() => setAlerts([])} />
        </aside>
      </main>

      <footer className="text-center p-2 text-sm text-slate-600">© Smart Traffic Hub</footer>
    </div>
  )
}