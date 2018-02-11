<?php
	$title = 'Ryfts - Where odds are in your control';
	$description = 'Ryfts, put the odds in your control';
	$keywords = 'blockchain, gambling, raffle, ICO, ethereum';
	$menu = true;

	$bodyID = 'home-page';


	include('includes/head.php');
	include('includes/menu.php');
?>



		<div id="wrapper">
			<?php
				include('sections/cover.php');
				include('sections/advantages.php');
				include('sections/about-us.php');
                include('sections/press.php');
            //include('sections/token-sale.php');
				include('sections/widget.php');
				include('sections/token.php');
				include('sections/roadmap.php');
				include('sections/team.php');
				include('sections/faq.php');
				include('sections/contact.php');
			?>
		</div>



<?php
	include('includes/display.php');
	include('includes/footer.php');
?>