<?php

	$roadmapStops = array(
		(object) array(
			'date' => 'June 2017',
			'description' => 'Idea Creation + Concept Development',
			'position' => 'top'
		),
		(object) array(
			'date' => 'August 2017',
			'description' => 'Whitepaper Formalization + Landing Page Launch',
			'position' => 'bottom'
		),
		(object) array(
			'date' => 'November 2017',
			'description' => 'Initial Coin Offering (ICO)',
			'position' => 'top'
		),
		(object) array(
			'date' => 'December 2017',
			'description' => 'Building and Stabilizing the Platform',
			'position' => 'bottom'
		),
		(object) array(
			'date' => 'Q1 2018',
			'description' => 'Further Development + Wide Scale Marketing',
			'position' => 'top'
		),
		(object) array(
			'date' => 'Q2 2018',
			'description' => 'Ryfts Platform Launch',
			'position' => 'bottom'
		)
	);

?> <section id="roadmap" class="section-load"> <a name="roadmap" class="local"></a> <div class="section-content"> <div class="container"> <h1 class="section-title">Roadmap</h1> <div class="roadmap-container clearfix"> <?php for ( $n = 0; $n < count($roadmapStops); $n++ ) { ?> <div class="roadmap-stop <?php echo $roadmapStops[$n]->position; ?>"> <div class="roadmap-stop-number"> <span><?php echo $n; ?></span> </div> <div class="roadmap-stop-inner"> <p class="roadmap-stop-stage">Stage <?php echo $n; ?></p> <p class="roadmap-stop-date"><?php echo $roadmapStops[$n]->date; ?></p> <p class="roadmap-stop-description"><?php echo $roadmapStops[$n]->description; ?></p> </div> <div class="roadmap-stop-anchor-point"></div> </div> <?php } ?> <div class="roadmap-line"></div> </div> </div> </div> </section>