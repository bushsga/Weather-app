import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
      <div className="weather max-w-md mx-auto mt-8  p-6 bg-black bg-opacity-50 rounded-xl">
        <div className="container-top flex justify-between">
        <div className="top">
            <div>
            <p className="city text-xl font-bold text-slate-50">{data.city}</p>
            <p className="weather-description font-bold text-slate-100">{data.weather[0].description}</p> 
            </div>
            <img alt="weather" className="weather-icon" src={`icon/${data.weather[0].icon}.png`}/>
         </div>
         <div>
         <p className="temperature text-4xl font-bold text-red-500">{Math.round(data.main.temp)}°C</p>
         </div>
        </div>

         <div className="bottom">
           <div className="details text-center">
               <div className="parameter-row">
                <span className="parameter-label font-bold text-yellow-100">Details</span>
               </div>
               <div className="parameter-row text-rose-400">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value pl-20">{Math.round(data.main.feels_like)}°C</span>
               </div>
               <div className="parameter-row text-rose-400">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value pl-20">{data.wind.speed}m/s</span>
               </div>
               <div className="parameter-row text-rose-400">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value pl-20">{data.main.humidity}%</span>
               </div>
               <div className="parameter-row text-rose-400">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value pl-20">{data.main.pressure} hPa</span>
               </div>
           </div>
         </div>
      </div>
    );
}

export default CurrentWeather;