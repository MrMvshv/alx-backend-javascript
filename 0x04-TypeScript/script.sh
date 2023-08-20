#!/bin/bash

for i in {0..5}; do
    cd "task_${i}"
    pwd
    echo "in the dir"
    npm install
    echo "installed"
    cd ..
    pwd
    echo "done ${i}"
done
