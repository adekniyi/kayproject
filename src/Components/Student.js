import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import logo1 from "../public/img/figure/student.png";

export default function Student() {
  return (
    <>
      {/* <div id='preloader'></div> */}
      <div id='wrapper' class='wrapper bg-ash'>
        <Nav />
        <div class='dashboard-page-one'>
          <Sidebar />
          <div class='dashboard-content-one'>
            <div class='breadcrumbs-area'>
              <h3>Student Dashboard</h3>
              <ul>
                <li>
                  <a href='index.html'>Home</a>
                </li>
                <li>Student</li>
              </ul>
            </div>
            <div class='row'>
              <div class='col-4-xxxl col-12'>
                <div class='card dashboard-card-ten'>
                  <div class='card-body'>
                    <div class='heading-layout1'>
                      <div class='item-title'>
                        <h3>About Me</h3>
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
                            <i class='fas fa-cogs text-dark-pastel-green'></i>
                            Edit
                          </a>
                          <a class='dropdown-item' href='#'>
                            <i class='fas fa-redo-alt text-orange-peel'></i>
                            Refresh
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class='student-info'>
                      <div class='media media-none--xs'>
                        <div class='item-img'>
                          <img
                            src={logo1}
                            class='media-img-auto'
                            alt='student'
                          />
                        </div>
                        <div class='media-body'>
                          <h3 class='item-title'>Stevne Zone</h3>
                          <p>
                            Aliquam erat volutpat. Curabiene natis massa sedde
                            lacustiquen sodale word moun taiery.
                          </p>
                        </div>
                      </div>
                      <div class='table-responsive info-table'>
                        <table class='table text-nowrap'>
                          <tbody>
                            <tr>
                              <td>Name:</td>
                              <td class='font-medium text-dark-medium'>
                                Stevne Zone
                              </td>
                            </tr>
                            <tr>
                              <td>Gender:</td>
                              <td class='font-medium text-dark-medium'>Male</td>
                            </tr>
                            <tr>
                              <td>Level:</td>
                              <td class='font-medium text-dark-medium'>100</td>
                            </tr>
                            <tr>
                              <td>Matric Number:</td>
                              <td class='font-medium text-dark-medium'>
                                199110
                              </td>
                            </tr>
                            <tr>
                              <td>Date Of Birth:</td>
                              <td class='font-medium text-dark-medium'>
                                07.08.2006
                              </td>
                            </tr>
                            <tr>
                              <td>Father Occupation:</td>
                              <td class='font-medium text-dark-medium'>
                                Graphic Designer
                              </td>
                            </tr>
                            <tr>
                              <td>E-Mail:</td>
                              <td class='font-medium text-dark-medium'>
                                jessiarose@gmail.com
                              </td>
                            </tr>
                            <tr>
                              <td>Phone:</td>
                              <td class='font-medium text-dark-medium'>
                                + 88 9856418
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-8-xxxl col-12'>
                <div class='row'>
                  <div class='col-lg-4'>
                    <div class='dashboard-summery-one'>
                      <div class='row'>
                        <div class='col-6'>
                          <div class='item-icon bg-light-magenta'>
                            <i class='flaticon-shopping-list text-magenta'></i>
                          </div>
                        </div>
                        <div class='col-6'>
                          <div class='item-content'>
                            <div class='item-title'>Notification</div>
                            <div class='item-number'>
                              <span class='counter' data-num='12'>
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-4'>
                    <div class='dashboard-summery-one'>
                      <div class='row'>
                        <div class='col-6'>
                          <div class='item-icon bg-light-blue'>
                            <i class='flaticon-calendar text-blue'></i>
                          </div>
                        </div>
                        <div class='col-6'>
                          <div class='item-content'>
                            <div class='item-title'>Events</div>
                            <div class='item-number'>
                              <span class='counter' data-num='06'>
                                06
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-4'>
                    <div class='dashboard-summery-one'>
                      <div class='row'>
                        <div class='col-6'>
                          <div class='item-icon bg-light-yellow'>
                            <i class='flaticon-percentage-discount text-orange'></i>
                          </div>
                        </div>
                        <div class='col-6'>
                          <div class='item-content'>
                            <div class='item-title'>Attendance</div>
                            <div class='item-number'>
                              <span class='counter' data-num='94'>
                                94
                              </span>
                              <span>%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='col-lg-12'>
                    <div class='card dashboard-card-eleven'>
                      <div class='card-body'>
                        <div class='heading-layout1'>
                          <div class='item-title'>
                            <h3>All Exam Results</h3>
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
                        </div>
                        <div class='table-box-wrap'>
                          <form class='search-form-box'>
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
                          <div class='table-responsive result-table-box'>
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
                                  <th>Exam Name</th>
                                  <th>Subject</th>
                                  <th>Grade</th>
                                  <th>Percent</th>
                                  <th>Date</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div class='form-check'>
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0021
                                      </label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>A</td>
                                  <td>99.00 100</td>
                                  <td>22/02/2019</td>
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
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0022
                                      </label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>A</td>
                                  <td>99.00 100</td>
                                  <td>22/02/2019</td>
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
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0023
                                      </label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>Chemistry</td>
                                  <td>A</td>
                                  <td>99.00 100</td>
                                  <td>22/02/2019</td>
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
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0024
                                      </label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>A</td>
                                  <td>99.00 100</td>
                                  <td>22/02/2019</td>
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
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0025
                                      </label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>Chemistry</td>
                                  <td>A</td>
                                  <td>99.00 100</td>
                                  <td>22/02/2019</td>
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
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0025
                                      </label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>Chemistry</td>
                                  <td>D</td>
                                  <td>70.00 100</td>
                                  <td>22/02/2019</td>
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
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0025
                                      </label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>C</td>
                                  <td>80.00 100</td>
                                  <td>22/02/2019</td>
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
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0025
                                      </label>
                                    </div>
                                  </td>
                                  <td>Class Test</td>
                                  <td>English</td>
                                  <td>B</td>
                                  <td>99.00 100</td>
                                  <td>22/02/2019</td>
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
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        #0025
                                      </label>
                                    </div>
                                  </td>
                                  <td>First Semister</td>
                                  <td>English</td>
                                  <td>A</td>
                                  <td>99.00 100</td>
                                  <td>22/02/2019</td>
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
            </div>
            <footer class='footer-wrap-layout1'>
              <div class='copyright'>
                © Copyrights <a href='#'>akkhor</a> 2019. All rights reserved.
                Designed by <a href='#'>PsdBosS</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
