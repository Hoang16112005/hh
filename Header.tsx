import React from 'react'
import coach from "../assets/logo-coach.png"
import web from "../assets/logo-web.png"
import email from "../assets/logo-email.png"
import phone from "../assets/logo-phone.png"
import search from "../assets/logo-search.png"
import menu from "../assets/menu-bar.png"
import { Link, useLocation } from 'react-router-dom'
import { NavLink } from "react-router-dom";
export default function Header() {
    
    const location = useLocation();
    const path = location.pathname;
  return (
    <div>
      <div className="heading-nav">
        <header>
            <div className="heading">
            <div className="heading-left">
                <img src={coach} alt="coach" />
                <span>Hệ thống Đặt Vé Xe Toàn Quốc</span>
            </div>

            <div className="heading-right">
                <div className="item">
                <img src={email} alt="email" />
                <span>info.vivutoday@gmail.com</span>
                </div>

                <div className="line-vertical"></div>

                <div className="item">
                <img src={phone} alt="phone" />
                <span>1900 0152</span>
                </div>
            </div>
            <button className="logOut">
                Đăng xuất
            </button>
            </div>
        </header>

        <nav>
            <img
            className="menu-bar"
            src={menu}
            alt="menu-bar"
            />

            <img src={web} alt="logo-web" />

            <div className="menu">
            <div className="item">
                <Link to="/"
                 className={path === "/" ? "link-active" : ""}
                >Trang chủ</Link>
            </div>
            <div className="item">
                <Link 
                    to="/introduction" 
                    className={path === "/introduction" ? "link-active" : ""}
                    >
                    Giới thiệu
                </Link> 
            </div>
            <div className="item">
                <Link 
                 className={path === "/Nhaxe" ? "link-active" : ""}
                to="/Nhaxe">Thông tin nhà xe</Link>
            </div>
            <div className="item">
                <Link 
                 className={path === "/Benxe" ? "link-active" : ""}
                to="/Benxe">Bến xe</Link>
            </div>
            <div className="item">
                <Link 
                 className={path === "/Tuyenduong" ? "link-active" : ""}
                to="/Tuyenduong">Tuyến đường</Link>
            </div>
            <div className="item">
                <Link 
                    to="/ticker-check" 
                    className={path === "/ticker-check" ? "link-active" : ""}
                    >
                    Kiểm tra vé
                </Link>
            </div>
            <div className="search">
                <img src={search} alt="search" />
            </div>
            </div>
        </nav>
        </div>
    </div>
  )
}