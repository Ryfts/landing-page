<?php

	$roadmapStops = array(
		(object) array(
			'date' => 'August 2017',
			'description' => 'Idea Creation + Concept Development',
			'position' => 'top'
		),
		(object) array(
			'date' => 'February 2018',
			'description' => 'Going public',
			'position' => 'bottom'
		),
		(object) array(
			'date' => 'April 2018',
			'description' => 'Pre Initial Coin Offering (pre-ICO)',
			'position' => 'top'
		),
		(object) array(
			'date' => 'May 2018',
			'description' => 'Initial Coin Offering (ICO)',
			'position' => 'bottom'
		),
		(object) array(
			'date' => 'Q3 2018',
			'description' => 'Building and Stabilizing the Platform',
			'position' => 'top'
		),
		(object) array(
			'date' => 'Q4 2018',
			'description' => 'Platform Launch + Wide Scale Marketing',
			'position' => 'bottom'
		)
	);

?>


		<section id="roadmap" class="section-load">
			<a name="roadmap" class="local"></a>
			<div class="section-content">
				<div class="container">
					<h1 class="section-title">Roadmap</h1>
					<div class="roadmap-container clearfix">

						<?php for ( $n = 0; $n < count($roadmapStops); $n++ ) { ?>
						<div class="roadmap-stop <?php echo $roadmapStops[$n]->position; ?>">
							<div class="roadmap-stop-number">
								<span><?php echo $n; ?></span>
							</div>
							<div class="roadmap-stop-inner">
								<p class="roadmap-stop-stage">Stage <?php echo $n; ?></p>
								<p class="roadmap-stop-date"><?php echo $roadmapStops[$n]->date; ?></p>
								<p class="roadmap-stop-description"><?php echo $roadmapStops[$n]->description; ?></p>
							</div>
							<div class="roadmap-stop-anchor-point"></div>
						</div>
						<?php } ?>

						<div class="roadmap-line"></div>

					</div>
				</div>
			</div>
		</section>