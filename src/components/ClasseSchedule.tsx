import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUser,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";
import { IClass } from "../types ";

type ClassesProps = {
  classes: IClass[];
};

function colorByLevel(level: string) {
  switch (level) {
    case "Open level":
      return "bg-purple-500";
    case "Intermediate":
      return "bg-orange-500";
    case "Advanced":
      return "bg-red-600 ";
  }
}

function Classes({ classes }: ClassesProps) {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="divide-y divide-gray-300">
        {classes.map((_class) => (
          <div
            key={_class.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 space-y-4 md:space-y-0"
          >
            {/* Avatar and Details */}
            <div className="flex items-center space-x-6 md:space-x-8">
              <img
                src={_class.photo}
                alt={_class.teacher}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg md:text-2xl font-semibold">
                  {_class.className}
                </h2>

                <div className="text-sm md:text-base text-gray-500 space-y-1">
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                    <span>{_class.teacher}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-gray-600"
                    />
                    <span>{_class.schedule}</span>
                    <div className="h-5 w-[2px] bg-gray-300 mx-4 hidden md:block"></div>

                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-gray-600 hidden md:block"
                    />
                    <span className="hidden md:block">{_class.location}</span>
                  </div>

                  <div className="flex items-center space-x-2 md:hidden ">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-gray-600"
                    />
                    <span>{_class.location}</span>
                  </div>

                  <div className="flex items-center space-x-2 md:hidden ">
                    <FontAwesomeIcon icon={faGauge} className="text-gray-600" />
                    <p className={`font-semibold`}>{_class.level}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[130px]">
              <button
                className={`btn btn-block ${colorByLevel(
                  _class.level
                )} rounded-full hidden md:block`}
              >
                <p className="text-white">{_class.level}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Classes;
