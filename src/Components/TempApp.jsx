import React, { useEffect, useState } from 'react'
import "./css/style.css"

const TempApp = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState('surat');
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3e66e46183fadb9c0bb4b695c2683801`
      const response = await fetch(url)
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main, resJson)
    }
    fetchApi();
  }, [search])
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" name="" id="" className='inputField' value={search} onChange={(event) => { setSearch(event.target.value) }} />
        </div>
        {!city ? (
          <p className='errorMsg'>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city && city.temp}°Cel</h1>
              {city && (
                <h3 className="tempmin_max">
                  Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                </h3>
              )}
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
  
}

export default TempApp;