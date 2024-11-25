const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const years = [
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
];

export const temperatureData = {
    labels: months,
    datasets: [
        {
            label: "1901-1930",
            data: [25.37, 25.39, 25.6, 25.78, 25.87, 25.33, 25, 25.06, 25.38, 25.67, 25.96, 25.57],
            fill: false,
            backgroundColor: "#ff7f50",
            borderColor: "#ff7f50",
            tension: 0.3,
        },
        {
            label: "1931-1960",
            data: [25.51, 25.53, 25.68, 25.85, 25.83, 25.4, 25, 25.11, 25.4, 25.74, 25.8, 25.64],
            fill: false,
            backgroundColor: "#4682b4",
            borderColor: "#4682b4",
            tension: 0.3,
        },
        {
            label: "1961-1990",
            data: [25.39, 25.49, 25.67, 25.91, 25.88, 25.46, 25.08, 25.17, 25.44, 25.79, 25.82, 25.63],
            fill: false,
            backgroundColor: "#8a2be2",
            borderColor: "#8a2be2",
            tension: 0.3,
        },
        {
            label: "1991-2020",
            data: [25.81, 25.9, 26.09, 26.3, 26.22, 25.87, 25.55, 25.63, 25.82, 26.14, 26.18, 26.04],
            fill: false,
            backgroundColor: "#ff4500",
            borderColor: "#ff4500",
            tension: 0.3,
        },
    ]
};

export const precipitationData = {
    labels: months,
    datasets: [
        {
            label: "1901-1930",
            data: [287.59, 257.01, 279.95, 257.69, 230.53, 182.05, 160.61, 163.73, 163.58, 207.57, 243.5, 283],
            fill: false,
            backgroundColor: "#228b22",
            borderColor: "#228b22",
            tension: 0.3,
        },
        {
            label: "1931-1960",
            data: [284.1, 256.53, 284.52, 269.53, 239.01, 187.38, 174.55, 175.34, 172.37, 210.75, 246.91, 283.64],
            fill: false,
            backgroundColor: "#6495ed",
            borderColor: "#6495ed",
            tension: 0.3,
        },
        {
            label: "1961-1990",
            data: [280.43, 250.79, 279.98, 261.09, 233.64, 180.42, 167.22, 164.74, 175.26, 205.53, 241.02, 282.91],
            fill: false,
            backgroundColor: "#ff6347",
            borderColor: "#ff6347",
            tension: 0.3,
        },
        {
            label: "1991-2020",
            data: [280.56, 255.09, 289.08, 276.74, 226.54, 186.49, 167.52, 161.62, 165.85, 210.12, 254.81, 296.43],
            fill: false,
            backgroundColor: "#ff1493",
            borderColor: "#ff1493",
            tension: 0.3,
        },
    ]
};

export const averageTreeLoss = {
    labels: years,
    datasets: [
        {
            label: "Tree Cover Loss",
            data: [744087, 855275, 544810, 1289042, 1182441, 1433150, 1387625, 1396251, 1944963, 1279331, 1543628, 2260260, 1139298, 1894360, 1746470, 2422071, 1300719, 1218732, 1176884, 961587, 841391, 885238, 1395285],
            fill: false,
            backgroundColor: "#ff4500",
            borderColor: "#ff4500",
            tension: 0.3,
        }
    ]
};

export const greenhouseEmissions = {
    labels: years,
    datasets: [
        {
            label: "Greenhouse Gas Emissions",
            data: [491971247, 628290349, 427375749, 976271170, 939625587, 1019021507, 1146572731, 1025817289, 1394856075, 1025397797, 1218955440, 1753357093, 857803257, 1390869653, 1260846896, 1789614733, 828088380, 760465572, 736001170, 592381322, 511290702, 543923965, 841534645],
            fill: false,
            backgroundColor: "#20b2aa",
            borderColor: "#20b2aa",
            tension: 0.3,
        }
    ]
};

