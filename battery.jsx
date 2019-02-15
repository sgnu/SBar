export const command = "pmset -g batt | grep -o \'[0-9]*%\'"

export const refreshFrequency = 30000

export const render = ({output, error}) => {
    return error ? (
        <div>you done fucked up: {String(error)}</div>
    ) : (
        <div class="screen">
            <div class="battery">
                {output}
            </div>
        </div>
    )
}