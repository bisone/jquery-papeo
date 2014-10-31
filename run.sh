#!/bin/bash

function do_build(){
    node_modules/.bin/gulp build
}

function do_run(){
    node_modules/.bin/gulp
}

for OPT in $@ ; do

    echo "开始执行： $OPT"

    case $OPT in
        build)
            do_build
            ;;
        run)
            do_run
            ;;

        all)
            do_build
            do_run
            ;;
    esac

done
