import React,{ useState, useEffect} from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Success from "./Success"
import axios from "axios";
import { endpoints } from "../APIs/enpoints";
import { handleErrors } from "../APIs/sharedUtils";

export default function Logbook() {
  const [formData, setFormData] = useState({ description: "", date: "",time:""});
  const [show,setShow] = useState(false);

  const addLogbook = (e) => {
    e.preventDefault();
    console.log(formData);
    // addLogboook(formData)
    axios
    .post(`${endpoints.addLogbook}`, formData)
    .then(({ data: { objectValue } }) => {
      console.log(objectValue);
      setShow(true);
    })
    .catch((err) => {
      console.log(err.response);
      handleErrors(err);
      setShow(false);
    });

    setFormData({ description: "", date: "",time:""})
  };

  const reset =(e)=>{
    e.preventDefault();
    setFormData({ description: "", date: "",time:""});
  }


  // useEffect(() => {
  //   //   this might never throw an error, since we did checks on path"
  //   const logbook = JSON.parse(localStorage.getItem("logbook"));
  //   if (logbook) {
  //     setShow(true);
  //     localStorage.removeItem("logbook")
  //   } else {
  //     // logout user
  //     setShow(false);
  //   }
  // }, [formData]);
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
                <li>Log Book</li>
              </ul>
            </div>
            <div class='card height-auto'>
              <div class='card-body'>
                <div class='heading-layout1'>
                  <div class='item-title'>
                    <h3>Fill A Log Book</h3>
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
                <form onSubmit={(e) => addLogbook(e)} class='new-added-form'>
                  <div class='row'>
                    <div class='col-lg-6 col-12 form-group'>
                      <label>Description</label>
                      <textarea
                        class='textarea form-control'
                        name='message'
                        id='form-message'
                        cols='10'
                        rows='9'
                        value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              } 
                      ></textarea>
                    </div>
                    <div class='col-lg-6 col-12 form-group mg-t-30'>
                      <label>Date</label>
                      <input
                        type='date'
                        placeholder='dd/mm/yyyy'
                        class='form-control air-datepicker'
                        data-position='bottom right'
                        value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              } 
                      />
                      {/* <i class='far fa-calendar-alt'></i> */}
                    </div>
                    <div class='col-lg-6 col-12 form-group mg-t-30'>
                      <label>Time</label>
                      <input
                        type='time'
                        placeholder='8:50:30'
                        class='form-control air-datepicker'
                        data-position='bottom right'
                        value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              } 
                      />
                    </div>
                    <div class='col-12 form-group mg-t-8'>
                      <button
                        type='submit'
                        class='btn-fill-lg btn-gradient-yellow btn-hover-bluedark'
                      >
                        Submit
                      </button>
                      <button
                        type='reset'
                        class='btn-fill-lg bg-blue-dark btn-hover-yellow'
                        onClick={(e)=>reset(e)}
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
