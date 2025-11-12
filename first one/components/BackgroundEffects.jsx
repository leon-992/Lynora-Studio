import { useEffect } from "react"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function BackgroundEffects() {
    useEffect(() => {
        // Particles animation is handled by CSS
        document.querySelectorAll('.particle').forEach((particle, index) => {
            particle.style.animationDelay = `${index * 0.5}s`
        })
    }, [])

    const particlesContainerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden'
    }

    const particleStyle = {
        position: 'absolute',
        width: '4px',
        height: '4px',
        background: '#e0e0e0',
        borderRadius: '50%',
        opacity: 0.4,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
    }

    const particlePositions = [
        { top: '20%', left: '10%', delay: '0s', duration: '12s' },
        { top: '60%', left: '80%', delay: '2s', duration: '18s' },
        { top: '40%', left: '50%', delay: '4s', duration: '15s' },
        { top: '80%', left: '30%', delay: '1s', duration: '20s' },
        { top: '30%', left: '70%', delay: '3s', duration: '14s' },
        { top: '70%', left: '15%', delay: '5s', duration: '16s' },
        { top: '50%', left: '90%', delay: '2.5s', duration: '13s' },
        { top: '10%', left: '40%', delay: '4.5s', duration: '17s' }
    ]

    const glowStyle = {
        position: 'fixed',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.3,
        zIndex: 0,
        pointerEvents: 'none',
        animation: 'pulse-glow 8s ease-in-out infinite'
    }

    return (
        <>
            {/* Animated Background Particles */}
            <div style={particlesContainerStyle} className="particles-container">
                {particlePositions.map((pos, index) => (
                    <div
                        key={index}
                        className="particle"
                        style={{
                            ...particleStyle,
                            top: pos.top,
                            left: pos.left,
                            animation: `float ${pos.duration} infinite ease-in-out`,
                            animationDelay: pos.delay
                        }}
                    ></div>
                ))}
            </div>

            {/* Background Glow Effects */}
            <div
                className="bg-glow bg-glow-1"
                style={{
                    ...glowStyle,
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
                    top: '-300px',
                    left: '-300px',
                    animationDelay: '0s'
                }}
            ></div>
            <div
                className="bg-glow bg-glow-2"
                style={{
                    ...glowStyle,
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent)',
                    top: '50%',
                    right: '-250px',
                    animationDelay: '2s'
                }}
            ></div>
            <div
                className="bg-glow bg-glow-3"
                style={{
                    ...glowStyle,
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06), transparent)',
                    bottom: '-200px',
                    left: '30%',
                    animationDelay: '4s'
                }}
            ></div>
        </>
    )
}
