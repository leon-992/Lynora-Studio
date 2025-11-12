import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef } from "react"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Portfolio(props) {
    const { sectionTitle } = props
    const itemsRef = useRef([])

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, observerOptions)

        itemsRef.current.forEach(item => {
            if (item) observer.observe(item)
        })

        return () => {
            itemsRef.current.forEach(item => {
                if (item) observer.unobserve(item)
            })
        }
    }, [])

    const sectionStyle = {
        position: 'relative',
        zIndex: 2,
        padding: '6rem 2rem',
        background: '#000000'
    }

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto'
    }

    const titleStyle = {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: '4rem',
        background: 'linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.7))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    }

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
    }

    const itemStyle = {
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        textDecoration: 'none',
        display: 'block',
        color: 'inherit'
    }

    const imageContainerStyle = {
        position: 'relative',
        width: '100%',
        paddingTop: '60%',
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
    }

    const imageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center'
    }

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none'
    }

    const titleItemStyle = {
        marginTop: '1.5rem',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#ffffff',
        transition: 'color 0.3s ease'
    }

    const portfolioItems = [
        {
            image: 'Hoffmann & Valten Hero.PNG',
            alt: 'Hoffmann-Valten-Hero',
            title: 'Hoffmann & Valten | Architecture',
            link: 'project1.html'
        },
        {
            image: 'Farbora Malerbetrieb.PNG',
            alt: 'Farbora Malerbetrieb Hero',
            title: 'Farbora Malerbetrieb',
            link: 'project2.html'
        },
        {
            image: 'CryptoDemoProject Hero.PNG',
            alt: 'CryptoDemo Hero',
            title: 'CoinCatalyst Advisory',
            link: 'project3.html'
        }
    ]

    return (
        <section id="portfolio" style={sectionStyle} className="portfolio">
            <div style={containerStyle} className="container">
                <h2 style={titleStyle} className="section-title">{sectionTitle}</h2>
                <div style={gridStyle} className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <a
                            key={index}
                            ref={el => itemsRef.current[index] = el}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={itemStyle}
                            className="portfolio-item"
                            data-project={`project${index + 1}`}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)'
                                const overlay = e.currentTarget.querySelector('.portfolio-overlay')
                                if (overlay) overlay.style.opacity = '1'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                const overlay = e.currentTarget.querySelector('.portfolio-overlay')
                                if (overlay) overlay.style.opacity = '0'
                            }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect()
                                const x = e.clientX - rect.left
                                const y = e.clientY - rect.top
                                const overlay = e.currentTarget.querySelector('.portfolio-overlay')
                                if (overlay) {
                                    const glow = overlay.querySelector('.portfolio-glow')
                                    if (glow) {
                                        glow.style.left = x + 'px'
                                        glow.style.top = y + 'px'
                                    }
                                }
                            }}
                        >
                            <div style={imageContainerStyle} className="portfolio-image">
                                <img src={item.image} alt={item.alt} style={imageStyle} />
                                <div style={overlayStyle} className="portfolio-overlay">
                                    <div className="portfolio-glow" style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '0',
                                        height: '0',
                                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent)',
                                        borderRadius: '50%',
                                        transition: 'all 0.4s ease'
                                    }}></div>
                                </div>
                            </div>
                            <h3 style={titleItemStyle} className="portfolio-title">{item.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

addPropertyControls(Portfolio, {
    sectionTitle: {
        title: "Section Title",
        type: ControlType.String,
        defaultValue: "Portfolio",
    },
})
