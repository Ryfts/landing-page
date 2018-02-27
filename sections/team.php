<?php

	$team = array(
		(object) array(
			'picture' => 'assets/images/team/hossam_tlass.jpg',
			'name' => 'Hossam Tlass',
			'position' => 'Founder',
			'links' => array(
				(object) array(
					'network' => 'Twitter',
					'icon_class' => 'fa fa-twitter',
					'link' => 'https://twitter.com/IVTlass'
				),
				(object) array(
					'network' => 'Linkedin',
					'icon_class' => 'fa fa-linkedin',
					'link' => 'https://www.linkedin.com/in/ivtlass/'
				)
			)
		),
		(object) array(
			'picture' => 'assets/images/team/belma.jpg',
			'name' => 'Belma Gutlic',
			'position' => 'CTO',
			'links' => array(
				(object) array(
					'network' => 'Github',
					'icon_class' => 'fa fa-github',
					'link' => 'https://github.com/morrigan'
				),
				(object) array(
					'network' => 'Linkedin',
					'icon_class' => 'fa fa-linkedin',
					'link' => 'https://www.linkedin.com/in/belmagutlic/'
				)
			)
		),
		(object) array(
			'picture' => 'assets/images/team/toyohiko_furukawa.jpg',
			'name' => 'Toyohiko Furukawa',
			'position' => 'Chief Architect',
			'links' => array(
				(object) array(
					'network' => 'Twitter',
					'icon_class' => 'fa fa-twitter',
					'link' => 'https://twitter.com/toyocryptic'
				),
				(object) array(
					'network' => 'Linkedin',
					'icon_class' => 'fa fa-linkedin',
					'link' => 'https://www.linkedin.com/in/toyohiko-furukawa-317656153/'
				)
			)
		),
		(object) array(
            'picture' => 'assets/images/team/masato_ozaki.jpg',
            'name' => 'Masato Ozaki',
            'position' => 'DevOps',
            'links' => array(
                (object) array(
                    'network' => 'Twitter',
                    'icon_class' => 'fa fa-twitter',
                    'link' => 'https://twitter.com/MsMasatozaki'
                ),
                (object) array(
                    'network' => 'Linkedin',
                    'icon_class' => 'fa fa-linkedin',
                    'link' => 'https://www.linkedin.com/in/masato-ozaki-7a3657153/'
                )
            )
        ),
		(object) array(
			'picture' => 'assets/images/team/yoshohito_aoki.jpg',
			'name' => 'Yoshohito Aoki',
			'position' => 'Advisor & Big data specialist',
			'links' => array(
				(object) array(
					'network' => 'Twitter',
					'icon_class' => 'fa fa-twitter',
					'link' => 'https://twitter.com/Yoshihito_Aoki'
				),
				(object) array(
					'network' => 'Linkedin',
					'icon_class' => 'fa fa-linkedin',
					'link' => 'https://www.linkedin.com/in/yoshihito-aoki-483998153/'
				)
			)
		),
		(object) array(
			'picture' => 'assets/images/team/samar_haddad.jpg',
			'name' => 'Samar Haddad',
			'position' => 'Creative director',
			'links' => array(
				(object) array(
					'network' => 'Linkedin',
					'icon_class' => 'fa fa-linkedin',
					'link' => 'https://www.linkedin.com/in/samar-haddad-31201521/'
				)
			)
		),
		(object) array(
			'picture' => 'assets/images/team/guillermo_siles.jpg',
			'name' => 'Guillermo Siles',
			'position' => 'Frontend developer',
			'links' => array(
				(object) array(
					'network' => 'Twitter',
					'icon_class' => 'fa fa-twitter',
					'link' => 'https://www.twitter.com/geekllerming'
				),
				(object) array(
					'network' => 'Linkedin',
					'icon_class' => 'fa fa-linkedin',
					'link' => 'https://www.linkedin.com/in/guillerming/'
				)
			)
		),
		(object) array(
			'picture' => 'assets/images/team/janica_san_juan.jpg',
			'name' => 'Janica San Juan',
			'position' => 'Marketing manager',
			'links' => array(
				(object) array(
					'network' => 'Linkedin',
					'icon_class' => 'fa fa-linkedin',
					'link' => 'https://www.linkedin.com/in/janica-san-juan-9726ba101/'
				)
			)
		),
		(object) array(
			'picture' => 'assets/images/team/majid.jpg',
			'name' => 'Majid Albunni',
			'position' => 'Communication advisor',
			'links' => array(
				(object) array(
					'network' => 'Linkedin',
					'icon_class' => 'fa fa-linkedin',
					'link' => 'https://www.linkedin.com/in/majid-albunni/'
				)
			)
		),
		(object) array(
			'picture' => 'assets/images/team/applicature.jpg',
			'name' => 'Applicature',
			'position' => 'Blockchain consulting',
			'links' => array(
				(object) array(
					'network' => 'Twitter',
					'icon_class' => 'fa fa-twitter',
					'link' => 'https://www.twitter.com/applicature'
				),
				(object) array(
					'network' => 'Link',
					'icon_class' => 'fa fa-link',
					'link' => 'https://applicature.com'
				)
			)
		)
			
	);

?>


		<section id="team" class="section-load">
			<a name="team" class="local"></a>
			<div class="section-content">
				<div class="container">
					<h1 class="section-title">Meet the Ryfts Team</h1>

					<div class="team-box">
						<div class="row">

							<?php for ( $n = 0; $n < count($team); $n++ ) { ?>
							<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 team-member-box">
								<div class="team-member-picture-box">
									<div class="team-member-picture">
										<div class="team-member-picture-inner" style="background-image: url(<?php echo $team[$n]->picture; ?>);"></div>
									</div>
									<div class="team-member-picture-frame"></div>
								</div>
								<p class="team-member-name"><?php echo $team[$n]->name; ?></p>
								<p class="team-member-position"><?php echo $team[$n]->position; ?></p>
								<ul class="team-member-social-networks">
									<?php for ( $i = 0; $i < count( $team[$n]->links ); $i++ ) { ?>
									<li><a href="<?php echo $team[$n]->links[$i]->link; ?>" title="<?php echo $team[$n]->name; ?> on <?php echo $team[$n]->links[$i]->network; ?>" target="_blank" rel="nofollow"><i class="<?php echo $team[$n]->links[$i]->icon_class; ?>"></i></a></li>
									<?php } ?>
								</ul>
							</div>
							<?php } ?>

						</div>
					</div>
				</div>
			</div>
		</section>