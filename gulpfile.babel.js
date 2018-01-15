//init plugins
var plugin_gulp = require('gulp');
var plugin_autoprefix = require('gulp-autoprefixer');
var plugin_clean = require('gulp-clean');
var plugin_minify_css = require('gulp-clean-css');
var plugin_concat = require('gulp-concat');
var plugin_copy = require('gulp-copy');
var plugin_minify_html = require('gulp-htmlmin');
var plugin_inject = require('gulp-inject');
var plugin_inject_string = require('gulp-inject-string');
var plugin_minify_js = require('gulp-uglify');
var plugin_run_sequence = require('run-sequence');

var gutil = require('gulp-util');


//config file
var config = {
	date: new Date().getTime(),

	prod: {
		path: {
			dist: 'dist/'
		},
		minify: {
			html: {
				removeComments: true,
				collapseWhitespace: true,
				conservativeCollapse: true
			},
			css: {
				advanced: false,
				aggressiveMerging: false
			},
			js: {
				compress: {
					properties: false,
					dead_code: true,
					drop_debugger: true,
					unsafe: false,
					conditionals: true,
					comparisons: true,
					evaluate: true,
					booleans: true,
					loops: true,
					unused: true,
					hoist_funs: true,
					hoist_vars: false,
					if_return: true,
					join_vars: true,
					cascade: true,
					side_effects: true,
					warnings: false,
					global_defs: {}
				}
			}
		}
	}

};

var settings = {};


//default gulp task
plugin_gulp.task('default', function() {
	console.log(' ');console.log(' ');console.log(' ');console.log(' ');
	console.log('----------------------------------------------------------------------');
	console.log('----------------------------------------------------------------------');
	console.log('----------------------------------------------------------------------');
	console.log('- gulp production (gulp prod):');
	console.log('  - cleans dist/ folder');
	console.log('  - copies the files to dist folder');
	console.log('  - minifies CSS and JS files');
	console.log('  - concats minified CSS and JS files');
	console.log('  - removes http request to old splitted CSS and JS files, and writes a link to the concat & minified CSS and JS files');
	console.log('  - adds timestamp to font css files http request');
	console.log('  - minifies HTML');
	console.log('  - remove developing files (splitted css and js)');
	console.log(' ');
	console.log('----------------------------------------------------------------------');
	console.log(' ');console.log(' ');console.log(' ');console.log(' ');
});





//starting points
	plugin_gulp.task('prod', function() {
		settings = config.prod;
		return plugin_run_sequence(
			'task_clean',
			'task_copy_files',
			['task_minify_css', 'task_minify_js'],
			['task_concatenate_css', 'task_concatenate_js'],
			['task_inject_new_files_in_head', 'task_inject_new_files_in_footer'],
			'task_add_timestamps',
			'task_minify_html',
			'task_remove_developing_files'
		);
	});






//clean dist folder
	plugin_gulp.task('task_clean', function() {
		return plugin_gulp.src( settings.path.dist + '*', {read:false} )
			.pipe( plugin_clean( {force: true} ) );
	});




//copy all the files to the new (settings.path.dist) folder
	plugin_gulp.task('task_copy_files', function() {
		return plugin_gulp.src([
			'assets/**/*',
			'css/**/*',
			'includes/**/*',
			'js/**/*',
			'json/**/*',
			'sections/**/*',
			'index.php',
			'terms-and-conditions.php',
			'privacy.php'
		])
		.pipe( plugin_copy( settings.path.dist ) );
	});




