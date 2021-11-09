import React, { useState } from 'react';
import Nav from '../Components/Nav';
import AdminSidebar from './AdminSidebar';
import axios from 'axios';
import { endpoints } from '../APIs/enpoints';
import { handleErrors } from '../APIs/sharedUtils';
import Success from '../Components/Success';

export default function AddSupervisor() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    sectionOfWork: '',
    companyAddress: '',
    companyName: '',
  });
  const [show, setShow] = useState(false);

  const addSupervisor = (e) => {
    e.preventDefault();
    //  login(formData, history);
    console.log(formData);
    axios
      .post(`${endpoints.addSupervisor}`, formData)
      .then(({ data: { objectValue } }) => {
        console.log(objectValue);
        setShow(true);
        setFormData({
          firstName: '',
          lastName: '',
          emailAddress: '',
          phoneNumber: '',
          sectionOfWork: '',
          companyAddress: '',
          companyName: '',
        });
      })
      .catch((err) => {
        console.log(err.response);
        handleErrors(err);
        setShow(false);
      });
  };
  return (
    <>
      <Success onClose={() => setShow(false)} show={show} />

      <div id='wrapper' class='wrapper bg-ash'>
        <Nav />
        <div class='dashboard-page-one'>
          <AdminSidebar />
          <div class='dashboard-content-one'>
            <div class='breadcrumbs-area'>
              <h3>Admin</h3>
              <ul>
                <li>
                  <a href='index.html'>Home</a>
                </li>
                <li>Create Supervisor</li>
              </ul>
            </div>
            <div class='card height-auto'>
              <div class='card-body'>
                <div class='heading-layout1'>
                  <div class='item-title'>
                    <h3>Add Supervisor</h3>
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
                        <i class='fas fa-redo-alt text-orange-peel'></i>Refresh
                      </a>
                    </div>
                  </div>
                </div>
                <form onSubmit={(e) => addSupervisor(e)} class='new-added-form'>
                  <div class='row'>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>First Name *</label>
                      <input
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        type='text'
                        placeholder=''
                        class='form-control'
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Last Name *</label>
                      <input
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        type='text'
                        placeholder=''
                        class='form-control'
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Sector Of Work *</label>
                      <input
                        value={formData.sectionOfWork}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            sectionOfWork: e.target.value,
                          })
                        }
                        type='text'
                        placeholder=''
                        class='form-control'
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Phone Number *</label>
                      <input
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                        type='text'
                        placeholder=''
                        class='form-control'
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Company Name *</label>
                      <input
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        type='text'
                        placeholder=''
                        class='form-control'
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Email</label>
                      <input
                        value={formData.emailAddress}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            emailAddress: e.target.value,
                          })
                        }
                        type='email'
                        placeholder=''
                        class='form-control'
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Company Address *</label>
                      <input
                        type='text'
                        placeholder=''
                        class='form-control'
                        value={formData.companyAddress}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyAddress: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label class='text-dark-medium'>Supervisor Picture</label>
                      <input type='file' class='form-control-file' />
                    </div>
                    <div class='col-12 form-group mg-t-8'>
                      <button
                        type='submit'
                        class='btn-fill-lg btn-gradient-yellow btn-hover-bluedark'
                      >
                        Save
                      </button>
                      <button
                        type='reset'
                        class='btn-fill-lg bg-blue-dark btn-hover-yellow'
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
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
