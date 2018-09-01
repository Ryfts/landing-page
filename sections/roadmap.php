<?php

	$roadmapStops = array(
		(object) array(
			'date' => 'August 2017',
			'description' => 'Idea creation + Concept development',
			'position' => 'top'
		),
		(object) array(
			'date' => 'February 2018',
			'description' => 'Whitepaper formalization + Landing page launch',
			'position' => 'bottom'
		),
		(object) array(
			'date' => 'October 2018',
			'description' => 'Initial Coin Offering (ICO)',
			'position' => 'top'
		),
		(object) array(
			'date' => 'Q1 2019',
			'description' => 'Building and stabilizing the platform',
			'position' => 'bottom'
		),
		(object) array(
			'date' => 'Q2 2019',
			'description' => 'Further development + Wide scale marketing',
			'position' => 'top'
		),
		(object) array(
			'date' => 'Q4 2019',
			'description' => 'Ryfts platform launch',
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