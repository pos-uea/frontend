import React, { useEffect } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Team/TeamCard.tsx';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from '../../services/api.ts';
import { IconeGateway, IconeSensor, IconeNotification, IconeData } from "../../components/icons";

const ECommerce: React.FC = () => {

  const [qtdSensor, setQtdSensor] = React.useState(0);
  const [qtdGateways, setQtdGateways] = React.useState(0);
  const [qtdNotifications, setQtdNotifications] = React.useState(0);
  const [qtdSensorDataDay, setQtdSensorDataDay] = React.useState(0);
  
  axios.get("reports")
      .then((res) => {
        setQtdGateways(res.data.totalGateway);
        setQtdSensor(res.data.totalSensor);
        setQtdNotifications(res.data.totalNotificationDay);
        setQtdSensorDataDay(res.data.totalSensorDataDay);

  });
  

  useEffect(() => {
        axios.get("reports")
          .then((res) => {
            setQtdGateways(res.data.totalGateway);
            setQtdSensor(res.data.totalSensor);
            setQtdNotifications(res.data.totalNotificationDay);
            setQtdSensorDataDay(res.data.totalSensorDataDay);
          });
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Sensors " total={qtdSensor.toString()} rate="online" levelUp>
          {IconeSensor}
        </CardDataStats>
        <CardDataStats title="Total Gateways" total={qtdGateways.toString()} rate="online" levelUp>
          {IconeGateway}
        </CardDataStats>
        <CardDataStats title="Total Notifications" total={qtdNotifications.toString()} rate="online" levelUp>
          {IconeNotification}
        </CardDataStats>
        <CardDataStats title="Total Data" total={qtdSensorDataDay.toString()} rate="online" levelUp>
          {IconeData}
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
