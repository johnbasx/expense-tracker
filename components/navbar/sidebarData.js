import {
  FaArchive,
  FaClipboardCheck,
  FaClock,
  FaCreditCard,
  FaMoneyBillAlt,
  FaTachometerAlt,
} from "react-icons/fa";

export const sidebarData = [
  {
    id: 1011,
    title: "Dashboard",
    href: "/",
    Icon: { FaTachometerAlt },
  },
  {
    id: 1012,
    title: "Income",
    href: "/income",
    Icon: { FaMoneyBillAlt },
  },
  {
    id: 1013,
    title: "Expenses",
    href: "/expenses",
    Icon: { FaCreditCard },
  },
  {
    id: 1014,
    title: "History",
    href: "/history",
    Icon: { FaClock },
  },
  {
    id: 1015,
    title: "Categories",
    href: "/categories",
    Icon: { FaArchive },
  },

  {
    id: 1016,
    title: "Reports",
    href: "/reports",
    Icon: { FaClipboardCheck },
  },
];