//minify and concatenate js
	plugin_gulp.task('task_minify_js', function() {
		return plugin_gulp.src([
			settings.path.dist + 'js/jquery.min.js',
			settings.path.dist + 'js/jquery.easingPlugin.min.js',
			settings.path.dist + 'js/slick.min.js',
			settings.path.dist + 'js/vivus.min.js',
			settings.path.dist + 'js/bootstrap.min.js',
			settings.path.dist + 'js/chart.min.js',
			settings.path.dist + 'js/ajaxChimp.min.js',
			settings.path.dist + 'js/bodymovin.js',
			settings.path.dist + 'js/functions-library.js',
			settings.path.dist + 'js/jquery.full-height.js',
			settings.path.dist + 'js/jquery.equalHeight.js',
			settings.path.dist + 'js/jquery.scrollManager.js',
			settings.path.dist + 'js/jquery.display.js',
			settings.path.dist + 'js/jquery.sectionLoader.js',
			settings.path.dist + 'js/jquery.preventDefault.js',
			settings.path.dist + 'js/app.cover.js',
			settings.path.dist + 'js/app.home.js',
			settings.path.dist + 'js/app.header.js',
			settings.path.dist + 'js/app.menu.js',
			settings.path.dist + 'js/app.advantages.js',
			//settings.path.dist + 'js/app.token-sale.js',
			settings.path.dist + 'js/app.token.js',
			settings.path.dist + 'js/app.faq.js',
			settings.path.dist + 'js/app.contact.js'/*,
			settings.path.dist + 'js/app.widget.js'*/
		])
		.pipe( plugin_minify_js( settings.minify.js ) )
		//.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); }) //print error (if any)
		.pipe( plugin_gulp.dest( settings.path.dist + 'js/' ) );
	});
	plugin_gulp.task('task_concatenate_js', function() {
		return plugin_gulp.src([
			settings.path.dist + 'js/jquery.min.js',
			settings.path.dist + 'js/jquery.easingPlugin.min.js',
			settings.path.dist + 'js/slick.min.js',
			settings.path.dist + 'js/vivus.min.js',
			settings.path.dist + 'js/bootstrap.min.js',
			settings.path.dist + 'js/chart.min.js',
			settings.path.dist + 'js/ajaxChimp.min.js',
			settings.path.dist + 'js/bodymovin.js',
			settings.path.dist + 'js/functions-library.js',
			settings.path.dist + 'js/jquery.full-height.js',
			settings.path.dist + 'js/jquery.equalHeight.js',
			settings.path.dist + 'js/jquery.scrollManager.js',
			settings.path.dist + 'js/jquery.display.js',
			settings.path.dist + 'js/jquery.sectionLoader.js',
			settings.path.dist + 'js/jquery.preventDefault.js',
			settings.path.dist + 'js/app.cover.js',
			settings.path.dist + 'js/app.home.js',
			settings.path.dist + 'js/app.header.js',
			settings.path.dist + 'js/app.menu.js',
			settings.path.dist + 'js/app.advantages.js',
			//settings.path.dist + 'js/app.token-sale.js',
			settings.path.dist + 'js/app.token.js',
			settings.path.dist + 'js/app.faq.js',
			settings.path.dist + 'js/app.contact.js',
			settings.path.dist + 'js/app.widget.js'
		])
		.pipe( plugin_concat( 'ryfts.js' ) )
		.pipe( plugin_gulp.dest( settings.path.dist + 'js/' ) );
	});




