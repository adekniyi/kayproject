import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import AdminSidebar from './AdminSidebar';
import { getAllStudents } from '../APIs/apiCalls';

export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllStudents(setData);
  }, []);
  return (
    <>
      <div id='wrapper' class='wrapper bg-ash'>
        <Nav />
        <div class='dashboard-page-one'>
          <AdminSidebar />
          <div class='dashboard-content-one'>
            <div class='breadcrumbs-area'>
              <h3>Admin Dashboard</h3>
              <ul>
                <li>
                  <a href='index.html'>Home</a>
                </li>
              </ul>
            </div>
            <div class='row gutters-20'>
              <div class='col-xl-3 col-sm-6 col-12'>
                <div class='dashboard-summery-one mg-b-20'>
                  <div class='row align-items-center'>
                    <div class='col-6'>
                      <div class='item-icon bg-light-green '>
                        <i class='flaticon-classmates text-green'></i>
                      </div>
                    </div>
                    <div class='col-6'>
                      <div class='item-content'>
                        <div class='item-title'>Students</div>
                        <div class='item-number'>
                          <span class='counter' data-num='150000'>
                            1,50,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-xl-3 col-sm-6 col-12'>
                <div class='dashboard-summery-one mg-b-20'>
                  <div class='row align-items-center'>
                    <div class='col-6'>
                      <div class='item-icon bg-light-blue'>
                        <i class='flaticon-multiple-users-silhouette text-blue'></i>
                      </div>
                    </div>
                    <div class='col-6'>
                      <div class='item-content'>
                        <div class='item-title'>Lecturers</div>
                        <div class='item-number'>
                          <span class='counter' data-num='2250'>
                            2,250
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-xl-3 col-sm-6 col-12'>
                <div class='dashboard-summery-one mg-b-20'>
                  <div class='row align-items-center'>
                    <div class='col-6'>
                      <div class='item-icon bg-light-yellow'>
                        <i class='flaticon-couple text-orange'></i>
                      </div>
                    </div>
                    <div class='col-6'>
                      <div class='item-content'>
                        <div class='item-title'>Industrial Supervisor</div>
                        <div class='item-number'>
                          <span class='counter' data-num='5690'>
                            5,690
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-xl-3 col-sm-6 col-12'>
                <div class='dashboard-summery-one mg-b-20'>
                  <div class='row align-items-center'>
                    <div class='col-6'>
                      <div class='item-icon bg-light-red'>
                        <i class='flaticon-money text-red'></i>
                      </div>
                    </div>
                    <div class='col-6'>
                      <div class='item-content'>
                        <div class='item-title'>Log books</div>
                        <div class='item-number'>
                          <span class='counter' data-num='193000'>
                            93,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-12-xxxl col-12'>
                <div class='row'>
                  <div class='col-lg-12'>
                    <div class='card dashboard-card-eleven'>
                      <div class='card-body'>
                        <div class='heading-layout1'>
                          <div class='item-title'>
                            <h3>All Students</h3>
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
                              <div class='col-3-xxxl col-xl-3 col-lg-3 col-12 form-group'>
                                <input
                                  type='text'
                                  placeholder='Search by Roll ...'
                                  class='form-control'
                                />
                              </div>
                              <div class='col-4-xxxl col-xl-4 col-lg-4 col-12 form-group'>
                                <input
                                  type='text'
                                  placeholder='Search by Name ...'
                                  class='form-control'
                                />
                              </div>
                              <div class='col-4-xxxl col-xl-3 col-lg-3 col-12 form-group'>
                                <input
                                  type='text'
                                  placeholder='Search by Class ...'
                                  class='form-control'
                                />
                              </div>
                              <div class='col-1-xxxl col-xl-2 col-lg-2 col-12 form-group'>
                                <button
                                  type='submit'
                                  class='fw-btn-fill btn-gradient-yellow'
                                >
                                  SEARCH
                                </button>
                              </div>
                            </div>
                          </form>
                          <div class='table-responsive student-table-box'>
                          <table class='table display data-table text-nowrap'>
                            <thead>
                              <tr>
                                <th>
                                  <div class='form-check'>
                                    <input
                                      type='checkbox'
                                      class='form-check-input checkAll'
                                    />
                                    <label class='form-check-label'>Roll</label>
                                  </div>
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Level</th>
                                <th>Address</th>
                                <th>Date Of Birth</th>
                                <th>Phone</th>
                                <th>E-mail</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((student) => (
                                <tr key={student.studentId}>
                                  <td>
                                    <div class='form-check'>
                                      <input
                                        type='checkbox'
                                        class='form-check-input'
                                      />
                                      <label class='form-check-label'>
                                        {student.studentId}
                                      </label>
                                    </div>
                                  </td>
                                  <td class='text-center'>
                                    <img
                                      src='/img/figure/student2.png'
                                      alt='student'
                                    />
                                  </td>
                                  <td>
                                    {student.firstName} {student.lastName}
                                  </td>
                                  <td>{student.gender}</td>
                                  <td>{student.level}</td>
                                  <td>{student.address}</td>
                                  <td>{student.dob}</td>
                                  <td>{student.phoneNumber}</td>
                                  <td>{student.emailAddress}</td>
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
                              ))}
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
        </div>
      </div>
    </>
  );
}
