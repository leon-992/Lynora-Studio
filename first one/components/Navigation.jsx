import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect } from "react"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Navigation(props) {
    const { logoText } = props
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
            const offsetTop = target.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
        setIsMenuOpen(false)
    }

    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.5rem 0',
        background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'all 0.3s ease'
    }

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const logoStyle = {
        fontSize: '1rem',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    }

    const menuToggleStyle = {
        display: isMobile ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '5px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
        zIndex: 1001,
        position: 'relative'
    }

    const menuStyle = {
        display: !isMobile ? 'flex' : (isMenuOpen ? 'flex' : 'none'),
        listStyle: 'none',
        gap: '2.5rem',
        margin: 0,
        padding: 0,
        flexDirection: isMobile ? 'column' : 'row',
        ...(isMobile && {
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            padding: '2rem 1.5rem',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
        })
    }

    const linkStyle = {
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        position: 'relative',
        ...(isMobile && {
            fontSize: '1rem',
            padding: '0.75rem 0',
            display: 'block',
            width: '100%',
            textAlign: 'left'
        })
    }

    return (
        <nav style={navStyle} className="navbar">
            <div style={containerStyle} className="nav-container">
                <div style={logoStyle} className="logo">{logoText}</div>
                <button
                    style={menuToggleStyle}
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span style={{ width: '25px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', borderRadius: '2px', display: 'block' }}></span>
                    <span style={{ width: '25px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', borderRadius: '2px', display: 'block' }}></span>
                    <span style={{ width: '25px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', borderRadius: '2px', display: 'block' }}></span>
                </button>
                <ul style={menuStyle} className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#home" style={linkStyle} className="nav-link" onClick={(e) => handleLinkClick(e, '#home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#services" style={linkStyle} className="nav-link" onClick={(e) => handleLinkClick(e, '#services')}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" style={linkStyle} className="nav-link" onClick={(e) => handleLinkClick(e, '#portfolio')}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#contact" style={linkStyle} className="nav-link" onClick={(e) => handleLinkClick(e, '#contact')}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

addPropertyControls(Navigation, {
    logoText: {
        title: "Logo Text",
        type: ControlType.String,
        defaultValue: "Lynora Studio",
    },
})
