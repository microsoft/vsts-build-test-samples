#!/bin/bash
pwd
echo Hello from shell script
sleep 2
echo Script is still running
sleep 2
env
echo Oops.  an error occurred >&2
sleep 2
echo Yep.  still here.
sleep 2
echo and ... we are done.
