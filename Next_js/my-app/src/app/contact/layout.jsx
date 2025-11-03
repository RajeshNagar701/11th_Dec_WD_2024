import React from 'react'

function contact_layout({children}) {
  return (
    <div className='row'>
        <div className='col-md-3 bg-danger'>
            <ol>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
            </ol>
        </div>
        <div className='col-md-9 bg-secondary'>
            {children}
        </div>
    </div>
  )
}

export default contact_layout