import './WeatherForecast.css';

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <h2>Day of the Week: {props.day}</h2>
      <img src={props.img} alt={props.imgAlt} />
      <p>
        <span>Conditions: {props.conditions}</span> - Current weather conditions
      </p>
      <p>
        <span>Time: {props.time}</span> - Time of day
      </p>
    </div>
  );
};

export default WeatherForecast;