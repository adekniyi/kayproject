import React,{useState} from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

export default function MakePlacement() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "",program: "",companyName: "",companyAddress:"",companyEmail:"",sectionOfWork:"", registrationNumber: "",level:"",matricNumber:""});

  const makePlacement = (e) => {
    e.preventDefault();
    //  login(formData, history);
     console.log(formData);
  };
  return (
    <>
      <div id='wrapper' class='wrapper bg-ash'>
        <Nav />
        <div class='dashboard-page-one'>
          <Sidebar />
          <div class='dashboard-content-one'>
            <div class='breadcrumbs-area'>
              <h3>Students</h3>
              <ul>
                <li>
                  <a href='index.html'>Home</a>
                </li>
                <li>Student Placement Form</li>
              </ul>
            </div>
            <div class='card height-auto'>
              <div class='card-body'>
                <div class='heading-layout1'>
                  <div class='item-title'>
                    <h3>Make placement</h3>
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
                <form onSubmit={(e) => makePlacement(e)} class='new-added-form'>
                  <div class='row'>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>First Name *</label>
                      <input value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Last Name *</label>
                      <input value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Department *</label>
                      <input value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Level *</label>
                      <input value={formData.level}
              onChange={(e) =>
                setFormData({ ...formData, level: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Program</label>
                      <input value={formData.program}
              onChange={(e) =>
                setFormData({ ...formData, program: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Company Name *</label>
                      <input value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Company Address *</label>
                      <input value={formData.companyAddress}
              onChange={(e) =>
                setFormData({ ...formData, companyAddress: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Company Email</label>
                      <input value={formData.companyEmail}
              onChange={(e) =>
                setFormData({ ...formData, companyEmail: e.target.value })
              } type='email' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Sector Of Work *</label>
                      <input value={formData.sectionOfWork}
              onChange={(e) =>
                setFormData({ ...formData, sectionOfWork: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Matric Number *</label>
                      <input
                        type='number'
                        placeholder=''
                        class='form-control'
                        value={formData.matricNumber}
              onChange={(e) =>
                setFormData({ ...formData, matricNumber: e.target.value })
              }
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Registration Number</label>
                      <input
                        type='number'
                        placeholder=''
                        class='form-control'
                        value={formData.registrationNumber}
              onChange={(e) =>
                setFormData({ ...formData, registrationNumber: e.target.value })
              }
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label class='text-dark-medium'>Offer Letter</label>
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
