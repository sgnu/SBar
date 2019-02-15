export const command = "bash SBar/scripts/network.sh"

export const refreshFrequency = 300000

export const render = ({output, error}) => {
    return error ? (
        <div>you done fucked up: {String(error)}</div>
    ) : (
        <div class="screen">
            <div class="network">
                {output}
            </div>
        </div>
    )
}