//minify and concatenate css
	plugin_gulp.task('task_minify_css', function() {
		return plugin_run_sequence(['task_minify_fonts', 'task_minify_css_files']);
	});
		plugin_gulp.task('task_minify_fonts', function() {
			return plugin_run_sequence(['task_minify_gotham', 'task_minify_ryfts_font', 'task_minify_fontawesome']);
		});
			plugin_gulp.task('task_minify_gotham', function() {
				return plugin_gulp.src(
					settings.path.dist + 'assets/fonts/gotham/stylesheet.css'
				).pipe( plugin_gulp.dest( settings.path.dist + 'assets/fonts/gotham/' ) );
			})
			plugin_gulp.task('task_minify_ryfts_font', function() {
				return plugin_gulp.src(
					settings.path.dist + 'assets/fonts/ryfts-iconic-font/style.css'
				).pipe( plugin_gulp.dest( settings.path.dist + 'assets/fonts/ryfts-iconic-font/' ) );
			})
			plugin_gulp.task('task_minify_fontawesome', function() {
				return plugin_gulp.src(
					settings.path.dist + 'assets/fonts/fontawesome/css/font-awesome.min.css'
				).pipe( plugin_gulp.dest( settings.path.dist + 'assets/fonts/fontawesome/' ) );
			})
		plugin_gulp.task('task_minify_css_files', function() {
			return plugin_gulp.src([
				settings.path.dist + 'css/bootstrap.min.css',
				settings.path.dist + 'css/slick.css',
				settings.path.dist + 'css/slick-theme.css',
				settings.path.dist + 'css/base.css',
				settings.path.dist + 'css/formal-text.css',
				settings.path.dist + 'css/forms.css',
				settings.path.dist + 'css/sections.css',
				settings.path.dist + 'css/section-load.css',
				settings.path.dist + 'css/buttons.css',
				settings.path.dist + 'css/header.css',
				settings.path.dist + 'css/menu.css',
				settings.path.dist + 'css/cover.css',
				settings.path.dist + 'css/advantages.css',
				settings.path.dist + 'css/about-us.css',
				//settings.path.dist + 'css/token-sale.css',
				settings.path.dist + 'css/widget.css',
				settings.path.dist + 'css/token.css',
				settings.path.dist + 'css/roadmap.css',
				settings.path.dist + 'css/team.css',
				settings.path.dist + 'css/faq.css',
				settings.path.dist + 'css/contact.css',
				settings.path.dist + 'css/footer.css'
			])
			.pipe( plugin_autoprefix() )
			.pipe( plugin_minify_css( settings.minify.css ) )
			.pipe( plugin_gulp.dest( settings.path.dist + 'css/' ) );
		});
	plugin_gulp.task('task_concatenate_css', function() {
		return plugin_gulp.src([
			settings.path.dist + 'css/bootstrap.min.css',
			settings.path.dist + 'css/slick.css',
			settings.path.dist + 'css/slick-theme.css',
			settings.path.dist + 'css/base.css',
			settings.path.dist + 'css/formal-text.css',
			settings.path.dist + 'css/forms.css',
			settings.path.dist + 'css/sections.css',
			settings.path.dist + 'css/section-load.css',
			settings.path.dist + 'css/buttons.css',
			settings.path.dist + 'css/header.css',
			settings.path.dist + 'css/menu.css',
			settings.path.dist + 'css/cover.css',
			settings.path.dist + 'css/advantages.css',
			settings.path.dist + 'css/about-us.css',
			//settings.path.dist + 'css/token-sale.css',
			settings.path.dist + 'css/widget.css',
			settings.path.dist + 'css/token.css',
			settings.path.dist + 'css/roadmap.css',
			settings.path.dist + 'css/team.css',
			settings.path.dist + 'css/faq.css',
			settings.path.dist + 'css/contact.css',
			settings.path.dist + 'css/footer.css'
		])
		.pipe( plugin_concat( 'ryfts.css' ) )
		.pipe( plugin_gulp.dest( settings.path.dist + 'css/' ) );
	});




//inject css & js
	plugin_gulp.task('task_inject_new_files_in_head', function() {
		//injecting css in head
		var target = plugin_gulp.src( settings.path.dist + 'includes/head.php');

		return target.pipe( plugin_inject( plugin_gulp.src( settings.path.dist + 'css/ryfts.css', {read:false}) ) )
			.pipe( plugin_inject_string.replace( '/' + settings.path.dist + 'css/ryfts.css', 'css/ryfts.css?v' + config.date ) )
			.pipe( plugin_gulp.dest( settings.path.dist + 'includes/' ) );
	});
	plugin_gulp.task('task_inject_new_files_in_footer', function() {
		//injecting js in footer
		var target = plugin_gulp.src(settings.path.dist + 'includes/footer.php');

		return target.pipe( plugin_inject( plugin_gulp.src( settings.path.dist + 'js/ryfts.js', {read:false}) ) )
			.pipe( plugin_inject_string.replace( '/' + settings.path.dist + 'js/ryfts.js', 'js/ryfts.js?v' + config.date ) )
			.pipe( plugin_gulp.dest( settings.path.dist + 'includes/' ) );
	});






