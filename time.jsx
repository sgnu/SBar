export const command = "date +\"%H%M\""

export const refreshFrequency = 5000

export const render = ({output, error}) => {
    return error ? (
        <div>you done fucked up: {String(error)}</div>
    ) : (
        <div class="screen">
            <div class="time">
                🐹 {output}
            </div>
        </div>
    )
}