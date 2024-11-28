import axios from "axios";

const baseURL = "http://localhost:8000";

export const post = (url, data, actionType, dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch({ type: `${actionType}_INIT` });
      const response = await axios.post(`${baseURL}${url}`, data);
      if (response.data.status == 401) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
      } else {
        dispatch({
          type: `${actionType}_SUCCESS`,
          payload: response.data,
        });
      }
      resolve(response.data);
    } catch (error) {
      dispatch({
        type: `${actionType}_FAIL`,
        payload: error,
      });
      reject(error);
    }
  });
};

export const postAuthToken = (url, data, actionType, dispatch, headers) => {
  const token = localStorage.getItem("authToken");
  return new Promise(async (resolve, reject) => {
    try {
      dispatch({ type: `${actionType}_INIT` });
      const response = await axios.post(`${baseURL}${url}`, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          ContentType: "application/json",
        },
      });
      if (response.data.status == 401) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
      } else {
        dispatch({
          type: `${actionType}_SUCCESS`,
          payload: response.data,
        });
        resolve(response.data);
      }
    } catch (error) {
      dispatch({
        type: `${actionType}_FAIL`,
        payload: error,
      });
      reject(error);
    }
  });
};

export const getNoAuth = (url, actionType, dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Dispatch the action with INIT type
      dispatch({ type: `${actionType}_INIT` });
      const response = await axios.get(`${baseURL}${url}`);
      // Dispatch the action with SUCCESS type
      dispatch({
        type: `${actionType}_SUCCESS`,
        payload: response.data,
      });
      resolve(response.data);
    } catch (error) {
      // Dispatch the action with FAIL type
      dispatch({
        type: `${actionType}_FAIL`,
        payload: error.response,
      });
    }
  });
};

export const get = (url, actionType, dispatch) => {
  return new Promise(async (resolve, reject) => {
    const token = localStorage.getItem("authToken");
    try {
      // Dispatch the action with INIT type
      dispatch({ type: `${actionType}_INIT` });
      const response = await axios.get(`${baseURL}${url}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          ContentType: "application/json",
        },
      });
      if (response.data.status == 401) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
      } else {
        // Dispatch the action with SUCCESS type
        dispatch({
          type: `${actionType}_SUCCESS`,
          payload: response.data,
        });
        resolve(response.data);
      }
    } catch (error) {
      // Dispatch the action with FAIL type
      dispatch({
        type: `${actionType}_FAIL`,
        payload: error.response,
      });
    }
  });
};

export const put = (url, data, actionType, dispatch) => {
  return new Promise(async (resolve, reject) => {
    const token = localStorage.getItem("authToken");
    try {
      // Dispatch the action with INIT type
      dispatch({ type: `${actionType}_INIT` });
      const response = await axios.put(`${baseURL}${url}`, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          ContentType: "application/json",
        },
      });

      // Dispatch the action with SUCCESS type
      if (response?.data?.status == 401) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
      } else {
        dispatch({
          type: `${actionType}_SUCCESS`,
          payload: response.data,
        });
        resolve(response);
      }
    } catch (error) {
      // Dispatch the action with FAIL type
      dispatch({
        type: `${actionType}_FAIL`,
        payload: error.response,
      });
    }
  });
};

export const deleteapi = (url, actionType, dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Dispatch the action with INIT type
      dispatch({ type: `${actionType}_INIT` });
      const token = localStorage.getItem("authToken");
      const response = await axios.delete(`${baseURL}${url}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          ContentType: "multipart/form-data",
        },
      });
      if (response.data.status == 401) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
      } else {
        // Dispatch the action with SUCCESS type
        dispatch({
          type: `${actionType}_SUCCESS`,
          payload: response.data,
        });
        resolve(response.data);
      }
    } catch (error) {
      // Dispatch the action with FAIL type
      dispatch({
        type: `${actionType}_FAIL`,
        payload: error.response,
      });
    }
  });
};
