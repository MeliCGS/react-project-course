import React from 'react'

const titleHeader = "Latino Movies"
function Header({ titleHeader }) {
    return (
        <div className="container">
            <div  data-testid="headerClass" className="header">
                <h2>Latino Movies</h2>
            </div>
        </div>
    )
}

export default Header
