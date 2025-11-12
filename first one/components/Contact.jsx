import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Contact(props) {
    const { sectionTitle, contactText, emailAddress } = props
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const subject = encodeURIComponent('Contact Form Submission')
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )
        const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`
        
        window.location.href = mailtoLink
        
        setTimeout(() => {
            alert('Thank you for your message! Your email client should open shortly.')
            setFormData({ name: '', email: '', message: '' })
        }, 100)
    }

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

    const contentStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        padding: '4rem 2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px'
    }

    const textStyle = {
        fontSize: '1.2rem',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '2rem',
        lineHeight: 1.8
    }

    const emailContainerStyle = {
        marginBottom: '2.5rem',
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
    }

    const emailLabelStyle = {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
        fontWeight: 500,
        marginRight: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    }

    const emailLinkStyle = {
        color: '#ffffff',
        fontSize: '1.1rem',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.3s ease'
    }

    const formStyle = {
        textAlign: 'left',
        marginTop: '2rem'
    }

    const formGroupStyle = {
        marginBottom: '1.5rem'
    }

    const labelStyle = {
        display: 'block',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
        fontWeight: 500,
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    }

    const inputStyle = {
        width: '100%',
        padding: '1rem 1.25rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        color: '#ffffff',
        fontSize: '1rem',
        fontFamily: 'inherit',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        outline: 'none'
    }

    const textareaStyle = {
        ...inputStyle,
        resize: 'vertical',
        minHeight: '120px'
    }

    const buttonStyle = {
        padding: '1.25rem 3rem',
        fontSize: '1.1rem',
        fontWeight: 600,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'inherit',
        width: '100%',
        marginTop: '1rem',
        background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
        color: '#000000',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
    }

    return (
        <section id="contact" style={sectionStyle} className="contact">
            <div style={containerStyle} className="container">
                <h2 style={titleStyle} className="section-title">{sectionTitle}</h2>
                <div style={contentStyle} className="contact-content">
                    <div className="contact-glow" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
                        borderRadius: '50%',
                        filter: 'blur(60px)',
                        zIndex: -1,
                        animation: 'pulse-glow 4s ease-in-out infinite'
                    }}></div>
                    <p style={textStyle} className="contact-text">
                        {contactText}
                    </p>
                    
                    <div style={emailContainerStyle} className="contact-email">
                        <span style={emailLabelStyle} className="email-label">Email:</span>
                        <a
                            href={`mailto:${emailAddress}`}
                            style={emailLinkStyle}
                            className="email-address"
                            onMouseEnter={(e) => {
                                e.target.style.color = '#e0e0e0'
                                e.target.style.textDecoration = 'underline'
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#ffffff'
                                e.target.style.textDecoration = 'none'
                            }}
                        >
                            {emailAddress}
                        </a>
                    </div>

                    <form style={formStyle} className="contact-form" onSubmit={handleSubmit}>
                        <div style={formGroupStyle} className="form-group">
                            <label htmlFor="name" style={labelStyle} className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                                className="form-input"
                                required
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#ffffff'
                                    e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                                    e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)'
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                                    e.target.style.boxShadow = 'none'
                                }}
                            />
                        </div>
                        <div style={formGroupStyle} className="form-group">
                            <label htmlFor="email" style={labelStyle} className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={inputStyle}
                                className="form-input"
                                required
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#ffffff'
                                    e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                                    e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)'
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                                    e.target.style.boxShadow = 'none'
                                }}
                            />
                        </div>
                        <div style={formGroupStyle} className="form-group">
                            <label htmlFor="message" style={labelStyle} className="form-label">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                style={textareaStyle}
                                className="form-textarea"
                                rows="5"
                                required
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#ffffff'
                                    e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                                    e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)'
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                                    e.target.style.boxShadow = 'none'
                                }}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            style={buttonStyle}
                            className="btn btn-primary btn-large"
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)'
                                e.target.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.3)'
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)'
                                e.target.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.2)'
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

addPropertyControls(Contact, {
    sectionTitle: {
        title: "Section Title",
        type: ControlType.String,
        defaultValue: "Contact Us",
    },
    contactText: {
        title: "Contact Text",
        type: ControlType.String,
        defaultValue: "Get in touch with us to discuss your project.",
    },
    emailAddress: {
        title: "Email Address",
        type: ControlType.String,
        defaultValue: "contact@studio.com",
    },
})
