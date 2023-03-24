import React from 'react'
import { faAdd, faCamera, faFileAlt, faHome, faInbox, faMessage, faPerson, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function 
() {
  return (
      <div className='sticky bottom-0 lg:hidden bg-white p-2 h-12 rounded-xl ml-2 mr-2 mb-2'>

          <ul className='flex items-center justify-between px-6 py-1'>
              <li>
              <FontAwesomeIcon icon={faHome} className="mr-5 text-gray-400" />
              </li>
              <li>
              <FontAwesomeIcon icon={faSearch} className="mr-5 text-gray-400" />
              </li>
              <li>
              <FontAwesomeIcon icon={faAdd} className="mr-5 text-gray-400" />
              </li>
              <li>
              <FontAwesomeIcon icon={faInbox} className="mr-5 text-gray-400" />
              </li>
              <li>
              <FontAwesomeIcon icon={faUser} className="mr-5 text-gray-400" />
              </li>
          </ul>
    </div>
  )
}
