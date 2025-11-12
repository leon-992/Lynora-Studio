import { addPropertyControls, ControlType } from "framer"
import { useEffect } from "react"
import Navigation from './Navigation'
import Hero from './Hero'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import BackgroundEffects from './BackgroundEffects'

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function App(props) {
    useEffect(() => {
        // Add Google Fonts
        const link = document.createElement('link')
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
        link.rel = 'stylesheet'
        document.head.appendChild(link)

        // Add global styles
        const style = document.createElement('style')
        style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            html {
                scroll-behavior: smooth;
            }

            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                background: #000000;
                color: #ffffff;
                line-height: 1.6;
                overflow-x: hidden;
                position: relative;
            }

            @keyframes float {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.4;
                }
                25% {
                    transform: translate(30px, -50px) scale(1.2);
                    opacity: 0.6;
                }
                50% {
                    transform: translate(-20px, 30px) scale(0.8);
                    opacity: 0.3;
                }
                75% {
                    transform: translate(40px, 20px) scale(1.1);
                    opacity: 0.5;
                }
            }

            @keyframes pulse-glow {
                0%, 100% {
                    transform: scale(1);
                    opacity: 0.3;
                }
                50% {
                    transform: scale(1.2);
                    opacity: 0.5;
                }
            }

            @keyframes line-glow {
                0%, 100% {
                    opacity: 0.1;
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
                }
                50% {
                    opacity: 0.3;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
                }
            }

            @keyframes gradient-shift {
                0%, 100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }

            @keyframes scroll-bounce {
                0%, 100% {
                    transform: translateY(0);
                    opacity: 0.6;
                }
                50% {
                    transform: translateY(8px);
                    opacity: 1;
                }
            }

            @keyframes grid-move {
                0% {
                    transform: translate(0, 0);
                }
                100% {
                    transform: translate(50px, 50px);
                }
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .service-card,
            .portfolio-item {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }

            .service-card.visible,
            .portfolio-item.visible {
                opacity: 1;
                transform: translateY(0);
            }

            @media (max-width: 1023px) {
                .portfolio-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                }
            }

            @media (max-width: 767px) {
                .portfolio-grid {
                    grid-template-columns: 1fr !important;
                }
                .services-grid {
                    grid-template-columns: 1fr !important;
                }
            }
        `
        document.head.appendChild(style)

        // Scroll progress indicator
        const progressBar = document.createElement('div')
        progressBar.className = 'scroll-progress'
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #ffffff, #e0e0e0);
            z-index: 10000;
            width: 0%;
            transition: width 0.1s ease;
        `
        document.body.appendChild(progressBar)

        const updateProgress = () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (window.pageYOffset / windowHeight) * 100
            progressBar.style.width = scrolled + '%'
        }

        window.addEventListener('scroll', updateProgress)

        // Page load animation
        document.body.style.opacity = '0'
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in'
            document.body.style.opacity = '1'
        }, 100)

        return () => {
            window.removeEventListener('scroll', updateProgress)
        }
    }, [])

    return (
        <div className="app">
            <BackgroundEffects />
            <Navigation />
            <Hero />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

addPropertyControls(App, {
    // Add any global props if needed
})
