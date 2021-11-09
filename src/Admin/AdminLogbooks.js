import React,{ useState, useEffect} from 'react';
import Nav from '../Components/Nav';
import AdminSidebar from './AdminSidebar';
import { getAllLogbooks } from '../APIs/apiCalls';


export default function AdminLogbook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllLogbooks(setData);
  }, []);
  return (
    <>
      <div id='wrapper' class='wrapper bg-ash'>
        <Nav />
        <div class='dashboard-page-one'>
          <AdminSidebar />
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
                          <th>Description</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      {data?.map((logbook) => (
                        <tr key={logbook.logBookId}>
                          <td>
                            <div class='form-check'>
                              <input type='checkbox' class='form-check-input' />
                              <label class='form-check-label'>{logbook.logBookId}</label>
                            </div>
                          </td>
                          <td>{logbook.description}</td>
                          <td>{logbook.day}</td>
                          <td>{logbook.time}</td>
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
    </>
  );
}
