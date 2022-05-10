import React, { useState } from "react";
import axios from "axios";

const encodedToken = localStorage.getItem("token");
const [foo, setFoo] = useState([]);
const fetchFooDetails = async () => {
  try {
    const response = await axios.get(`/api/user/private-route`, {
      headers: {
        authorization: encodedToken, // passing token as an authorization header
      },
    });
    setFoo(response.data.bar);
  } catch (error) {
    console.log(error);
  }
};
