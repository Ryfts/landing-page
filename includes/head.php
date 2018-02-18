<?php

	if ( $_SERVER['HTTP_HOST'] != 'localhost' && $_SERVER['HTTP_HOST'] != 'ryfts.guillerming.es' && $_SERVER['HTTP_HOST'] != 'guillerming.es' ) {
		$dev = false;
	} else {
		$dev = true;
	}

?>

<!DOCTYPE html>
<!-- htmlmin:ignore --><html lang="en"><!-- htmlmin:ignore -->
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

		<title><?php echo $title; ?></title>
		<meta name="description" content="<?php echo $description; ?>" />
		<meta name="keywords" content="<?php echo $keywords; ?>" />

		<link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-icon-57x57.png?v=TIMESTAMP" />
		<link rel="apple-touch-icon" sizes="60x60" href="assets/favicon/apple-icon-60x60.png?v=TIMESTAMP" />
		<link rel="apple-touch-icon" sizes="72x72" href="assets/favicon/apple-icon-72x72.png?v=TIMESTAMP" />
		<link rel="apple-touch-icon" sizes="76x76" href="assets/favicon/apple-icon-76x76.png?v=TIMESTAMP" />
		<link rel="apple-touch-icon" sizes="114x114" href="assets/favicon/apple-icon-114x114.png?v=TIMESTAMP" />
		<link rel="apple-touch-icon" sizes="120x120" href="assets/favicon/apple-icon-120x120.png?v=TIMESTAMP" />
		<link rel="apple-touch-icon" sizes="144x144" href="assets/favicon/apple-icon-144x144.png?v=TIMESTAMP" />
		<link rel="apple-touch-icon" sizes="152x152" href="assets/favicon/apple-icon-152x152.png?v=TIMESTAMP" />
		<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-icon-180x180.png?v=TIMESTAMP" />
		<link rel="icon" type="image/png" sizes="192x192" href="assets/favicon/android-icon-192x192.png?v=TIMESTAMP" />
		<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png?v=TIMESTAMP" />
		<link rel="icon" type="image/png" sizes="96x96" href="assets/favicon/favicon-96x96.png?v=TIMESTAMP" />
		<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png?v=TIMESTAMP" />
		<link rel="manifest" href="assets/favicon/manifest.json?v=TIMESTAMP" />
		<meta name="msapplication-TileColor" content="#00a4e4" />
		<meta name="msapplication-TileImage" content="assets/favicon/ms-icon-144x144.png?v=TIMESTAMP" />
		<meta name="theme-color" content="#00a4e4" />

		<link type="text/css" rel="stylesheet" href="assets/fonts/gotham/stylesheet.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="assets/fonts/ryfts-iconic-font/style.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="assets/fonts/fontawesome/css/font-awesome.min.css?v=TIMESTAMP" />

		<!-- inject:css -->
		<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/slick.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/slick-theme.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/base.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/formal-text.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/forms.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/sections.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/section-load.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/buttons.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="node_modules/modal-video/css/modal-video.min.css?v=TIMESTAMP" />

		<link type="text/css" rel="stylesheet" href="css/header.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/menu.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/cover.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/advantages.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/vision.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/press.css?v=TIMESTAMP" />
		<!-- <link type="text/css" rel="stylesheet" href="css/token-sale.css?v=TIMESTAMP" /> -->
		<link type="text/css" rel="stylesheet" href="css/widget.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/token.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/roadmap.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/team.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/faq.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/contact.css?v=TIMESTAMP" />
		<link type="text/css" rel="stylesheet" href="css/footer.css?v=TIMESTAMP" />
		<!-- endinject -->

		<?php if ( !$dev ) { ?>
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-111245250-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-111245250-1');
		</script>
		<?php } ?>
	</head>
	<!-- htmlmin:ignore --><body id="<?php echo $bodyID; ?>"><!-- htmlmin:ignore -->