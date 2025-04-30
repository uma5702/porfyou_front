import React from 'react'
import Navigation from '../components/Navigation'
import Profile from '../components/Profile'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4">Porfyou</h1>
            <Navigation />
          </div>
          <Profile />
        </aside>
        <main className="flex-1 bg-gray-50 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    )
  }
