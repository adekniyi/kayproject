export const base_url = "https://siwesapp.azurewebsites.net/api/";

export const endpoints = {
  login: `${base_url}authentication/login`,
  getStudents: `${base_url}Student`,
  getLecturers: `${base_url}Lecturer`,
  getSupervisors: `${base_url}IndustrialSupervisor`,
  addLogbook: `${base_url}LogBook`,
};
