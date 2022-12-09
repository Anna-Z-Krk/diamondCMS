var options = {
  series: [
    {
      name: "Posts",
      data: [67987, 96987, 109980, 120987, 90987, 100987, 125701],
    },
    {
      name: "Topic",
      data: [10100, 32090, 45900, 32900, 34000, 33057, 35711],
    },
    {
      name: "Users",
      data: [3270, 5400, 9880, 7210, 6500, 9802, 8791],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    foreColor: "#fff",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2022-6-19T05:30:00.000Z",
      "2022-7-19T06:30:00.000Z",
      "2022-8-19T06:30:00.000Z",
      "2022-9-19T06:30:00.000Z",
      "2022-10-19T06:30:00.000Z",
      "2022-11-19T06:30:00.000Z",
      "2022-12-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
