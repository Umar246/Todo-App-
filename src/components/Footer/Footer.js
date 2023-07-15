import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear();
  return (
    <footer className='bg-warning text-white py-2'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-center m-0">&copy; {year}. All Right Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
