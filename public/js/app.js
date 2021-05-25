function Charts(stockArr, chargersArr) {
  var ctx1 = document.querySelector('.chart1').getContext('2d');
  var chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
      datasets: [{
        label: 'Electric vehicle stock (in millions), 2005-2019',
        data: stockArr,
        backgroundColor: [
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)',
          'rgba(0, 0, 0, .5)'
        ],
        borderWidth: 0
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  var ctx2 = document.querySelector('.chart2').getContext('2d');
  var chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
      datasets: [{
        label: 'Electric vehicle chargers (slow and fast), 2005-19',
        data: chargersArr,
        backgroundColor: [
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)',
          'rgba(0, 0, 0, .25)'
        ],
        borderWidth: 0
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

	// destroy previous rendered charts to prevent errors
	document.querySelector(".country").addEventListener("change", function() {
		chart1.destroy();
		chart2.destroy();
	});
}

function byCountry() {
	var x = "World"; // default
	var y = "";

	if (document.querySelector(".country").value) {
		x = document.querySelector(".country").value;
	}

	if (document.querySelector(".filter").value) {
		y = document.querySelector(".filter").value;
	}
	
  Promise.all([
    fetch("/apis/" + x + ".json", { cache: "no-store" }).then(res => res.json())
  ])
  .then(([data]) => {
    var country = "<h2>" + data[0].doc.country + "</h2>"
		
		if (!y) {
      document.querySelector(".chart1").style.display = "block";
      document.querySelector(".chart2").style.display = "block";
    }

    if (y == "electric_vehicle_stock_in_millions") {
      document.querySelector(".chart1").style.display = "block";
      document.querySelector(".chart2").style.display = "none";
    }

    if (y == "electric_vehicle_chargers") {
      document.querySelector(".chart1").style.display = "none";
      document.querySelector(".chart2").style.display = "block";
    }

		var stockArr = [];
		var chargersArr = [];
		
		data[0].doc.electric_vehicle_stock_in_millions.map(item => (
			stockArr.push(item.toString())
		));

		data[0].doc.electric_vehicle_chargers.map(item => (
			chargersArr.push(item.toString())
		));
		
    Charts(stockArr, chargersArr)
		
		document.querySelector(".country-name").innerHTML = country;
  });
}

function init() {
  var y = document.querySelector(".filter").value;

  Promise.all([
    fetch("/apis/evd.json", { cache: "no-store" }).then(res => res.json())
  ])
  .then(([data]) => {

    // Sort function
    function GetSortOrder(prop) {
      return function(a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      }
    }

    // Sort data by position
    var arr = [];

    for (var i in data) {
      arr.push(data[i].doc)
    }

    arr.sort(GetSortOrder("country"));
    // End sort

    var option = ""; // country drop-down menu options

		arr.map(item => (
			option += "<option value=" + item.country + ">" + item.country + "</option>"  // populate country drop-down menu
		));

    document.querySelector(".select").innerHTML = option;
		document.querySelector(".select").value = "World"; // select 'World' in drop-down menu on load 
  });

	byCountry();
}

init();
