#!/usr/bin/env bash

exists () {
    type "$1" &> /dev/null ;
}

NETWORK_NAME=$(networksetup -getairportnetwork en0 | cut -c 24-)
LENGTH=`echo -n $NETWORK_NAME | wc -m`

if [ $LENGTH -gt 18 ]
then
	NETWORK_NAME=`echo -n $NETWORK_NAME | cut -c -9`
	NETWORK_NAME+="..."
fi

echo "$NETWORK_NAME"