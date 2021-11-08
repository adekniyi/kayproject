import axios from "axios";
import { endpoints } from "./enpoints";
import { handleErrors } from "./sharedUtils";
import { setAuthToken } from "./sharedUtils";

export const login = (payload, ...sideEffect) => {
  
  axios
    .post(`${endpoints.login}`, payload)
    .then(({ data: { objectValue } }) => {
      // console.log(objectValue);
      const profile = JSON.parse(atob(objectValue.token.split(".")[1]));
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ ...objectValue, profile })
      );

      setAuthToken(objectValue.token);
      if(objectValue.user.userType === 2 || objectValue.user.userType === 1){
        sideEffect[0].replace("/admin")
      }else if(objectValue.user.userType === 3){
        sideEffect[0].replace("/lecturer");
      }else if(objectValue.user.userType === 5){
        sideEffect[0].replace("/supervisor");
      }else{
        sideEffect[0].replace("/student");
      }
    })
    .catch((err) => {
      console.log(err.response);
      handleErrors(err);
    });
};

export const getAllStudents = (setData) => {
  axios
    .get(`${endpoints.getStudents}`)
    .then(({ data: { objectValue } }) => {
      setData(objectValue);
      console.log(objectValue);
    })
    .catch((err) => {
      console.log(err.response);
      handleErrors(err);
    });
};

export const getAllLecturers = (setData) => {
  axios
    .get(`${endpoints.getLecturers}`)
    .then(({ data: { objectValue } }) => {
      setData(objectValue);
      console.log(objectValue);
    })
    .catch((err) => {
      console.log(err.response);
      handleErrors(err);
    });
};

export const getAllSupervisors = (setData) => {
  axios
    .get(`${endpoints.getSupervisors}`)
    .then(({ data: { objectValue } }) => {
      setData(objectValue);
      console.log(objectValue);
    })
    .catch((err) => {
      console.log(err.response);
      handleErrors(err);
    });
};

export const addLogboook = (payload) => {
  
  axios
    .post(`${endpoints.addLogbook}`, payload)
    .then(({ data: { objectValue } }) => {
      console.log(objectValue);
      localStorage.setItem(
        "logbook",
        JSON.stringify({ objectValue })
      );
    })
    .catch((err) => {
      console.log(err.response);
      handleErrors(err);
    });
};

export const getAllCandidatesById = (id, setCandidates, loading) => {
  console.log("making request...");
  axios
    .get(`${endpoints.getAllCandidatesById}${id}`)
    .then(({ data: { objectValue } }) => {
      setCandidates(objectValue);
      console.log(objectValue);
      loading.cancelLoading();
    })
    .catch((err) => {
      console.log(err.response);
      loading.cancelLoading();
      handleErrors(err);
    });
};
