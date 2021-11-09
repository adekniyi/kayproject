import React,{useState, useEffect} from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import axios from "axios";
import { endpoints } from "../APIs/enpoints";
import { handleErrors } from "../APIs/sharedUtils";
import Success from "./Success"

export default function MakePlacement() {
  const [formData, setFormData] = useState({ FirstName: "", LastName: "",Programm: "",CompanyName: "",CompanyAddress:"",EmailAddressOfCompany:"",SectionOfWork:"", RegistrationNumber: "",Level:"",MatricNumber:"", Department:""});
  const [show,setShow] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    //   this might never throw an error, since we did checks on path"
    const profileDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (profileDetails) {
      setProfile(profileDetails);
    } else {
      // logout user
    }
  }, []);
  const makePlacement = (e) => {
    e.preventDefault();
    //  login(formData, history);
     console.log(formData);
     axios
    .post(`${endpoints.makePlacement}`, formData)
    .then(({ data: { objectValue } }) => {
      console.log(objectValue);
      setShow(true);
     // setFormData({ firstName: "", lastName: "",programm: "",companyName: "",companyAddress:"",emailAddressOfCompany:"",sectionOfWork:"", registrationNumber: "",level:"",matricNumber:"", department:""})
    })
    .catch((err) => {
      console.log(err.response);
      handleErrors(err);
      setShow(false);
    });

  };


  return (
    <>
    <Success onClose={()=>setShow(false)} show={show} />
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
                      <input value={formData.FirstName}
              onChange={(e) =>
                setFormData({ ...formData, FirstName: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Last Name *</label>
                      <input value={formData.LastName}
              onChange={(e) =>
                setFormData({ ...formData, LastName: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Department *</label>
                      <input value={formData.Department}
              onChange={(e) =>
                setFormData({ ...formData, Department: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Level *</label>
                      <input value={formData.Level}
              onChange={(e) =>
                setFormData({ ...formData, Level: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Program</label>
                      <input value={formData.Programm}
              onChange={(e) =>
                setFormData({ ...formData, Programm: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Company Name *</label>
                      <input value={formData.CompanyName}
              onChange={(e) =>
                setFormData({ ...formData, CompanyName: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Company Address *</label>
                      <input value={formData.CompanyAddress}
              onChange={(e) =>
                setFormData({ ...formData, CompanyAddress: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Company Email</label>
                      <input value={formData.EmailAddressOfCompany}
              onChange={(e) =>
                setFormData({ ...formData, EmailAddressOfCompany: e.target.value })
              } type='email' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Sector Of Work *</label>
                      <input value={formData.SectionOfWork}
              onChange={(e) =>
                setFormData({ ...formData, SectionOfWork: e.target.value })
              } type='text' placeholder='' class='form-control' />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Matric Number *</label>
                      <input
                        type='number'
                        placeholder=''
                        class='form-control'
                        value={formData.MatricNumber}
              onChange={(e) =>
                setFormData({ ...formData, MatricNumber: e.target.value })
              }
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label>Registration Number</label>
                      <input
                        type='number'
                        placeholder=''
                        class='form-control'
                        value={formData.RegistrationNumber}
              onChange={(e) =>
                setFormData({ ...formData, RegistrationNumber: e.target.value })
              }
                      />
                    </div>
                    <div class='col-xl-3 col-lg-6 col-12 form-group'>
                      <label class='text-dark-medium'>Offer Letter</label>
                      <input name="offerLetter" type='file' class='form-control-file' />
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
