import React from 'react'
import "./Header.scss"
import { Menu as MenuIcon, Person} from '@material-ui/icons'

export default function Header() {
  return (
    <div className="header">
      <div className="headerItems">
          <div className="mainMenu">
            <MenuIcon />
            <span>
              Menu
            </span>
          </div>
        
          <div className="title">
          <span>Journalr</span>
          </div>
        

        
          <div className="userMenu">
          <Person />
          </div>
        
        
      </div>
    </div>
  )
}
