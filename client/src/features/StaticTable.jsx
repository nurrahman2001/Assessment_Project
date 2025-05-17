import { FaCog, FaTimes } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Nur Rahman",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    dateCreated: "04/10/2013",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahman Nur",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    dateCreated: "05/08/2014",
    role: "Publisher",
    status: "Active",
  },
  {
    id: 3,
    name: "Antoni Morno",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    dateCreated: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
  },
  {
    id: 4,
    name: "Mary Com",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    dateCreated: "06/09/2016",
    role: "Reviewer",
    status: "Active",
  },
  {
    id: 5,
    name: "Martin Summer",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    dateCreated: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "text-green-500";
    case "Suspended":
      return "text-red-500";
    case "Inactive":
      return "text-yellow-500";
    default:
      return "text-gray-500";
  }
};

const StaticTable = () => {
  return (
    <div >
      <table className="w-screen table-auto border-collapse rounded-lg overflow-hidden shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Date Created</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className="border-t hover:bg-gray-50 transition duration-200"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3 flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 rounded-full"
                />
                <span className="font-medium">{user.name}</span>
              </td>
              <td className="p-3">{user.dateCreated}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">
                <span className={`flex items-center space-x-2`}>
                  <span
                    className={`h-3 w-3 rounded-full ${getStatusColor(
                      user.status
                    )}`}
                  ></span>
                  <span>{user.status}</span>
                </span>
              </td>
              <td className="p-3 flex space-x-3 text-lg">
                <FaCog className="cursor-pointer text-blue-500 hover:text-blue-700 transition" />
                <FaTimes className="cursor-pointer text-red-500 hover:text-red-700 transition" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaticTable;
