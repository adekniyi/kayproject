export const base_url = "https://siwesapp.azurewebsites.net/api/";

export const endpoints = {
  login: `${base_url}authentication/login`,
  getStudents: `${base_url}Student`,
  getLecturers: `${base_url}Lecturer`,
  getSupervisors: `${base_url}IndustrialSupervisor`,
  addLogbook: `${base_url}LogBook`,
  makePlacement: `${base_url}Student/placement`,
  addStudent: `${base_url}Student`,
  addLecturer: `${base_url}lecturer`,
  addSupervisor: `${base_url}IndustrialSupervisor`,
  getLogbooks: `${base_url}LogBook/logbooks`,
  assignStudent: `${base_url}SiwesCo/assignstudentToLecturer`,
};