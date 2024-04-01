import { Link } from 'react-router-dom';
import { Team } from '../../types/team';
import UserOne from '../../images/user/user.png';


const TeamData: Team[] = [
  {
    avatar: UserOne,
    name: 'Adriano Mourão',
  },
  {
    avatar: UserOne,
    name: 'Salomão Calheiros',
  },
  {
    avatar: UserOne,
    name: 'Thyago Lima',
  },
  {
    avatar: UserOne,
    name: 'Willians Damasceno',
  },
];

const TeamCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Team
      </h4>

      <div>
        {TeamData.map((data, key) => (
          <Link
            to="/"
            className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <img src={data.avatar} alt="User" />
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {data.name}
                </h5>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
