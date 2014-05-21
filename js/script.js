$(document).ready(function () {
        
		$('table').tablesorter();
        
        $('#myChart').highcharts({
	            
	            chart: {
	                type: 'bar'
	            },
	            title: {
	                text: 'Rate the Language'
	            },
	            subtitle: {
	                text: 'Source: You'
	            },
	            xAxis: {
	                categories: ['PHP', 'Ruby', 'Javascript'],
	                title: {
	                    text: null
	                }
	            },
	            yAxis: {
	                min: 0,
	                title: {
	                    text: 'Rating',
	                    align: 'high'
	                },
	                labels: {
	                    overflow: 'justify'
	                }
	            },
	            tooltip: {
	                valueSuffix: ' Rating'
	            },
	            plotOptions: {
	                bar: {
	                    dataLabels: {
	                        enabled: true
	                    }
	                }
	            },
	            legend: {
	                layout: 'vertical',
	                align: 'right',
	                verticalAlign: 'top',
	                x: -40,
	                y: 100,
	                floating: true,
	                borderWidth: 1,
	                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor || '#FFFFFF'),
	                shadow: true
	            },
	            credits: {
	                enabled: false
	            },
	            
	        });


        $('button').click(function(){
        	var yourName = $('#name').val();
			var vals = Array();
			vals.push(parseFloat($('#php').val()));
			vals.push(parseFloat($('#ruby').val()));
			vals.push(parseFloat($('#javascript').val()));
			        	
        	var chart = $('#myChart').highcharts();

        	chart.addSeries({
        		name: yourName,
        		data: vals
        	});
	        
        	var myphp = parseFloat($('#php').val());
        	var myruby = parseFloat($('#ruby').val());
        	var myjavascript = parseFloat($('#javascript').val());

	        $('#tableBody').append('<tr><td>'+yourName+'</td><td>PHP</td><td>'+myphp+'</td></tr>');
	        $('#tableBody').append('<tr><td>'+yourName+'</td><td>Ruby</td><td>'+myruby+'</td></tr>');
	        $('#tableBody').append('<tr><td>'+yourName+'</td><td>Javascript</td><td>'+myjavascript+'</td></tr>');

	        $('table').trigger("update");
	        return false;
			
		});

    });