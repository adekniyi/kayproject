import React from 'react';
import Nav from '../Components/Nav';
import LecturerSidebar from './LecturerSidebar';

export default function StudentLogbook() {
  return (
    <>
      <div id='wrapper' class='wrapper bg-ash'>
        <Nav />
        <div class='dashboard-page-one'>
          <LecturerSidebar />
          <div class='dashboard-content-one'>
            <div class='breadcrumbs-area'>
              <h3>Lecturer Dashboard</h3>
              <ul>
                <li>
                  <a href='index.html'>Home</a>
                </li>
                <li>Lecturer</li>
                <li>Students Logbooks</li>
              </ul>
            </div>

            <div class='col-12-xxxl col-12'>
              <div class='card height-auto'>
                <div class='card-body'>
                  <div class='heading-layout1'>
                    <div class='item-title'>
                      <h3>All Students Log Book</h3>
                    </div>
                    <div class='dropdown'>
                      <a
                        class='dropdown-toggle'
                        href='#'
                        role='button'
                        data-toggle='dropdown'
                        aria-expanded='false'
                      >
                        ...
                      </a>

                      <div class='dropdown-menu dropdown-menu-right'>
                        <a class='dropdown-item' href='#'>
                          <i class='fas fa-times text-orange-red'></i>Close
                        </a>
                        <a class='dropdown-item' href='#'>
                          <i class='fas fa-cogs text-dark-pastel-green'></i>Edit
                        </a>
                        <a class='dropdown-item' href='#'>
                          <i class='fas fa-redo-alt text-orange-peel'></i>
                          Refresh
                        </a>
                      </div>
                    </div>
                  </div>
                  <form class='mg-b-20'>
                    <div class='row gutters-8'>
                      <div class='col-lg-4 col-12 form-group'>
                        <input
                          type='text'
                          placeholder='Search by Exam ...'
                          class='form-control'
                        />
                      </div>
                      <div class='col-lg-3 col-12 form-group'>
                        <input
                          type='text'
                          placeholder='Search by Subject ...'
                          class='form-control'
                        />
                      </div>
                      <div class='col-lg-3 col-12 form-group'>
                        <input
                          type='text'
                          placeholder='dd/mm/yyyy'
                          class='form-control'
                        />
                      </div>
                      <div class='col-lg-2 col-12 form-group'>
                        <button
                          type='submit'
                          class='fw-btn-fill btn-gradient-yellow'
                        >
                          SEARCH
                        </button>
                      </div>
                    </div>
                  </form>
                  <div class='table-responsive'>
                    <table class='table display data-table text-nowrap'>
                      <thead>
                        <tr>
                          <th>
                            <div class='form-check'>
                              <input
                                type='checkbox'
                                class='form-check-input checkAll'
                              />
                              <label class='form-check-label'>ID</label>
                            </div>
                          </th>
                          <th>Student Name</th>
                          <th>Description</th>
                          <th>Company</th>
                          <th>Date</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class='form-check'>
                              <input type='checkbox' class='form-check-input' />
                              <label class='form-check-label'>#0021</label>
                            </div>
                          </td>
                          <td>Elufisan Kayode</td>
                          <td>I wrote code this week</td>
                          <td>Kay Crpto ltd</td>
                          <td>02/05/2001</td>
                          <td>
                            <div class='dropdown'>
                              <a
                                href='#'
                                class='dropdown-toggle'
                                data-toggle='dropdown'
                                aria-expanded='false'
                              >
                                <span class='flaticon-more-button-of-three-dots'></span>
                              </a>
                              <div class='dropdown-menu dropdown-menu-right'>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-times text-orange-red'></i>
                                  Close
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-cogs text-dark-pastel-green'></i>
                                  Edit
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-redo-alt text-orange-peel'></i>
                                  Refresh
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class='form-check'>
                              <input type='checkbox' class='form-check-input' />
                              <label class='form-check-label'>#0022</label>
                            </div>
                          </td>
                          <td>Elufisan Kayode</td>
                          <td>I wrote code this week</td>
                          <td>Kay Crpto ltd</td>
                          <td>02/05/2001</td>
                          <td>
                            <div class='dropdown'>
                              <a
                                href='#'
                                class='dropdown-toggle'
                                data-toggle='dropdown'
                                aria-expanded='false'
                              >
                                <span class='flaticon-more-button-of-three-dots'></span>
                              </a>
                              <div class='dropdown-menu dropdown-menu-right'>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-times text-orange-red'></i>
                                  Close
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-cogs text-dark-pastel-green'></i>
                                  Edit
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-redo-alt text-orange-peel'></i>
                                  Refresh
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class='form-check'>
                              <input type='checkbox' class='form-check-input' />
                              <label class='form-check-label'>#0023</label>
                            </div>
                          </td>
                          <td>Elufisan Kayode</td>
                          <td>I wrote code this week</td>
                          <td>Kay Crpto ltd</td>
                          <td>02/05/2001</td>
                          <td>
                            <div class='dropdown'>
                              <a
                                href='#'
                                class='dropdown-toggle'
                                data-toggle='dropdown'
                                aria-expanded='false'
                              >
                                <span class='flaticon-more-button-of-three-dots'></span>
                              </a>
                              <div class='dropdown-menu dropdown-menu-right'>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-times text-orange-red'></i>
                                  Close
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-cogs text-dark-pastel-green'></i>
                                  Edit
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-redo-alt text-orange-peel'></i>
                                  Refresh
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class='form-check'>
                              <input type='checkbox' class='form-check-input' />
                              <label class='form-check-label'>#0024</label>
                            </div>
                          </td>
                          <td>Elufisan Kayode</td>
                          <td>I wrote code this week</td>
                          <td>Kay Crpto ltd</td>
                          <td>02/05/2001</td>
                          <td>
                            <div class='dropdown'>
                              <a
                                href='#'
                                class='dropdown-toggle'
                                data-toggle='dropdown'
                                aria-expanded='false'
                              >
                                <span class='flaticon-more-button-of-three-dots'></span>
                              </a>
                              <div class='dropdown-menu dropdown-menu-right'>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-times text-orange-red'></i>
                                  Close
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-cogs text-dark-pastel-green'></i>
                                  Edit
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-redo-alt text-orange-peel'></i>
                                  Refresh
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class='form-check'>
                              <input type='checkbox' class='form-check-input' />
                              <label class='form-check-label'>#0028</label>
                            </div>
                          </td>
                          <td>Elufisan Kayode</td>
                          <td>I wrote code this week</td>
                          <td>Kay Crpto ltd</td>
                          <td>02/05/2001</td>
                          <td>
                            <div class='dropdown'>
                              <a
                                href='#'
                                class='dropdown-toggle'
                                data-toggle='dropdown'
                                aria-expanded='false'
                              >
                                <span class='flaticon-more-button-of-three-dots'></span>
                              </a>
                              <div class='dropdown-menu dropdown-menu-right'>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-times text-orange-red'></i>
                                  Close
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-cogs text-dark-pastel-green'></i>
                                  Edit
                                </a>
                                <a class='dropdown-item' href='#'>
                                  <i class='fas fa-redo-alt text-orange-peel'></i>
                                  Refresh
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
