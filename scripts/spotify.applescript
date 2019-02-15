tell application "Spotify"
    set artistName to artist of current track as string
    set trackName to name of current track as string
    set status to player state as string
end tell

if status = "playing" then
    return "♫ " & artistName & " - " & trackName
else
    return artistName & " - " & trackName
end if