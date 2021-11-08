import React,{useState} from 'react';
import Nav from '../Components/Nav';
import AdminSidebar from './AdminSidebar';

export default function AddStudent() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "",emailAddress:"",phoneNumber: "",gender: "",dob:"",state:"",lga:"",address:"", department:"",level:"",matricNumber:""});

  const addStudent = (e) => {
    e.preventDefault();
    //  login(formData, history);
     console.log(formData);
  };

  return (
    <>
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
                <li>Create Student</li>
              </ul>
            </div>
            <div class='card height-auto'>
              <div class='card-body'>
                <div class='heading-layout1'>
                  <div class='item-title'>
                    <h3>Add Student</h3>
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
                <form onSubmit={(e) => addStudent(e)} class='new-added-form'>
                  <div class='row'>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>First Name *</label>
                      <input  value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Last Name *</label>
                      <input  value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Department *</label>
                      <input  value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Level *</label>
                      <input  value={formData.level}
              onChange={(e) =>
                setFormData({ ...formData, level: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>LGA</label>
                      <input  value={formData.lga}
              onChange={(e) =>
                setFormData({ ...formData, lga: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>State *</label>
                      <input  value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Address *</label>
                      <input  value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Email</label>
                      <input  value={formData.emailAddress}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              } type='email' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Gender *</label>
                      <select  value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              } class='select2'>
                        <option value=''>Please Select Gender *</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Others'>Others</option>
                      </select>
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
                      <label>Date Of Birth *</label>
                      <input
                        type='text'
                        placeholder='dd/mm/yyyy'
                        class='form-control air-datepicker'
                        data-position='bottom right'
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                      />
                      <i class='far fa-calendar-alt'></i>
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label class='text-dark-medium'>Student Picture</label>
                      <input type='file' class='form-control-file' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Phone Number *</label>
                      <input
                        type='text'
                        placeholder=''
                        class='form-control'
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                      />
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
