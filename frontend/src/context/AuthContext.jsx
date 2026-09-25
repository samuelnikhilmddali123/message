import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null if not logged in

  // Mock initial state loading
  useEffect(() => {
    const savedUser = localStorage.getItem('christian_ministry_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    // Mock login logic
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email,
      hasLifetimeAccess: false,
      joinedAt: new Date().toISOString()
    };
    
    // For demo purposes, if email contains 'paid', give access
    if (email.includes('paid')) {
      mockUser.hasLifetimeAccess = true;
    }

    setUser(mockUser);
    localStorage.setItem('christian_ministry_user', JSON.stringify(mockUser));
  };

  const register = async (name, email, password, designation, location) => {
    const mockUser = {
      id: Date.now(),
      name,
      email,
      designation,
      location,
      hasLifetimeAccess: false,
      joinedAt: new Date().toISOString()
    };

    try {
      const res = await fetch('http://localhost:5001/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, pin: password, phone: '9999999999', designation, location })
      });
      const data = await res.json();
      if (data && (data.success || data.user)) {
        const fullUser = { ...mockUser, ...(data.user || {}) };
        setUser(fullUser);
        localStorage.setItem('christian_ministry_user', JSON.stringify(fullUser));
        return;
      }
    } catch (e) {
      console.warn('Backend registration not reachable, using local user state:', e);
    }

    setUser(mockUser);
    localStorage.setItem('christian_ministry_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('christian_ministry_user');
  };

  const upgradeAccess = () => {
    if (user) {
      const updatedUser = { ...user, hasLifetimeAccess: true };
      setUser(updatedUser);
      localStorage.setItem('christian_ministry_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, upgradeAccess }}>
      {children}
    </AuthContext.Provider>
  );
};
