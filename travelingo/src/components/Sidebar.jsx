import React from 'react'

const Sidebar = () => {
  return (
    <aside className='fixed top-0 left-0 w-64 h-screen p-5'>
        <div>
            <h1>Travelingo</h1>
        </div>

        <ul>
            <li>Dashboard</li>
            <li>Ticket</li>
            <li>Favourite</li>
            <li>Message</li>
            <li>Transaction</li>
            <li>Settings</li>
        </ul>
    </aside>
  )
}

export default Sidebar