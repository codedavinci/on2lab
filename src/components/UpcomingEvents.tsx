const events = [
  {
    id: 1,
    avatar: "https://via.placeholder.com/48",
    title: "Salsa Night",
    location: "Downtown Studio",
    date: "2024-01-15",
    time: "7:00 PM",
  },
  {
    id: 2,
    avatar: "https://via.placeholder.com/48",
    title: "Pachanga Workshop",
    location: "City Center Hall",
    date: "2024-01-20",
    time: "6:00 PM",
  },
  {
    id: 3,
    avatar: "https://via.placeholder.com/48",
    title: "Mambo Marathon",
    location: "Community Hall",
    date: "2024-01-25",
    time: "5:30 PM",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center bg-base-100 shadow-lg rounded-lg p-4"
          >
            <div className="avatar flex-shrink-0 mr-4">
              <div className="w-12 rounded-full">
                <img src={event.avatar} alt={event.title} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.location}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm font-bold">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
