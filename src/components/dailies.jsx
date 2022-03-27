function show7DayForecast(props) {
  return (
    <>
      {props.weatherData.daily.map((dayWeather) => {
        return (
          <div className="dayWeather" key={dt}>
            <Character
              temperature={dayWeather.temp.day}
              textDescription={dayWeather.weather.description}
              // convert sunrise from unix to human date time
              sunrise={dayWeather.sunrise}
              image={dayWeather.weather.icon}
              // onDelete={this.props.onDelete}
              // itemNo={position}
            />
          </div>
        );
      })}
    </>
  );
}