//adding timestamps in other files
	plugin_gulp.task('task_add_timestamps', function() {
		var target = plugin_gulp.src( settings.path.dist + 'includes/head.php');
		//injecting timestamp
		return target.pipe( plugin_inject_string.replace( 'TIMESTAMP', config.date ) )
			.pipe( plugin_gulp.dest( settings.path.dist + 'includes/' ) );
	});





//compress html output
	plugin_gulp.task('task_minify_html', function() {
		return plugin_run_sequence(['task_minify_html_includes','task_minify_html_sections']);
	});

	plugin_gulp.task('task_minify_html_includes', function() {
		return plugin_gulp.src(settings.path.dist + 'includes/*.php')
			.pipe( plugin_minify_html( settings.minify.html ) )
			.pipe( plugin_gulp.dest( settings.path.dist + 'includes/' ) );
	});
	plugin_gulp.task('task_minify_html_sections', function() {
		return plugin_gulp.src(settings.path.dist + 'sections/*.php')
			.pipe( plugin_minify_html( settings.minify.html ) )
			.pipe( plugin_gulp.dest( settings.path.dist + 'sections/' ) );
	});



//remove developing files (after minifying and compressing..)
	plugin_gulp.task('task_remove_developing_files', function() {
		return plugin_gulp.src([
			settings.path.dist + 'css/coming-soon.css',
			settings.path.dist + 'css/bootstrap.min.css',
			settings.path.dist + 'css/slick.css',
			settings.path.dist + 'css/slick-theme.css',
			settings.path.dist + 'css/base.css',
			settings.path.dist + 'css/formal-text.css',
			settings.path.dist + 'css/forms.css',
			settings.path.dist + 'css/sections.css',
			settings.path.dist + 'css/section-load.css',
			settings.path.dist + 'css/buttons.css',
			settings.path.dist + 'css/header.css',
			settings.path.dist + 'css/menu.css',
			settings.path.dist + 'css/cover.css',
			settings.path.dist + 'css/advantages.css',
			settings.path.dist + 'css/about-us.css',
			//settings.path.dist + 'css/token-sale.css',
			settings.path.dist + 'css/widget.css',
			settings.path.dist + 'css/token.css',
			settings.path.dist + 'css/roadmap.css',
			settings.path.dist + 'css/team.css',
			settings.path.dist + 'css/faq.css',
			settings.path.dist + 'css/contact.css',
			settings.path.dist + 'css/footer.css',

			settings.path.dist + 'js/jquery.min.js',
			settings.path.dist + 'js/jquery.easingPlugin.min.js',
			settings.path.dist + 'js/slick.min.js',
			settings.path.dist + 'js/vivus.min.js',
			settings.path.dist + 'js/bootstrap.min.js',
			settings.path.dist + 'js/chart.min.js',
			settings.path.dist + 'js/ajaxChimp.min.js',
			settings.path.dist + 'js/bodymovin.js',
			settings.path.dist + 'js/functions-library.js',
			settings.path.dist + 'js/jquery.full-height.js',
			settings.path.dist + 'js/jquery.equalHeight.js',
			settings.path.dist + 'js/jquery.scrollManager.js',
			settings.path.dist + 'js/jquery.display.js',
			settings.path.dist + 'js/jquery.sectionLoader.js',
			settings.path.dist + 'js/jquery.preventDefault.js',
			settings.path.dist + 'js/app.cover.js',
			settings.path.dist + 'js/app.home.js',
			settings.path.dist + 'js/app.header.js',
			settings.path.dist + 'js/app.menu.js',
			settings.path.dist + 'js/app.advantages.js',
			//settings.path.dist + 'js/app.token-sale.js',
			settings.path.dist + 'js/app.token.js',
			settings.path.dist + 'js/app.faq.js',
			settings.path.dist + 'js/app.contact.js',
			settings.path.dist + 'js/app.widget.js'
		], {read:false} )
		.pipe( plugin_clean( {force:true} ) );
	});