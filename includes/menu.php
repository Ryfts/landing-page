		<header id="header">
			<div class="container-fluid">
				<div class="row">
					<div id="header-logo-box" class="col-xs-8 col-sm-8 col-md-2 col-lg-2">
						<a href="/" title="Ryfts Home"><img src="assets/images/logo/logo-ryfts-horizontal.svg" alt="Ryfts logo" class="header-logo" /></a>
					</div>
					<?php if ( $menu ) { ?>
					<div id="menu-box" class="hidden-xs hidden-sm col-md-8 col-lg-8">
						<img src="assets/images/logo/logo-ryfts-horizontal.svg" alt="Ryfts logo" class="header-menu-logo" />
						<div id="menu-close-button" class="close-button menu-visibility-switch"></div>
						<ul class="header-menu menu">
							<li><a href="#home" title="Ryfts home" class="prevent-default local-link">Home</a></li>
							<li><a href="#token" title="Token" class="prevent-default local-link">Token</a></li>
							<li><a href="#ico" title="Ryfts ICO" class="prevent-default local-link">Buy Ryfts</a></li>
							<li><a href="#roadmap" title="Ryfts roadmap" class="prevent-default local-link">Roadmap</a></li>
							<li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Whitepaper <span class="caret"></span></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a class="local-link" target="_blank" href="<?php echo $whitepaperLinkEn; ?>">English</a></li>
                                <li><a class="local-link" target="_blank" href="<?php echo $whitepaperLinkCn; ?>">Chinese</a></li>
                              </ul>
                            </li>
							<li><a href="#contact" title="Ryfts contact" class="prevent-default local-link">Contact</a></li>
						</ul>
					</div>

					<div id="menu-button-box" class="col-xs-4 col-sm-4 hidden-md hidden-lg menu-visibility-switch">
						<a href="#menu" title="open-menu" class="menu-button-box prevent-default">
							<div class="bar top"></div>
							<div class="bar center"></div>
							<div class="bar bottom"></div>
						</a>
					</div>
					<?php } ?>
				</div>
			</div>
		</header>
		<div id="header-gap"></div>
