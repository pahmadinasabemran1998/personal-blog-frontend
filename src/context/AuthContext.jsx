import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    // 🔑 Restore Authorization header on reload
    useEffect(() => {
        if (user?.token) {
            api.defaults.headers.common.Authorization = `Bearer ${user.token}`;
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        api.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        delete api.defaults.headers.common.Authorization;
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};