import React from 'react'

function layout({children}) {
  return (
    <div className='row'>
        <div className='col-md-3 bg-danger'>
            <ol>
                <li>About</li>
                <li>About</li>
                <li>About</li>
                <li>About</li>
                <li>About</li>
            </ol>
        </div>
        <div className='col-md-9 bg-secondary'>
            {children}
        </div>
    </div>
  )
}

export default layout