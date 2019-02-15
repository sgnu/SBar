export const command = "date +\"%A, %B %e\""

export const refreshFrequency = 120000

export const render = ({output, error}) => {
    return error ? (
        <div>you done fucked up: {String(error)}</div>
    ) : (
        <div class="screen">
            <div class="date">
                {output}
            </div>
        </div>
    )
}