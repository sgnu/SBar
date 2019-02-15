export const command = "curl -s 'http://api.openweathermap.org/data/2.5/weather?zip=19120&APPID=6b2d34c1fdae064a380bfb26b3d6af1a&units=imperial'"

export const refreshFrequency = 600000

export const render = ({output, error}) => {
    var appData = JSON.parse(output);
    var conditions= appData.weather[0].main;
    var temperature = Math.round(appData.main.temp);


    return error ? (
        <div>you done fucked up: {String(error)}</div>
    ) : (
        <div class="screen">
            <div class="weather">
                {temperature}F {conditions}
            </div>
        </div>
    )
}
