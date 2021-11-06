import React from 'react'
import { Link } from 'react-router-dom';
import logo1 from "../public/img/logo1.png";

export default function LecturerSidebar() {
    return (
        <>
                <div class='sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color'>
        <div class='mobile-sidebar-header d-md-none'>
          <div class='header-logo'>
            <a href='index.html'>
              <img
                src={logo1}
                alt='logo'
              />
            </a>
          </div>
        </div>
        <div class='sidebar-menu-content'>
          <ul class='nav nav-sidebar-menu sidebar-toggle-view'>
            <li class='nav-item sidebar-nav-item'>
              <a href='#' class='nav-link'>
                <i class='flaticon-dashboard'></i>
                <span>Lecturer Dashboard</span>
              </a>
              <ul class='nav sub-group-menu sub-group-active'>
                <li class='nav-item'>
                  <a href='/lecturer' class='nav-link menu-active'>
                    <i class='fas fa-angle-right'></i>Lecturer Profile
                  </a>
                </li>
                <li class='nav-item'>
                  <Link to='/lecturer/students' class='nav-link'>
                    <i class='fas fa-angle-right'></i>All Lecturer Students
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/lecturer/logbooks' class='nav-link'>
                    <i class='fas fa-angle-right'></i>Get All Students Log books
                  </Link>
                </li>
              </ul>
            </li>
            <li class='nav-item'>
              <a href='account-settings.html' class='nav-link'>
                <i class='flaticon-settings'></i>
                <span>Account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
        </>
    )
}
