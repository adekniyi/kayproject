import React,{useState,useEffect} from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import logo1 from "../public/img/figure/student.png";

export default function Student() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    //   this might never throw an error, since we did checks on path"
    const profileDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (profileDetails) {
      setProfile(profileDetails);
      console.log(profileDetails)
    } else {
      // logout user
    }
  }, []);
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
                            src={profile?.userProfileInformation?.pictureUrl}
                            class='media-img-auto'
                            alt='student'
                          />
                        </div>
                        <div class='media-body'>
                          <h3 class='item-title'>{profile?.userProfileInformation?.firstName} {profile?.userProfileInformation?.lastName}</h3>
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
                              {profile?.userProfileInformation?.firstName} {profile?.userProfileInformation?.lastName}
                              </td>
                            </tr>
                            <tr>
                              <td>Gender:</td>
                              <td class='font-medium text-dark-medium'>{profile?.userProfileInformation?.gender}</td>
                            </tr>
                            <tr>
                              <td>Level:</td>
                              <td class='font-medium text-dark-medium'>{profile?.userProfileInformation?.level}</td>
                            </tr>
                            <tr>
                              <td>Matric Number:</td>
                              <td class='font-medium text-dark-medium'>
                              {profile?.userProfileInformation?.matricNumber}
                              </td>
                            </tr>
                            <tr>
                              <td>Date Of Birth:</td>
                              <td class='font-medium text-dark-medium'>
                              {profile?.userProfileInformation?.dob}
                              </td>
                            </tr>
                            <tr>
                              <td>Address:</td>
                              <td class='font-medium text-dark-medium'>
                              {profile?.userProfileInformation?.address}
                              </td>
                            </tr>
                            <tr>
                              <td>E-Mail:</td>
                              <td class='font-medium text-dark-medium'>
                              {profile?.userProfileInformation?.emailAddress}
                              </td>
                            </tr>
                            <tr>
                              <td>Phone:</td>
                              <td class='font-medium text-dark-medium'>
                              {profile?.userProfileInformation?.phoneNumber}
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
                  <div className="col-lg-12">
                  <div className="card-body mg-b-20">
                  <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Fill Log book</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                  <div class='col-lg-12form-group'>
                  <label>Description</label>
                      <textarea
                        class='textarea form-control'
                        name='message'
                        id='form-message'
                        cols='10'
                        rows='9'
                      ></textarea>
                  </div>
                  <div class='col-lg-12 form-group'>
                  <label>Date and Time *</label>
                      <input
                        type='text'
                        placeholder='dd/mm/yyyy'
                        class='form-control air-datepicker'
                        data-position='bottom right'
                      />
                      <i class='far fa-calendar-alt'></i>
                  </div>

                  <div class='col-12 form-group mg-t-8 mg-b-5'>
                      <button
                        type='submit'
                        class='btn-fill-lg btn-gradient-yellow btn-hover-bluedark mg-r-12'
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
                  </div>

                  <div class='col-lg-12'>
                    <div class='card dashboard-card-eleven'>
                        <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Make placement</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <form class="new-added-form">
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>First Name *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Last Name *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Department *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Level *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Program</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Company Name *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Company Address *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Company Email</label>
                                    <input type="email" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Section Of Work *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Matric Number *</label>
                                    <input type="number" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Registration Number</label>
                                    <input type="number" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                <label class="text-dark-medium">Offer Letter</label>
                                    <input type="file" class="form-control-file"/>
                                </div>
                                <div class="col-12 form-group mg-t-8">
                                    <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                    <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                        {/* <div class='table-box-wrap'>
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
                        </div> */}
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
