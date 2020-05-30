#!/bin/zsh
maim -s | tee ~/Pictures/screenshots/$(date +%s).png | xclip -sel clip -t image/png
