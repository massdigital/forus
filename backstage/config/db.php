<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */



return array(
    '*' => array(
        'tablePrefix' => 'tRm3oX',
    ),
   
    'merrell.masspruebas.com' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => '56mySQLmadmin&',
        'database' => 'stage_merrell',
    ),
    'merrellcolombia.com' => array(
        'server' => 'localhost',
        'user' => 'merrelKxbdJsFXE8',
        'password' => 'eZbHBqlm8KSUXGk',
        'database' => 'merrell_mauriciodulce_com',
    )
);