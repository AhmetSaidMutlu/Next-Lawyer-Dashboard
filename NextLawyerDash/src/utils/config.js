export const productFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Müşteri İsmi",
    label: "Müşteri İsmi",
    componentType: "input",
  },
  {
    id: "visitors",
    type: "number",
    placeholder: "Müşteriden alınan dava sayısı",
    label: "Müşteriden alınan dava sayısı",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Taksit başına düşen Fiyat",
    label: "Taksit başına düşen Fiyat",
    componentType: "input",
  },
  {
    id: "sales",
    type: "number",
    placeholder: "Taksit",
    label: "Taksit",
    componentType: "input",
  },
  {
    id: "month",
    type: "",
    placeholder: "",
    label: "Ay",
    componentType: "select",
    options: [
      {
        id: "jan",
        label: "January",
      },
      {
        id: "feb",
        label: "February",
      },
      {
        id: "mar",
        label: "March",
      },
      {
        id: "apr",
        label: "April",
      },
      {
        id: "may",
        label: "May",
      },
      {
        id: "jun",
        label: "June",
      },
      {
        id: "jul",
        label: "July",
      },
      {
        id: "aug",
        label: "August",
      },
      {
        id: "sep",
        label: "September",
      },
      {
        id: "oct",
        label: "October",
      },
      {
        id: "nov",
        label: "November",
      },
      {
        id: "dec",
        label: "December",
      },
    ],
  },
];

export const productTableHeaders = [
  {
    id: "name",
    label: "İsim",
  },
  {
    id: "month",
    label: "Ay",
  },
  {
    id: "price",
    label: "Taksit Başına Alınan Ücret",
  },
  {
    id: "sales",
    label: "Taksit",
  },
  {
    id: "revenue",
    label: "Toplam Alınan Ücret",
  },
];

export const monthsMapper = {
  jan: "January",
  feb: "February",
  mar: "March",
  apr: "April",
  may: "May",
  jun: "June",
  jul: "July",
  aug: "August",
  sep: "September",
  oct: "October",
  nov: "November",
  dec: "December",
};

export const deviceMapper = {
  bznz: "İş Hukuku Davası",
  Ceza: "Ceza Davası",
  Miras: "Miras",
  Boşanma: "Boşanma Davası",
};

export const visiorsFormControls = [
  {
    id: "visitors",
    type: "number",
    placeholder: "Toplam Müşteri",
    label: "Toplam Müşteri",
    componentType: "input",
  },
  {
    id: "premiumUserNo",
    type: "number",
    placeholder: "Tavsiye İle Gelen Müşteri",
    label: "Tavsiye İle Gelen Müşteri",
    componentType: "input",
  },
  {
    id: "location",
    type: "text",
    placeholder: "Konum",
    label: "Konum",
    componentType: "input",
  },
  {
    id: "device",
    type: "",
    placeholder: "",
    label: "Dava Türü",
    componentType: "select",
    options: [
      {
        id: "bznz",
        label: "İş Hukuku Davası",
      },
      {
        id: "Ceza",
        label: "Ceza Davası",
      },
      {
        id: "Boşanma",
        label: "Boşanma Davası",
      },
      {
        id: "Miras",
        label: "Miras Davası",
      },
    ],
  },
  {
    id: "month",
    type: "",
    placeholder: "",
    label: "Ay",
    componentType: "select",
    options: [
      {
        id: "jan",
        label: "January",
      },
      {
        id: "feb",
        label: "February",
      },
      {
        id: "mar",
        label: "March",
      },
      {
        id: "apr",
        label: "April",
      },
      {
        id: "may",
        label: "May",
      },
      {
        id: "jun",
        label: "June",
      },
      {
        id: "jul",
        label: "July",
      },
      {
        id: "aug",
        label: "August",
      },
      {
        id: "sep",
        label: "September",
      },
      {
        id: "oct",
        label: "October",
      },
      {
        id: "nov",
        label: "November",
      },
      {
        id: "dec",
        label: "December",
      },
    ],
  },
];

export const visitorsTableHeaders = [
  {
    id: "visitors",
    label: "Toplam Müşteri",
  },
  {
    id: "location",
    label: "Konum",
  },
  {
    id: "device",
    label: "Dava Türü",
  },
  {
    id: "premiumUserNo",
    label: "Tavsiye İle gelen müşteri",
  },
  {
    id: "month",
    label: "Ay",
  },
];


export const yearlyAnalyticsChartOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 20000,
  },
};

export const visitorAnalyticsChartOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};


export const deviceAnalyticsChartOptions = {
  chart: {
    type: "donut",
  },
  colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
  labels: ["İş Hukuku Davası", "Ceza Davası", "Boşanma Davası", "Miras Davası"],
  legend: {
    show: true,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};