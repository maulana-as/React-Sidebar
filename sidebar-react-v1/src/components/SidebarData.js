import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Antrian",
    path: "/antrian",
    icon: <BiIcons.BiAddToQueue />,
    cName: "nav-text",
  },
  {
    title: "Regis",
    path: "/regis",
    icon: <FaIcons.FaAmbulance />,
    cName: "nav-text",
  },
  {
    title: "Rajal",
    path: "/rajal",
    icon: <FaIcons.FaStethoscope />,
    cName: "nav-text",
  },
  {
    title: "Ranap",
    path: "/ranap",
    icon: <FaIcons.FaBed />,
    cName: "nav-text",
  },
  {
    title: "Rekmed",
    path: "/rekmed",
    icon: <FaIcons.FaChartLine />,
    cName: "nav-text",
  },
  {
    title: "Farmasi",
    path: "/farmasi",
    icon: <GiIcons.GiMedicines />,
    cName: "nav-text",
  },
  {
    title: "Radiologi",
    path: "/radiologi",
    icon: <GiIcons.GiRadioactive />,
    cName: "nav-text",
  },
  {
    title: "Lab",
    path: "/lab",
    icon: <ImIcons.ImLab />,
    cName: "nav-text",
  },
  {
    title: "Kasir",
    path: "/kasir",
    icon: <FaIcons.FaCashRegister />,
    cName: "nav-text",
  },
  {
    title: "Sekre",
    path: "/sekre",
    icon: <MdIcons.MdComputer />,
    cName: "nav-text",
  },
];
