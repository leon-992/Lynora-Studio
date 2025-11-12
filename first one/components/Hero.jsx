import { addPropertyControls, ControlType } from "framer"
import { useEffect, useState } from "react"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Hero(props) {
    const { title, subtitle, primaryButtonText, secondaryButtonText } = props
    const [scrollY, setScrollY] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)

    useEffect(() => {
        setWindowHeight(window.innerHeight)
        
        const handleScroll = () => {
            setScrollY(window.pageYOffset)
        }

        const handleResize = () => {
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handlePortfolioClick = (e) => {
        e.preventDefault()
        const portfolioSection = document.querySelector('#portfolio')
        if (portfolioSection) {
            const offsetTop = portfolioSection.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

    const sectionStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '8rem 2rem 4rem',
        zIndex: 2,
        overflow: 'hidden'
    }

    const contentStyle = {
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 3,
        padding: '0 2rem',
        transform: `translateY(${scrollY * 0.5}px)`,
        opacity: windowHeight > 0 ? Math.max(0.5, 1 - (scrollY / windowHeight) * 0.5) : 1,
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
    }

    const titleStyle = {
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em',
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        animation: 'fadeIn 1s ease-out'
    }

    const gradientTextStyle = {
        background: 'linear-gradient(135deg, #ffffff, #e0e0e0, #c0c0c0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 5s ease infinite'
    }

    const subtitleStyle = {
        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '3rem',
        fontWeight: 300,
        lineHeight: 1.6,
        maxWidth: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        animation: 'fadeIn 1s ease-out 0.3s backwards'
    }

    const highlightStyle = {
        color: '#ffffff',
        fontWeight: 500,
        position: 'relative',
        display: 'inline',
        textDecoration: 'none',
        backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: '0 1.15em',
        backgroundSize: '100% 0.15em',
        paddingBottom: '0.05em',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone'
    }

    const buttonsStyle = {
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        animation: 'fadeIn 1s ease-out 0.6s backwards'
    }

    const btnPrimaryStyle = {
        padding: '1rem 2.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'inherit',
        textDecoration: 'none',
        display: 'inline-block',
        background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
        color: '#000000',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
    }

    const btnSecondaryStyle = {
        padding: '1rem 2.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'inherit',
        textDecoration: 'none',
        display: 'inline-block',
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
    }

    const scrollIndicatorStyle = {
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: 10,
        opacity: 0.6,
        transition: 'opacity 0.3s ease',
        animation: 'fadeIn 1s ease-out 0.6s backwards'
    }

    return (
        <section id="home" style={sectionStyle} className="hero">
            <div style={contentStyle} className="hero-content">
                <div className="hero-lines" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    opacity: 0.1
                }}>
                    <div className="line line-1" style={{
                        position: 'absolute',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                        height: '1px',
                        width: '100%',
                        top: '20%',
                        left: 0,
                        animation: 'line-glow 3s ease-in-out infinite'
                    }}></div>
                    <div className="line line-2" style={{
                        position: 'absolute',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                        height: '1px',
                        width: '80%',
                        top: '50%',
                        left: '10%',
                        animation: 'line-glow 3s ease-in-out infinite 1s'
                    }}></div>
                    <div className="line line-3" style={{
                        position: 'absolute',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                        height: '1px',
                        width: '60%',
                        top: '80%',
                        left: '20%',
                        animation: 'line-glow 3s ease-in-out infinite 2s'
                    }}></div>
                </div>
                <h1 style={titleStyle} className="hero-title fade-in">
                    <span style={gradientTextStyle} className="gradient-text">
                        {title}
                    </span>
                </h1>
                <p style={subtitleStyle} className="hero-subtitle fade-in-delay">
                    {subtitle}
                </p>
                <div style={buttonsStyle} className="hero-buttons fade-in-delay-2">
                    <button style={btnPrimaryStyle} className="btn btn-primary">
                        {primaryButtonText}
                    </button>
                    <button
                        style={btnSecondaryStyle}
                        className="btn btn-secondary"
                        onClick={handlePortfolioClick}
                    >
                        {secondaryButtonText}
                    </button>
                </div>
            </div>
            <div style={scrollIndicatorStyle} className="scroll-indicator fade-in-delay-2">
                <span className="scroll-text" style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.7)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}>
                    Scroll
                </span>
                <div className="scroll-arrow" style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    animation: 'scroll-bounce 2s ease-in-out infinite'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                </div>
            </div>
            <div className="hero-grid" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                opacity: 0.05,
                backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'grid-move 20s linear infinite'
            }}></div>
        </section>
    )
}

addPropertyControls(Hero, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "Elevating brands through digital clarity.",
    },
    subtitle: {
        title: "Subtitle",
        type: ControlType.String,
        defaultValue: "Build stronger credibility, trust, and presence with a website designed to represent your brand at its best.",
    },
    primaryButtonText: {
        title: "Primary Button",
        type: ControlType.String,
        defaultValue: "Start Project",
    },
    secondaryButtonText: {
        title: "Secondary Button",
        type: ControlType.String,
        defaultValue: "Portfolio",
    },
})
