import React from 'react'

export default function AlertsPanel({ alerts = [], onClear }) {
  return (
    <div>
      <h2 className="font-semibold mb-2">Active Alerts</h2>
      <ul className="space-y-2">
        {alerts.map(a => (
          <li key={a.id} className="p-2 border rounded">
            <div className="font-medium">{a.type}</div>
            <div className="text-sm">{a.text}</div>
          </li>
        ))}
      </ul>
      <button onClick={onClear} className="mt-4 w-full bg-red-500 text-white py-2 rounded">Clear</button>
    </div>
  )
}