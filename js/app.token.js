//requires charts.js
//requires replaceAll()

function Token() {

	function pieCharts() {

		var DEFAULT_CHART_OPTIONS = {
			legend: {
				display: false
			},
			tooltip: {
				enabled: false
			}
		};

		var legendOptions = {
			template: '<li><span class="legend-icon" style="background-color: {{color}};"></span><span class="legend-label">{{legend_label}}</span></li>'
		};

		function build() {

			//building chart a
			var tokenDistributionChart_a_options = {
				type: 'pie',
				data: getChartData( $('.token-distribution.token-distribution-chart-a') ),
				options: DEFAULT_CHART_OPTIONS
			};
			tokenDistributionChart_a_options.options.cutoutPercentage = 50;
			var tokenDistributionContext_a = document.getElementById('token-distribution-chart-a').getContext('2d');
			var tokenDistributionChart_a = new Chart(tokenDistributionContext_a, tokenDistributionChart_a_options);
			//creating legend
			createLegend( $('.token-distribution.token-distribution-chart-a') );
			//creating title
			createTitle( $('.token-distribution.token-distribution-chart-a') );

			//building chart b
			var tokenDistributionChart_b_options = {
				type: 'pie',
				data: getChartData( $('.token-distribution.token-distribution-chart-b') ),
				options: DEFAULT_CHART_OPTIONS
			};
			tokenDistributionChart_b_options.options.cutoutPercentage = 50;
			var tokenDistributionContext_b = document.getElementById('token-distribution-chart-b').getContext('2d');
			var tokenDistributionChart_b = new Chart(tokenDistributionContext_b, tokenDistributionChart_b_options);
			//creating legend
			createLegend( $('.token-distribution.token-distribution-chart-b') );
			//creating title
			createTitle( $('.token-distribution.token-distribution-chart-b') );
		}

			function getChartData( $chartContainer ) {
				//init var
				var data = {};
				//getting info elements
				var $infoBox = $chartContainer.find('.token-pie-chart-info'),
					$archs = $infoBox.find('li');

				//get labels, colors and percents
				data.labels = [];
				data.datasets = [{
					data: [],
					backgroundColor: [],
					borderWidth: 0
				}];

				//looping through $archs gathering info
				for ( var n = 0; n < $archs.length; n++ ) {
					//filling labels
					data.labels[n] = $($archs[n]).attr('data-label');
					//filling percents
					data.datasets[0].data[n] = parseInt($($archs[n]).attr('data-percent'));
					//filling colors
					data.datasets[0].backgroundColor[n] = $($archs[n]).attr('data-color');
				}

				//returning data
				return data;
			}

			function createLegend( $chartContainer ) {
				var $infoBox = $chartContainer.find('.token-pie-chart-info'),
					$legendBox = $chartContainer.parents('.token-column').find('.token-chart-legend'),
					$info = $infoBox.find('li'),
					html = '';

				for ( var n = 0; n < $info.length; n++ ) {
					//getting template and filling it
					html = legendOptions.template;
					html = replaceAll( html, '{{color}}', $($info[n]).attr('data-color') );
					html = replaceAll( html, '{{legend_label}}', $($info[n]).html() );
					//appending html
					$legendBox.append( html );
				}

			}

			function createTitle( $chartContainer ) {
				var $infoBox = $chartContainer.find('.token-pie-chart-info'),
					$titleBox = $chartContainer.find('.token-pie-chart');

				$titleBox.append('<h3 class="token-chart-title">' + $infoBox.attr('data-title') + '</h3>');
			}

		$(document).ready(function() {
			build();
		});

	}
	pieCharts();

}

function getChartData( $chartContainer ) {
	//init var
	var data = {};
	//getting info elements
	var $infoBox = $chartContainer.find('.token-pie-chart-info'),
		$archs = $infoBox.find('li');

	//get labels, colors and percents
	data.labels = [];
	data.datasets = {};
	data.datasets.data = [];
	data.datasets.backgroundColor = [];

	//looping through $archs gathering info
	for ( var n = 0; n < $archs.length; n++ ) {
		//filling labels
		data.labels[n] = $($archs[n]).attr('data-label');
		//filling percents
		data.datasets.data[n] = parseInt($($archs[n]).attr('data-percent'));
		//filling colors
		data.datasets.backgroundColor[n] = $($archs[n]).attr('data-color');
	}

	//returning data
	return data;
}