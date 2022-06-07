import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useFormik } from 'formik';

function Home() {
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get('https://goweather.herokuapp.com/weather/Curitiba')
      .then((response) => {
        setTemp(response.data.temperature)
        setWeather(response.data)
      })
  }, []);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />

    <button type="submit">Submit</button>
  </form>
  );
}

export function Teste() {
  return <h1>Teste</h1>
}

export default Home