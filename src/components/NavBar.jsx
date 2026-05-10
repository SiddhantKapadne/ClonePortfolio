import { NavLink, useLocation } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `transition-colors duration-200 ${
    isActive ? 'font-medium text-[#FF4F00]' : 'font-normal text-[#374151] hover:text-[#1f2937] active:text-[#FF4F00]'
  }`

function NavBar({ onResumeClick }) {
  const { pathname } = useLocation()
  const workIsActive = pathname === '/' || pathname.startsWith('/work/')

  return (
    <header className="border-b border-line py-5">
      <nav className="flex items-center justify-center md:justify-end">
        <ul className="flex items-center gap-5 text-base font-normal text-[#374151] md:gap-7">
          <li>
            <NavLink to="/" end className={linkClass({ isActive: workIsActive })}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/art" className={linkClass}>
              Art
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault()
                onResumeClick?.()
              }}
              className="transition-colors duration-200 font-normal text-[#374151] hover:text-[#1f2937] active:text-[#FF4F00]"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
