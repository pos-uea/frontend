import { ApexOptions } from 'apexcharts';
import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from '../../services/api.ts';
import Loader from '../../common/Loader';


const ChartOne: React.FC = () => {

  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState<string>("Day");

  const options: ApexOptions = {

    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 335,
      type: 'area',
      dropShadow: {
        enabled: true,
        color: '#623CEA14',
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
      curve: 'straight',
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
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
      colors: '#fff',
      strokeColors: ['#3056D3', '#80CAEE'],
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
      type: 'category',
      categories: data?.map(data => data.createdAt),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: '0px',
        },
      },
      min: 0,
      max: 100,
    },
  };


  useEffect(() => {
    setLoading(false)
    axios.get("reports")
      .then((res) => {
        setData(res.data.Sensordata.Data);
      });
  }, []);

  async function handleDay(e: any) {
    e.preventDefault();
    setFilter("Day");
    setLoading(true);

    try {
      await axios.get("reports/analytics/day")
        .then((res) => {
          setData(res.data.SensordataDay.Data);
        });
    } catch {
      console.log("ERROR CATCH");
    } finally {
      setLoading(false)
    }
  }

  async function handleWeek(e: any) {
    e.preventDefault();
    setFilter("Week");
    setLoading(true);

    try {
      await axios.get("reports/analytics/week")
        .then((res) => {
          setData(res.data.SensordataWeek.Data);
        });
    } catch {
      console.log("ERROR CATCH");
    } finally {
      setLoading(false)
    }
  }

  async function handleMonth(e: any) {
    e.preventDefault();
    setFilter("Month");
    setLoading(true);

    try {
      await axios.get("reports/analytics/month")
        .then((res) => {
          setData(res.data.SensordataMonth.Data);
        });
    } catch {
      console.log("ERROR CATCH");
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5">
            <div className="flex min-w-47.5">
              {/* <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span> */}
              <div className="w-full">
                {/* <p className="font-semibold text-primary">Total Revenue</p> */}
                {/* <p className="text-sm font-medium">{filter}</p> */}
                <h4 className="text-xl font-semibold text-black dark:text-white">
                {filter}
                </h4>
              </div>
            </div>
            <div className="flex min-w-47.5">
              {/* <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Sales</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div> */}
            </div>
          </div>
          <div className="flex w-full max-w-45 justify-end">
            <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
              <button hidden={!!loading} onClick={handleDay} className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white  hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Day
              </button>
              <button hidden={!!loading} onClick={handleWeek} className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Week
              </button>
              <button hidden={!!loading} onClick={handleMonth} className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Month
              </button>
            </div>
          </div>
        </div>

        <div>
          <div id="chartOne" className="-ml-5">
            {loading ? <Loader />
              :
              <ReactApexChart
                options={options}

                series={[
                  {
                    name: "Sensor data",
                    data: data?.map(data => data.value)
                  }
                ]}
                type="line"
                height={350}
              />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartOne;
