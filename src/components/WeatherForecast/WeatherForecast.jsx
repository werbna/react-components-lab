import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherData from "../WeatherData/WeatherData.jsx";
import './WeatherForecast.css';

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <WeatherIcon img={props.img} imgAlt={props.imgAlt} />
      <WeatherData day={props.day} conditions={props.conditions} time={props.time} />
    </div>
  );
};

export default WeatherForecast;
