import React from 'react'

export default function Login({ user, onLogin }) {
  function handleAuth() {
    const demoUser = { name: 'Riya', role: 'Operator' }
    onLogin(demoUser)
  }

  return (
    <div>
      {user ? (
        <div className="px-3 py-1 bg-white text-slate-800 rounded">{user.name}</div>
      ) : (
        <button onClick={handleAuth} className="bg-sky-600 text-white px-3 py-1 rounded">Log in</button>
      )}
    </div>
  )
}