import { addPropertyControls, ControlType } from "framer"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Footer(props) {
    const { copyrightText } = props

    const footerStyle = {
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#000000'
    }

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto'
    }

    const textStyle = {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.9rem'
    }

    return (
        <footer style={footerStyle} className="footer">
            <div style={containerStyle} className="container">
                <p style={textStyle} className="footer-text">
                    {copyrightText}
                </p>
            </div>
        </footer>
    )
}

addPropertyControls(Footer, {
    copyrightText: {
        title: "Copyright Text",
        type: ControlType.String,
        defaultValue: "© 2024 Studio. All rights reserved.",
    },
})
