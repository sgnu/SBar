tell application "Spotify"
    set artistName to artist of current track as string
    set trackName to name of current track as string
end tell

return artistName & " - " & trackName