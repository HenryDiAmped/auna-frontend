// Home.jsx

import React from "react";
import './Home.css';
import { SidebarP } from "../../components/sidebarP/SidebarP";
import { NavbarH } from "../../components/navbarH/NavbarH";
import { useState } from 'react';
import { Outlet } from "react-router-dom";

export const Home = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    // 1. Nuevo estado para el color de fondo. Por defecto blanco.
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

    return (
        <div 
            className="home-body app-container" 
            // 2. Aplicar el color de fondo dinámicamente
            style={{ backgroundColor: backgroundColor }}
        >
            <SidebarP 
                collapsed={isCollapsed} 
                toggleSidebar={() => setIsCollapsed(!isCollapsed)} 
                // 3. Pasar la función para cambiar el fondo al Sidebar
                setBackgroundColor={setBackgroundColor}
                currentBackgroundColor={backgroundColor} // Opcional: pasar el color actual si lo necesitas
            />
            <div className={`main-content ${isCollapsed ? "" : "mobile-pushed"}`}>
                <NavbarH toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
                <Outlet />
            </div>
            <div className="sidebar-overlay" onClick={() => setIsCollapsed(true)} />
        </div>
    );
};