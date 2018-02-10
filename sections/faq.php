<?php $faqsOnLeft = json_decode(file_get_contents("json/faq-left.json"), true); ?>
<?php $faqsOnRight = json_decode(file_get_contents("json/faq-right.json"), true); ?>

<section id="faq" class="section-load">
			<a name="faq" class="local"></a>
			<div class="section-content">
				<div class="container">
					<div class="col-xs-12 col-sm-12-col-md-12 col-lg-12">
						<h1 class="section-title">Faq</h1>
					</div>

					<div class="hidden-xs hidden-sm col-md-2 col-lg-2 faq-icon">
						<img src="assets/images/faq/question-mark-icon.svg" />
					</div>

					<div class="col-xs-12 col-sm-6 col-md-5 col-lg-5 faq-box">
                        <?php foreach($faqsOnLeft as $faq): ?>
                            <div class="faq-element">
                                <a href="#" title="Expand FAQ information" class="faq-element-toggle prevent-default">
                                    <span class="faq-element-toggle-title"><?php echo $faq['question'] ?></span>
                                    <span class="faq-element-toggle-icon"><i class="fa fa-chevron-down"></i></span>
                                </a>
                                <div class="faq-element-content">
                                    <div class="faq-element-content-inner">
                                        <p><?php echo $faq['answer'] ?></p>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
					</div>

					<div class="col-xs-12 col-sm-6 col-md-5 col-lg-5 faq-box">
                        <?php foreach($faqsOnRight as $faq): ?>
                            <div class="faq-element">
                                <a href="#" title="Expand FAQ information" class="faq-element-toggle prevent-default">
                                    <span class="faq-element-toggle-title"><?php echo $faq['question'] ?></span>
                                    <span class="faq-element-toggle-icon"><i class="fa fa-chevron-down"></i></span>
                                </a>
                                <div class="faq-element-content">
                                    <div class="faq-element-content-inner">
                                        <p><?php echo $faq['answer'] ?></p>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
					</div>
				</div>
			</div>
		</section>