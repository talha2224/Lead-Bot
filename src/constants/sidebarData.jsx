import {FaChartBar, FaAddressBook, FaBuilding, FaCalendarAlt, FaRegCalendarCheck } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';

export const navData = [
    {
        id: 1,
        link: "home",
        name: "Dashboard",
        icon: <RxDashboard />
    },
    {
        id: 3,
        link: "contacts",
        name: "Contacts",
        icon: <FaAddressBook />
    },
    {
        id: 4,
        link: "companies",
        name: "Companies",
        icon: <FaBuilding />
    },
    {
        id: 2,
        link: "analytics",
        name: "Analytics",
        icon: <FaChartBar />
    },
    {
        id: 5,
        link: "schedule",
        name: "Schedule",
        icon: <FaRegCalendarCheck />
    },
    {
        id: 6,
        link: "calendar",
        name: "Calendar",
        icon: <FaCalendarAlt />
    }
];
