<?php

	if ( $_SERVER['HTTP_HOST'] != 'localhost' && $_SERVER['HTTP_HOST'] != 'ryfts.guillerming.es' && $_SERVER['HTTP_HOST'] != 'guillerming.es' ) {
		$dev = false;
	} else {
		$dev = true;
	}

?> <!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"> <title><?php echo $title; ?></title> <meta name="description" content="<?php echo $description; ?>"> <meta name="keywords" content="<?php echo $keywords; ?>"> <link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-icon-57x57.png?v=1515523212327"> <link rel="apple-touch-icon" sizes="60x60" href="assets/favicon/apple-icon-60x60.png?v=1515523212327"> <link rel="apple-touch-icon" sizes="72x72" href="assets/favicon/apple-icon-72x72.png?v=1515523212327"> <link rel="apple-touch-icon" sizes="76x76" href="assets/favicon/apple-icon-76x76.png?v=1515523212327"> <link rel="apple-touch-icon" sizes="114x114" href="assets/favicon/apple-icon-114x114.png?v=1515523212327"> <link rel="apple-touch-icon" sizes="120x120" href="assets/favicon/apple-icon-120x120.png?v=1515523212327"> <link rel="apple-touch-icon" sizes="144x144" href="assets/favicon/apple-icon-144x144.png?v=1515523212327"> <link rel="apple-touch-icon" sizes="152x152" href="assets/favicon/apple-icon-152x152.png?v=1515523212327"> <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-icon-180x180.png?v=1515523212327"> <link rel="icon" type="image/png" sizes="192x192" href="assets/favicon/android-icon-192x192.png?v=1515523212327"> <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png?v=1515523212327"> <link rel="icon" type="image/png" sizes="96x96" href="assets/favicon/favicon-96x96.png?v=1515523212327"> <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png?v=1515523212327"> <link rel="manifest" href="assets/favicon/manifest.json?v=1515523212327"> <meta name="msapplication-TileColor" content="#00a4e4"> <meta name="msapplication-TileImage" content="assets/favicon/ms-icon-144x144.png?v=1515523212327"> <meta name="theme-color" content="#00a4e4"> <link type="text/css" rel="stylesheet" href="assets/fonts/gotham/stylesheet.css?v=1515523212327"> <link type="text/css" rel="stylesheet" href="assets/fonts/ryfts-iconic-font/style.css?v=1515523212327"> <link type="text/css" rel="stylesheet" href="assets/fonts/fontawesome/css/font-awesome.min.css?v=1515523212327"> <link rel="stylesheet" href="css/ryfts.css?v1515523212327"> <?php if ( !$dev ) { ?> <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111245250-1"></script> <script> window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-111245250-1'); </script> <?php } ?> </head> <body id="<?php echo $bodyID; ?>">