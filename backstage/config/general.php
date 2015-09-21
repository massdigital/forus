<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    'defaultTemplateExtensions' => array('html', 'htm', 'xhtml', 'twig'),
    'allowAutoUpdates' => 'false',
	'*' => array(
        'sendPoweredByHeader' => false,
        'allowAutoUpdates' => 'false',
        'cpTrigger' => 'wp-login',
        'generateTransformsBeforePageLoad' => true,
        'resourceTrigger' => '_assets',
        'environmentVariables' => array(
            'assetsBaseUrl' => '/_assets',
            'assetsBasePath' => './_assets',
        )
    ),
    'merrell.masspruebas.com' => array(
        'omitScriptNameInUrls' => true,
        'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => '//merrell.masspruebas.com',
        'cacheMethod' => 'file',

    ),
    'merrellcolombia.com' => array(
        'omitScriptNameInUrls' => true,
        'devMode' => false,
        'useCompressedJs' => true,
        'siteUrl' => 'http://merrellcolombia.com',
        'cacheMethod' => 'file',

    ),
);
