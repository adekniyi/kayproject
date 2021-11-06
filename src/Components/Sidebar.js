import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../public/img/logo1.png";

export default function Sidebar() {
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
                <span>Student Dashboard</span>
              </a>
              <ul class='nav sub-group-menu sub-group-active'>
                <li class='nav-item'>
                  <a href='/student' class='nav-link menu-active'>
                    <i class='fas fa-angle-right'></i>Student Profile
                  </a>
                </li>
                <li class='nav-item'>
                  <Link to='/student/placement' class='nav-link'>
                    <i class='fas fa-angle-right'></i>Make Placement
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/student/logbook' class='nav-link'>
                    <i class='fas fa-angle-right'></i>Fill Log book
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
  );
}
