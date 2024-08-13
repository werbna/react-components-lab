const WeatherData = ({ day, conditions, time }) => {
  return (
    <div>
      <h2>Day : {day}</h2>
      <p>
        <span>Conditions: {conditions}</span> - Current weather conditions
      </p>
      <p>
        <span>Time: {time}</span> - Time of day
      </p>
    </div>
  );
};

export default WeatherData;
