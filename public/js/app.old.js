function Charts(chartDataStock, chartDataChargers) {
  var ctx1 = document.querySelector('.chart1').getContext('2d');

  var chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
      datasets: [{
        label: 'Electric vehicle stock (in millions), 2005-2019',
        data: chartDataStock,
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
  var chart1 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
      datasets: [{
        label: 'Electric vehicle chargers (slow and fast), 2005-19',
        data: chartDataChargers,
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
}

function byCountry() {
  var x = document.querySelector(".country").value;
  var y = document.querySelector(".param").value;

  if (x == "World") {
    init();
    return
  }

  Promise.all([
    fetch("/api/evd/" + x, { cache: "no-store" }).then(res => res.json())
  ])
  .then(([data]) => {
    var country = "";


    if (!y) {
      var chartDataStock = [];
      var chartDataChargers = [];

      data.map(item => (
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2005.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2006.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2007.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2008.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2009.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2010.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2011.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2012.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2013.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2014.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2015.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2016.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2017.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2018.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2019.toString()),

        chartDataChargers.push(item.doc.electric_vehicle_chargers._2005.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2006.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2007.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2008.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2009.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2010.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2011.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2012.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2013.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2014.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2015.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2016.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2017.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2018.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2019.toString()),

        //country += "<div><strong>" + item.doc.country + "</strong></div><div>Electric vehicle stock (in millions), 2005-2019:</div><div>" + JSON.stringify(item.doc.electric_vehicle_stock_in_millions) + "</div><div>Electric vehicle chargers (slow and fast), 2005-19:</div><div>" + JSON.stringify(item.doc.electric_vehicle_chargers) + "</div>"
        country += "<h2>" + item.doc.country + "</h2>"
      ));

      document.querySelector(".chart1").style.display = "block";
      document.querySelector(".chart2").style.display = "block";
    }

    if (y == "electric_vehicle_stock_in_millions") {
      var chartDataStock = [];

      data.map(item => (
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2005.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2006.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2007.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2008.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2009.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2010.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2011.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2012.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2013.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2014.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2015.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2016.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2017.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2018.toString()),
        chartDataStock.push(item.doc.electric_vehicle_stock_in_millions._2019.toString()),


        //country += "<div><strong>" + item.doc.country + "</strong></div><div>Electric vehicle stock (in millions), 2005-2019:</div><div>" + JSON.stringify(item.doc.electric_vehicle_stock_in_millions) + "</div>"
        country += "<h2>" + item.doc.country + "</h2>"
      ));

      document.querySelector(".country").value;
      document.querySelector(".chart1").style.display = "block";
      document.querySelector(".chart2").style.display = "none";
    }

    if (y == "electric_vehicle_chargers") {
      var chartDataChargers = [];

      data.map(item => (
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2005.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2006.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2007.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2008.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2009.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2010.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2011.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2012.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2013.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2014.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2015.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2016.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2017.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2018.toString()),
        chartDataChargers.push(item.doc.electric_vehicle_chargers._2019.toString()),

        //country += "<div><strong>" + item.doc.country + "</strong></div><div>Electric vehicle chargers (slow and fast), 2005-19:</div><div>" + JSON.stringify(item.doc.electric_vehicle_chargers) + "</div>"
        country += "<h2>" + item.doc.country + "</h2>"
      ));

      document.querySelector(".country").value;
      document.querySelector(".chart1").style.display = "none";
      document.querySelector(".chart2").style.display = "block";
    }

    Charts(chartDataStock, chartDataChargers)
	
	/*
	const reducer = (accumulator, currentValue) => accumulator + currentValue; // reducer
	const intArr = chartDataStock.map((i) => Number(i)); // convert chartDataStock array from string to int
	console.log(intArr.reduce(reducer).toFixed(2)); // intArr as sum
	*/

	document.querySelector(".countries").innerHTML = country;
  });
}

function init() {
  var y = document.querySelector(".param").value;

  Promise.all([
    fetch("/api/evd", { cache: "no-store" }).then(res => res.json())
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
    //console.log("Vehicle data has been sorted");
    // End sort


    var option = "<option value='World'>World</option>"; // country drop-down menu
    var countries = "";

    if (!y) {
      arr.map(item => (
        option += "<option value=" + item.country + ">" + item.country + "</option>",  // populate country drop-down menu
        countries += "<h2>" + item.country + "</h2><div><strong>Electric vehicle stock (in millions), 2005-2019</strong>:</div><div class='code'>" + JSON.stringify(item.electric_vehicle_stock_in_millions) + "</div><div><strong>Electric vehicle chargers (slow and fast), 2005-19</strong>:</div><div class='code'>" + JSON.stringify(item.electric_vehicle_chargers) + "</div>"
      ));
    }

    if (y == "electric_vehicle_stock_in_millions") {
      arr.map(item => (
        option += "<option value=" + item.country + ">" + item.country + "</option>",  // populate country drop-down menu
        countries += "<h2>" + item.country + "</h2><div><strong>Electric vehicle stock (in millions), 2005-2019</strong>:</div><div class='code'>" + JSON.stringify(item.electric_vehicle_stock_in_millions) + "</div>"
      ));
    }

    if (y == "electric_vehicle_chargers") {
      arr.map(item => (
        option += "<option value=" + item.country + ">" + item.country + "</option>",  // populate country drop-down menu
        countries += "<h2>" + item.country + "</h2><div><strong>Electric vehicle chargers (slow and fast), 2005-19</strong>:</div><div class='code'>" + JSON.stringify(item.electric_vehicle_chargers) + "</div>"
      ));
    }

    document.querySelector(".countries").innerHTML = countries;
    document.querySelector(".select").innerHTML = option;
    document.querySelector(".chart1").style.display = "none";
    document.querySelector(".chart2").style.display = "none";
  });
}

init();
