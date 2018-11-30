var app ={
	barChartHandler: function(){
		var ctx = document.getElementById("barChart").getContext('2d');
			var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

	},
	dataTablehandler: function(){
		$('#dataTable').DataTable();
	},
	sidebarsHandler: function(){
		var html = $("html");
		//button we click on

		var toggler = $(".navbar-toggle");
		//sidebar displayed in mobile

		var sidebarM = $("#mobile");

		//content of navbar in desktop
		var nav_collapse = $(".navbar-collapse").find("ul").clone(true).html();
		//console.log(nav_collapse);

		//sidebar displayed in desktop
		var desktop = $("#desktop").find("ul").clone(true).html();
		//console.log(desktop);
		var output = desktop + nav_collapse;

		//console.log(output);

		sidebarM.find("ul").html(output);

		toggler.on('click', function(){
			html.toggleClass("open");

			});
	}		
}