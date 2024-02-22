import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  // importing  production url
  const BASE_PRODUCTION_URL = import.meta.env.VITE_BASE_PRODUCTION_URL;

  const BASE_DEV_URL = import.meta.env.VITE_DEV_URL;

  // Here we'll get to know which ennvironment we are working
  const CURRENT_ENVIRONMENT = import.meta.env.MODE;
  console.log(`Production Url`, BASE_PRODUCTION_URL);
  console.log(`Development url`, BASE_DEV_URL);

  const Base_URL =
    CURRENT_ENVIRONMENT === "production" ? BASE_PRODUCTION_URL : BASE_DEV_URL;

  // Get request
  // 1st approach is async function

  // async function getData() {
  //   try {
  //     let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // 2nd approach is promise

  function getData() {
    axios
      .get(`${Base_URL}/posts`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // delete request in local database with the help of baseurl

  // function deleteData() {
  //   axios
  //     .get(`${Base_URL}/posts/1`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // Post request
  async function makePostRequest() {
    try {
      let res = await axios({
        method: "post",
        url: `${Base_URL}/posts`,
        data: {
          name: "morpheus",
          job: "leader",
        },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // Put request
  async function makePutRequest() {
    try {
      let res = await axios({
        method: "put",
        url: `${Base_URL}/posts/4efc`,
        data: {
          firstName: "Batman",
          lastName: "wayne",
          email: "wayne@gmail.com",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function makePatchRequest() {
    try {
      let res = await axios({
        method: "patch",
        url: `${Base_URL}/posts/4efc`,
        data: {
          first_name: "Shiva",
          last_name: "Shakti",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // Delete request
  async function makeDeleteRequest() {
    try {
      let res = await axios({
        method: "delete",
        url: `${Base_URL}/posts/4efc`,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // // Params
  async function getUsersData() {
    try {
      let res = await axios({
        method: "get",
        url: `${Base_URL}/posts`,
        params: {
          id: 2,
        },
      });
      console.log(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Current Environment : {CURRENT_ENVIRONMENT}</h1>
      <button onClick={getData}>Get Data</button>
      <button onClick={getUsersData}>Get Data using params Obj</button>

      <button onClick={makePostRequest}>POST Request in reqres</button>
      <button onClick={makePutRequest}>PUT REQUEST</button>
      <button onClick={makePatchRequest}>PATCH REQUEST</button>

      <button onClick={makeDeleteRequest}>DELETE REQUEST</button>
      {/* <button onClick={deleteData}>DELETE REQUEST from local database with help of base url</button> */}
    </>
  );
}

export default App;
