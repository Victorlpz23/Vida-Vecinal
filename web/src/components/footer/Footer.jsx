import React, { useContext } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';

function Footer() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div class="sticky bottom-0 mb-2 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 lg:hidden md:hidden">
          <div class="grid h-full max-w-lg grid-cols-3 mx-auto border-b">

            {/* My Community  */}

            <Link to={`/communities/${id}`} class="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
              <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange dark:group-hover:text-blue-500">Home</span>
            </Link>

            {/* Calendar */}

            <Link class="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg aria-hidden="true" class="w-6 h-6 mb-1 text-gray-500 group-hover:text-orange dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange dark:group-hover:text-blue-500">Events</span>
            </Link>

            {/* Profile */}

            <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600">
              <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="gray-500"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange dark:group-hover:text-blue-500">Settings</span>
            </button>
          </div>
        </div>



        {/* Footer Info  */}

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Vecinity App™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 lg:mt-0">
          <li>
            <p href="#" className="mr-4 hover:underline md:mr-6">About</p>
          </li>
          <li>
            <p href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</p>
          </li>
          <li>
            <p href="#" className="mr-4 hover:underline md:mr-6">Licensing</p>
          </li>
          <li>
            <p href="#" className="hover:underline">Contact</p>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;