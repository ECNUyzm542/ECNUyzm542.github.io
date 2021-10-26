/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    var mainApp = {

        initFunction: function () {
            /*MENU 
            ------------------------------------*/
            $('#main-menu').metisMenu();
			
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });
   /* MORRIS AREA CHART
			----------------------------------------*/

            Morris.Area({
                element: 'morris-area-chart',
                data: [{
                    period: '2011',
                    选择: 0,
                    填空: 0,
                    解答: 0
                }, {
                    period: '2012',
                    选择: 4,
                    填空: 0,
                    解答: 0
                }, {
                    period: '2013',
                    选择: 0,
                    填空: 4,
                    解答: 0
                }, {
                    period: '2014',
                    选择: 4,
                    填空: 0,
                    解答: 0
                }, {
                    period: '2015',
                    选择: 5,
                    填空: 0,
                    解答: 0
                }, {
                    period: '2016',
                    选择: 0,
                    填空: 4,
                    解答: 0  
                }, {
                    period: '2017',
                    选择: 4,
                    填空: 4,
                    解答: 0
                }, {
                    period: '2018',
                    选择: 4,
                    填空: 0,
                    解答: 0
                }, {
                    period: '2019',
                    选择: 0,
                    填空: 4,
                    解答: 0
                }, {
                    period: '2020',
                    选择: 0,
                    填空: 4,
                    解答: 0
                }],
                xkey: 'period',
                ykeys: ['选择', '填空', '解答'],
                labels: ['选择', '填空', '解答'],
                pointSize: 2,
                hideHover: 'auto',
				  pointFillColors:['#ffffff'],
				  pointStrokeColors: ['black'],
				  lineColors:['#A6A6A6','#24C2CE','red'],
                resize: true
            });

            /* MORRIS LINE CHART
			----------------------------------------*/
            Morris.Line({
                element: 'morris-line-chart',
                data: [
					  { y: '2011', a: 0, b: 0,c:0,d:0},
					  { y: '2012', a: 0.4,  b: 0,c:0,d:0.4},
					  { y: '2013', a: 0,  b: 0.5,c:0,d:0.5},
					  { y: '2014', a: 0.5,  b: 0,c:0,d:0.5},
					  { y: '2015', a: 0,  b: 0.6,c:0,d:0.6},
					  { y: '2016', a: 0,  b: 0.55,c:0,d:0.55},
					  { y: '2017', a: 0.65, b: 0.6,c:0,d:0.63},
					  { y: '2018', a: 0.6, b: 0,c:0,d:0.6},
					  { y: '2019', a: 0, b: 0.7,c:0,d:0.7},
					  { y: '2020', a:0 , b: 0.7,c:0,d:0.7}
				],
            
				 
      xkey: 'y',
      ykeys: ['a', 'b','c','d'],
      labels: ['选择', '填空','解答','总和'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','#24C2CE','red','blue']
	  
            });
           
        
            $('.line-chart').cssCharts({type:"line"});

            $('.pie-thychart').cssCharts({type:"pie"});
       
	 
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.initFunction(); 
		$("#sideNav").click(function(){
			if($(this).hasClass('closed')){
				$('.navbar-side').animate({left: '0px'});
				$(this).removeClass('closed');
				$('#page-wrapper').animate({'margin-left' : '260px'});
				
			}
			else{
			    $(this).addClass('closed');
				$('.navbar-side').animate({left: '-260px'});
				$('#page-wrapper').animate({'margin-left' : '0px'}); 
			}
		});
    });

}(jQuery));
