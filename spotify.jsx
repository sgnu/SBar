export const command = "osascript SBar/scripts/spotify.applescript"

export const refreshFrequency = 1000

export const render = ({output, error}) => {
    return error ? (
        <div>you done fucked up: {String(error)}</div>
    ) : (
        <div class="screen">
            <div class="spotify">
                {output}
            </div>
        </div>
    )
}