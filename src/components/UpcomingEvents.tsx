import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUser,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";

interface Event {
  id: number;
  name: string;
  schedule: string;
  location: string;
  avatar: string;
  className?: string;
  level: string;
}

const events: Event[] = [
  {
    id: 1,
    name: "Eddie Henrique",
    schedule: "Every Tuesday 6PM - 7PM",
    location: "805 Dovercourt Rd - 2nd Floor",
    avatar:
      "https://on2-lab-storage.s3.us-east-2.amazonaws.com/eddiehenrique.jpg",
    className: "Salsa Foundations",
    level: "Open level",
  },
  {
    id: 2,
    name: "Eddie Henrique",
    schedule: "Every Tuesday 7PM - 8PM",
    location: "805 Dovercourt Rd - 2nd Floor",
    avatar:
      "https://on2-lab-storage.s3.us-east-2.amazonaws.com/eddiehenrique.jpg",
    className: "Salsa Partnerwork & Footwork",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "Eddie Henrique",
    schedule: "Every Thursday 9PM - 10PM",
    location: "805 Dovercourt Rd - 2nd Floor",
    avatar:
      "https://on2-lab-storage.s3.us-east-2.amazonaws.com/eddiehenrique.jpg",
    className: "Salsa Partnerwork",
    level: "Intermediate",
  },
  {
    id: 4,
    name: "Eddie Henrique",
    schedule: "Every Thursday 10PM - 11PM",
    location: "805 Dovercourt Rd - 2nd Floor",
    avatar:
      "https://on2-lab-storage.s3.us-east-2.amazonaws.com/eddiehenrique.jpg",
    className: "Salsa Foundations",
    level: "Advanced",
  },
];

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

const UpcomingMeetings: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="divide-y divide-gray-300">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 space-y-4 md:space-y-0"
          >
            {/* Avatar and Details */}
            <div className="flex items-center space-x-6 md:space-x-8">
              <img
                src={event.avatar}
                alt={event.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg md:text-2xl font-semibold">
                  {event.className}
                </h2>

                <div className="text-sm md:text-base text-gray-500 space-y-1">
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                    <span>{event.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-gray-600"
                    />
                    <span>{event.schedule}</span>
                    <div className="h-5 w-[2px] bg-gray-300 mx-4 hidden md:block"></div>

                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-gray-600 hidden md:block"
                    />
                    <span className="hidden md:block">{event.location}</span>
                  </div>

                  <div className="flex items-center space-x-2 md:hidden ">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-gray-600"
                    />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center space-x-2 md:hidden ">
                    <FontAwesomeIcon icon={faGauge} className="text-gray-600" />
                    <p className={`font-semibold`}>{event.level}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[130px]">
              <button
                className={`btn btn-block ${colorByLevel(
                  event.level
                )} rounded-full hidden md:block`}
              >
                <p className="text-white">{event.level}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeetings;
