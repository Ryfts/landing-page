<?php

$press = array(
    (object) array(
        'logo' => 'assets/images/press/forbes.png',
        'link' => 'https://forbes.com'
    ),
    (object) array(
        'logo' => 'assets/images/press/forbes.png',
        'link' => 'https://forbes.com'
    ),
    (object) array(
        'logo' => 'assets/images/press/forbes.png',
        'link' => 'https://forbes.com'
    ),
    (object) array(
        'logo' => 'assets/images/press/forbes.png',
        'link' => 'https://forbes.com'
    )
);
?>


<section id="press" class="section-load">
    <a name="press" class="local"></a>
    <div class="section-content">
        <div class="container">
            <h1 class="section-title">As seen on</h1>

            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="logos center-block">
                        <?php for ( $n = 0; $n < count($press); $n++ ) { ?>
                            <a href="<?php echo $press[$n]->link ?>">
                                <div
                                    class="logo"
                                    style='background-image: url("<?php echo $press[$n]->logo ?>");'
                                ></div>
                            </a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>