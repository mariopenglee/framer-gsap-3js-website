// Navbar component
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS
import { MotionConfig, motion } from 'framer-motion';


const Navbar = () => {

    return (
        <nav className="navbar">
          <motion.div 
          className="navbar-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          drag
          dragConstraints = {{ left: -200, right: 0, top: -200, bottom: 0 }}
          
          >
            <motion.div
              className="navbar-item"
              whileTap={{ scale: 1.2}}
              >
              <Link to="/">
                About
                </Link>
            </motion.div>
            <motion.div
              className="navbar-item"
              whileTap={{ scale: 1.2}}
              >
            <Link to="/projects">Projects</Link>
            </motion.div>
            <motion.div
              className="navbar-item"
              whileTap={{ scale: 1.2}}
              >
            <Link to="/interests">Interests</Link>
            </motion.div>
          </motion.div>
        </nav>
    );
};

export default Navbar;
