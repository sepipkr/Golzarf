import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderBottomColor: 'rgba(229, 231, 235, 0.5)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Menu - Mobile */}
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-6 h-6 text-gray-900" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-1 lg:flex-none text-center lg:text-right">
            <h1 className="text-2xl tracking-tight" style={{ fontWeight: 700, color: '#1B1464' }}>
              گل‌ظرف
            </h1>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">
            <Link 
              to="/" 
              className={`relative text-[15px] transition-colors ${
                isActive('/') && location.pathname === '/' ? 'text-[#1B1464]' : 'text-gray-700 hover:text-[#1B1464]'
              }`}
            >
              صفحه اصلی
              {isActive('/') && location.pathname === '/' && (
                <motion.div
                  className="absolute -bottom-2 right-0 left-0 h-0.5 bg-[#1B1464]"
                  layoutId="underline"
                />
              )}
            </Link>
            <Link 
              to="/products" 
              className={`relative text-[15px] transition-colors ${
                isActive('/products') ? 'text-[#1B1464]' : 'text-gray-700 hover:text-[#1B1464]'
              }`}
            >
              محصولات
              {isActive('/products') && (
                <motion.div
                  className="absolute -bottom-2 right-0 left-0 h-0.5 bg-[#1B1464]"
                  layoutId="underline"
                />
              )}
            </Link>
            <Link 
              to="/about" 
              className={`relative text-[15px] transition-colors ${
                isActive('/about') ? 'text-[#1B1464]' : 'text-gray-700 hover:text-[#1B1464]'
              }`}
            >
              درباره ما
              {isActive('/about') && (
                <motion.div
                  className="absolute -bottom-2 right-0 left-0 h-0.5 bg-[#1B1464]"
                  layoutId="underline"
                />
              )}
            </Link>
            <Link 
              to="/contact" 
              className={`relative text-[15px] transition-colors ${
                isActive('/contact') ? 'text-[#1B1464]' : 'text-gray-700 hover:text-[#1B1464]'
              }`}
            >
              تماس
              {isActive('/contact') && (
                <motion.div
                  className="absolute -bottom-2 right-0 left-0 h-0.5 bg-[#1B1464]"
                  layoutId="underline"
                />
              )}
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 rounded-lg transition-all text-[15px]"
              style={{ 
                backgroundColor: '#1B1464',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#140f4d';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(27, 20, 100, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1B1464';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              درخواست مشاوره
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}