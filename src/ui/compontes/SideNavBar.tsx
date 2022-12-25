import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { AuthStateEname } from "../../dom/repistery/AuthRepistory";
import { useStoreon } from "../hooks/useStoreon";


import './SideNavBar.scss'

type Props = {

  children?: React.ReactNode;
}




export const SideNavBar = ({ children }: Props) => {

  const { pathname } = useLocation();
  const { authState } = useStoreon('counter')
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <button className={`taggle-menu ${isMenuOpen ? "open" : "close"}`} onClick={() => { setMenuOpen(!isMenuOpen) }} ></button>
      <aside className={`sideBar ${isMenuOpen ? "open" : "close"}`}>

        <h3 >القـائـمة</h3>
        <nav className="menu">
          <ul>
            <li><Link to='/' className={`menu-item ${'/' === pathname ? "is-active" : ""}`} onClick={() => { setMenuOpen(false) }}>المعلومات</Link></li>
            <li><Link to='#' className={`menu-item ${'/' === pathname ? "is-active" : ""}`} onClick={() => { setMenuOpen(false) }}>الطرود</Link></li>
            <li><Link to='/addPackage' className={`menu-item ${'/addPackage' === pathname ? "is-active" : ""}`} onClick={() => { setMenuOpen(false) }}>اضافة طرد</Link></li>
            <li><Link to='/signin' className={`menu-item ${'/signin' === pathname ? "is-active" : ""}`} onClick={() => { setMenuOpen(false) }}>تسجيل الدخول</Link></li>

            {authState === AuthStateEname.isSigned ?
              <li><Link to='/signout' className={`menu-item ${'/signout' === pathname ? "is-active" : ""}`} onClick={() => { setMenuOpen(false) }}>تسجيل الخروج</Link></li> :
              <li><Link to='/signup' className={`menu-item ${'/signup' === pathname ? "is-active" : ""}`} onClick={() => { setMenuOpen(false) }}>انشاء حساب</Link></li>
            }
          </ul>
        </nav>
      </aside></div>)
}