export const forestLossDrivers = {
    labels: years,
    datasets: [
        {
            label: "Commodity-driven Deforestation",
            data: [619308, 713472, 438369, 1128174, 1043874, 1270948, 1212539, 1232831, 1682178, 1118914, 1338762, 1963050, 982505, 1591034, 1433875, 1984611, 1053636, 973310, 940524, 777198, 688852, 731617, 1159141],
            fill: false,
            backgroundColor: "#ff8c00",
            borderColor: "#ff8c00",
            tension: 0.3,
            color: '#ffffff'
        },
        {
            label: "Forestry",
            data: [91110, 102535, 79856, 116211, 103195, 115364, 124145, 119373, 207226, 124531, 153805, 212159, 118160, 223939, 217949, 319397, 183125, 186635, 175462, 139582, 114074, 116001, 186203],
            fill: false,
            backgroundColor: "#483d8b",
            borderColor: "#483d8b",
            tension: 0.3,
        },
        {
            label: "Shifting Agriculture",
            data: [29242, 35715, 24436, 40793, 32378, 41789, 47039, 40374, 50047, 31416, 46123, 77235, 36151, 73537, 89960, 111244, 57852, 53901, 55098, 40798, 34578, 33893, 45761],
            fill: false,
            backgroundColor: "#4682b4",
            borderColor: "#4682b4",
            tension: 0.3,
        },
        {
            label: "Urbanization",
            data: [2528, 1560, 997, 2046, 1567, 3176, 2380, 2261, 3193, 2573, 2820, 3767, 1056, 2564, 1894, 2646, 3327, 2849, 3472, 2428, 1991, 1930, 3758],
            fill: false,
            backgroundColor: "#2e8b57",
            borderColor: "#2e8b57",
            tension: 0.3,
        }
    ]
};

export const sst = {
    labels: [1909,1919,1929,1939,1949,1959,1969,1979,1989,1999,2009,2019,2029],
    datasets: [
        {
            label: "Sea Surface Temperature Rise",
            data: [0.00,0.05,0.12,0.22,0.37,0.57,0.82,1.17,1.67,2.42,3.42,4.62,5.00],
            fill: false,
            backgroundColor: "#20b2aa",
            borderColor: "#20b2aa",
            tension: 0.3,
        }
    ]
};

export const coralReef = {
    labels: [1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2010,2020,2023],
    datasets: [
        {
            label: "Sea Surface Temperature Rise",
            data: [100, 98, 95, 93, 90, 88, 85, 80, 70, 55, 40, 25, 20],
            fill: false,
            backgroundColor: "#20b2aa",
            borderColor: "#20b2aa",
            tension: 0.3,
        }
    ]
};

export const weatherOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Average Surface Air Temprature"
        }
    },
    scales: {
        y: {
            // ticks: {
            //     color: '#ffffff',  // Color for x-axis tick labels
            //     font: {
            //         size: 12,     // Font size for x-axis tick labels
            //     }
            // },
            beginAtZero: false,
            title: {
                display: true,
                text: 'Temperature (°C)',
            }
        },
        x: {
            // ticks: {
            //     color: '#ffffff',  // Color for x-axis tick labels
            //     font: {
            //         size: 12,     // Font size for x-axis tick labels
            //     }
            // },
            title: {
                display: true,
                text: 'Months'
            }
        }
    }
};

export const precipitationOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Precipitation"
        }
    },
    scales: {
        y: {
            beginAtZero: false,
            title: {
                display: true,
                text: 'Precipitation (MM)',
            }
        },
        x: {
            title: {
                display: true,
                text: 'Months'
            }
        }
    }
};

export const averageTreeLossOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Average Tree Loss"
        }
    },
    scales: {
        y: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            beginAtZero: false,
            // title: {
            //     display: true,
            //     text: 'Precipitation (MM)',
            // }
        },
        x: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            title: {
                display: true,
                text: 'Years'
            }
        }
    }
};

export const greenhouseEmissionsOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Greehouse Emissions"
        }
    },
    scales: {
        y: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            beginAtZero: false
        },
        x: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            title: {
                display: true,
                text: 'Years'
            }
        }
    }
};

export const forestLossDriversOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            color: '#ffffff',
            text: "Forest Loss Drivers"
        }
    },
    scales: {
        y: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            beginAtZero: false
        },
        x: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            title: {
                display: true,
                text: 'Years'
            }
        }
    }
};

export const sstOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Sea Surface Temperature Rise(C)"
        }
    },
    scales: {
        y: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            beginAtZero: false
        },
        x: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            title: {
                display: true,
                text: 'Years'
            }
        }
    }
};

export const coralReefOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Coral Reef"
        }
    },
    scales: {
        y: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            beginAtZero: false
        },
        x: {
            ticks: {
                color: '#ffffff',  // Color for x-axis tick labels
                font: {
                    size: 12,     // Font size for x-axis tick labels
                }
            },
            title: {
                display: true,
                text: 'Years'
            }
        }
    }
};