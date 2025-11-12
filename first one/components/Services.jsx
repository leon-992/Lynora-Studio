import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef } from "react"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Services(props) {
    const { sectionTitle } = props
    const cardsRef = useRef([])

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

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card)
        })

        return () => {
            cardsRef.current.forEach(card => {
                if (card) observer.unobserve(card)
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
    }

    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '2.5rem',
        transition: 'all 0.4s ease',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
    }

    const iconStyle = {
        width: '60px',
        height: '60px',
        marginBottom: '1.5rem',
        color: '#e0e0e0',
        transition: 'all 0.3s ease'
    }

    const titleCardStyle = {
        fontSize: '1.5rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: '#ffffff'
    }

    const textStyle = {
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1.8
    }

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                </svg>
            ),
            title: 'Branding',
            text: 'Memorable digital identities that stand out.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            ),
            title: 'UI/UX Design',
            text: 'Interfaces and user experiences that engage.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                </svg>
            ),
            title: 'Development',
            text: 'Responsive websites built to work on all devices.'
        }
    ]

    return (
        <section id="services" style={sectionStyle} className="services">
            <div style={containerStyle} className="container">
                <h2 style={titleStyle} className="section-title">{sectionTitle}</h2>
                <div style={gridStyle} className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            style={cardStyle}
                            className="service-card"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)'
                                e.currentTarget.style.borderColor = '#ffffff'
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 255, 255, 0.1)'
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                                const icon = e.currentTarget.querySelector('.service-icon')
                                if (icon) {
                                    icon.style.color = '#ffffff'
                                    icon.style.transform = 'scale(1.1) rotate(5deg)'
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                                e.currentTarget.style.boxShadow = 'none'
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                                const icon = e.currentTarget.querySelector('.service-icon')
                                if (icon) {
                                    icon.style.color = '#e0e0e0'
                                    icon.style.transform = 'scale(1) rotate(0deg)'
                                }
                            }}
                        >
                            <div className="service-icon" style={iconStyle}>
                                {service.icon}
                            </div>
                            <h3 style={titleCardStyle} className="service-title">{service.title}</h3>
                            <p style={textStyle} className="service-text">{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

addPropertyControls(Services, {
    sectionTitle: {
        title: "Section Title",
        type: ControlType.String,
        defaultValue: "What We Create",
    },
})
