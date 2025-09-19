import React, { useRef, useEffect } from 'react'

export default function MapView({ alerts = [], directions }) {
  const ref = useRef(null)
  const directionsRendererRef = useRef(null)

  useEffect(() => {
    if (!window.google) {
      ref.current.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#666">Map placeholder — add VITE_GOOGLE_MAPS_API_KEY to enable Google Maps</div>'
      return
    }

    const map = new window.google.maps.Map(ref.current, {
      center: { lat: 28.6139, lng: 77.2090 },
      zoom: 12
    })

    alerts.forEach(a => {
      new window.google.maps.Marker({
        position: { lat: 28.61 + Math.random() * 0.05, lng: 77.20 + Math.random() * 0.05 },
        map,
        title: a.type
      })
    })

    if (directions) {
      if (!directionsRendererRef.current) {
        directionsRendererRef.current = new window.google.maps.DirectionsRenderer()
      }
      directionsRendererRef.current.setDirections(directions)
      directionsRendererRef.current.setMap(map)
    }
  }, [alerts, directions])

  return <div ref={ref} className="h-full" style={{ minHeight: 600 }} />
}