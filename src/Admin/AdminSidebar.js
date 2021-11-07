import React from 'react'
import { Link } from 'react-router-dom';
import logo1 from "../public/img/logo1.png";

export default function AdminSidebar() {
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
                <span>Admin Dashboard</span>
              </a>
              <ul class='nav sub-group-menu sub-group-active'>
                <li class='nav-item'>
                  <a href='/admin' class='nav-link menu-active'>
                    <i class='fas fa-angle-right'></i>Admin Dashboard
                  </a>
                </li>
                <li class='nav-item'>
                  <Link to='/admin/allLecturers' class='nav-link'>
                    <i class='fas fa-angle-right'></i>All Lecturer
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/admin/allStudents' class='nav-link'>
                    <i class='fas fa-angle-right'></i>All Students
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/admin/allSupervisors' class='nav-link'>
                    <i class='fas fa-angle-right'></i>All Industrial Supervisor
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/admin/addStudent' class='nav-link'>
                    <i class='fas fa-angle-right'></i>Add Student
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/admin/addLecturer' class='nav-link'>
                    <i class='fas fa-angle-right'></i>Add Lecurer
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/admin/addSupervisor' class='nav-link'>
                    <i class='fas fa-angle-right'></i>Add Industrial Supervisor
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/lecturer/logbooks' class='nav-link'>
                    <i class='fas fa-angle-right'></i>Assign Lecturer To Student
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link to='/lecturer/logbooks' class='nav-link'>
                    <i class='fas fa-angle-right'></i>Get Log books
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
