#!/bin/bash



# Script for recording screencast with ffmpeg and pulseaudio

# Each file is named with current date and time of recording preventing from duplicate names.

# Screen dimensions are automatically set



date=$(date +%F_%H:%M:%S)

dimensions=$(xdpyinfo | grep dimensions | awk '{print $2}')



ffmpeg -f x11grab -s $dimensions -i :0.0 -f pulse -i default ~/Videos/screencast_$date.mkv
