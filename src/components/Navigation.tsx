import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-2">
      <Link to="/portfolio" className="hover:text-blue-400">나의 포트폴리오</Link>
    </nav>
  )
}
