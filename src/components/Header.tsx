import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Directors', href: '#directors' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const linkHover = {
    initial: { width: 0 },
    hover: { width: '100%' },
    transition: { duration: 0.3 },
  };

  return (
    <motion.header
        className="fixed top-0 left-0 w-full z-50"
        initial={prefersReduced ? {} : { y: -100, opacity: 0 }}
        animate={prefersReduced ? {} : { y: 0, opacity: 1, backgroundColor: scrolled ? '#32190F' : 'transparent' }}
        transition={{ duration: 0.3 }}
      >
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-terracotta rounded" />
          <span className="text-xl font-serif text-white">Sri Parinithee Infra</span>
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a href={item.href} className="hover:text-warmCopper transition-colors">
                {item.name}
              </a>
              <motion.div
                className="absolute left-0 -bottom-1 h-0.5 bg-warmCopper"
                variants={linkHover}
                initial="initial"
                whileHover="hover"
              />
            </li>
          ))}
          <li>
            <motion.a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-warmCopper transition-colors"
                whileHover={!prefersReduced ? { scale: 1.03 } : {}}
                whileTap={!prefersReduced ? { scale: 0.97 } : {}}
              >
                <Phone size={16} />
                <span>+1 234 567 890</span>
              </motion.a>
          </li>
          <li>
            <motion.a href="#contact" className="bg-terracotta text-white px-4 py-2 rounded hover:bg-warmCopper transition-colors"
                whileHover={!prefersReduced ? { scale: 1.03 } : {}}
                whileTap={!prefersReduced ? { scale: 0.97 } : {}}
              >
                Enquire Now
              </motion.a>
          </li>
        </ul>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          className="md:hidden bg-primaryDark bg-opacity-95 text-white pt-2 pb-4"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="block hover:text-warmCopper" onClick={() => setMobileOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-warmCopper">
                <Phone size={16} />
                <span>+1 234 567 890</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="bg-terracotta text-white block w-full text-center py-2 rounded hover:bg-warmCopper" onClick={() => setMobileOpen(false)}>
                Enquire Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
