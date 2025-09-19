import React, { useState } from 'react'

export default function DirectionsPanel({ setDirections }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  async function showDirections() {
    if (!window.google) return alert('Google Maps not loaded')
    const service = new window.google.maps.DirectionsService()
    const result = await service.route({
      origin: from,
      destination: to,
      travelMode: window.google.maps.TravelMode.DRIVING
    })
    setDirections(result)
  }

  return (
    <div className="flex items-center gap-2">
      <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" className="px-2 py-1 rounded" />
      <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" className="px-2 py-1 rounded" />
      <button onClick={showDirections} className="px-3 py-1 bg-emerald-600 text-white rounded">Directions</button>
    </div>
  )
}