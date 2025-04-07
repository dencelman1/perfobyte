#!/bin/sh

gcc -O2 -s -o comp/x86-64/kernel comp/x86-64/kernel.c
./comp/x86-64/kernel ./test/types.js
