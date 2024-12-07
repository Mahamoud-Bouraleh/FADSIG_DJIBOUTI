import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import { useTranslation } from 'react-i18next';
import MapPage from './components/MapPage';
import CarteInteractivePage from './components/CarteInteractivePage';
import LocaliVehicule from './components/LocaliVehicule'; 
import PersonnTemp from './components/PersonnTemp';
import ZoneControl from './components/ZoneControl'; 
import GestionEmploy from './components/GestionEmploy';  
import { DataProvider } from './context/DataContext'; 
import {
  FaUser,
  FaCog,
  FaChartBar,
  FaHome,
  FaMapMarkedAlt,
  FaCalendar,
  FaShieldAlt,
  FaSignOutAlt,
  FaBoxOpen,
} from 'react-icons/fa';

function App() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const { t, i18n } = useTranslation();

  // Simplified language change handler
  const handleLanguageChange = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  const menuItems = [
    {
      title: t('dashboard'),
      icon: <FaHome />,
      subItems: [],
    },
    {
      title: t('humanResources'),
      icon: <FaUser />,
      subItems: [
        { name: t('training'), component: null },
        { name: t('scheduling'), component: null },
        { name: t('employeeManagement'), component: 'GestionEmploy' },
        { name: t('militaryOps'), component: null },
        { name: t('teamAssignment'), component: null },
      ],
    },
    {
      title: t('mapping'),
      icon: <FaMapMarkedAlt />,
      subItems: [
        { name: t('generalMap'), component: 'MapPage' },
        { name: t('interactiveMap'), component: 'CarteInteractivePage' },
        { name: t('vehicleLocation'), component: 'LocaliVehicule' },
        { name: t('realTimePersonnel'), component: 'PersonnTemp' },
        { name: t('controlZones'), component: 'ZoneControl' },
      ],
    },
    {
      title: t('control'),
      icon: <FaShieldAlt />,
      subItems: [
        { name: t('realTimeTracking'), component: null },
        { name: t('vehicleRegistration'), component: null },
        { name: t('accessManagement'), component: null },
        { name: t('preventiveMaintenance'), component: null },
      ],
    },
    {
      title: t('planning'),
      icon: <FaCalendar />,
      subItems: [],
    },
    {
      title: t('inventory'),
      icon: <FaBoxOpen />,
      subItems: [
        { name: t('equipmentInventory'), component: null },
        { name: t('renewalAlerts'), component: null },
        { name: t('materialTracking'), component: null },
        { name: t('materialNeeds'), component: null },
        { name: t('materialRegistration'), component: null },
      ],
    },
    {
      title: t('reports'),
      icon: <FaChartBar />,
      subItems: [
        { name: t('performanceReports'), component: null },
        { name: t('securityStats'), component: null },
        { name: t('operationsTracking'), component: null },
      ],
    },
    {
      title: t('settings'),
      icon: <FaCog />,
      subItems: [
        { name: t('userRoles'), component: null },
        { name: t('mapSettings'), component: null },
        { name: t('alertConfig'), component: null },
        { name: t('gisConfig'), component: null },
      ],
    },
  ];

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <DataProvider>
      <div className="app-container">
        <header className="header">
          <div className="Garde">
            <img src={logo} alt="Logo" className="logo" />
            <h1>FADSGI DJIBOUTI </h1>
          </div>
          <div className="user-info">
            <span>Ali Mohamed Yacoub</span>
            <div className="language-select">
              <select 
                onChange={handleLanguageChange} 
                value={i18n.language}
                className="language-selector"
              >
                <option value="fr">{t('french')}</option>
                <option value="en">{t('english')}</option>
              </select>
            </div>
            <button className="logout-button">
              {t('logout')} <FaSignOutAlt />
            </button>
          </div>
        </header>

        <div className="content-container">
          <aside className="sidebar">
            {menuItems.map((menuItem, index) => (
              <div key={index}>
                <div
                  className="menu-item"
                  onClick={() => handleSubmenuToggle(index)}
                >
                  <span className="menu-icon">{menuItem.icon}</span>
                  {menuItem.title}
                </div>
                {openSubmenu === index && menuItem.subItems.length > 0 && (
                  <div className="submenu">
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className={`submenu-item ${activeItem === subItem.name ? 'active' : ''}`}
                        onClick={() => handleItemClick(subItem.name)}
                      >
                        {subItem.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </aside>

          <main className="main-content">
            {activeItem === t('generalMap') ? (
              <MapPage />
            ) : activeItem === t('interactiveMap') ? (
              <CarteInteractivePage />
            ) : activeItem === t('vehicleLocation') ? (
              <LocaliVehicule />
            ) : activeItem === t('realTimePersonnel') ? (
              <PersonnTemp />
            ) : activeItem === t('controlZones') ? (
              <ZoneControl />
            ) : activeItem === t('employeeManagement') ? (
              <GestionEmploy />
            ) : (
              <h2>{activeItem || t('welcome')}</h2>
            )}
          </main>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;