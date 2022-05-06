#!/usr/bin/env bash
set -e

echo
echo 'Calling reset() function on the CONTRACT'
echo near call \$CONTRACT reset --account_id \$CONTRACT
echo
echo \$CONTRACT is $CONTRACT
echo
near call $CONTRACT reset --account_id $CONTRACT