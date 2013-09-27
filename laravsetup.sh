#!/bin/bash
clear
curl -sS https://getcomposer.org/installer | php
php composer.phar install
chmod 777 -R vendor/
chmod 777 -R app/
