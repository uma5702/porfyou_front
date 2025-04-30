import React from 'react'

export default function Profile() {
    const userEmail = localStorage.getItem('email') || 'Guest'
  
    return (
      <div>
        <div className="mb-2">{userEmail}</div>
        <button
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            window.location.href = '/'
          }}
          className="text-sm text-red-400"
        >
          로그아웃
        </button>
      </div>
    )
  }
  