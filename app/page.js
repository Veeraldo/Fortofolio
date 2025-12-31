'use client';
import { useEffect, useState } from 'react';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [displayText, setDisplayText] = useState('');
    const fullText = "Web & Mobile Developer | Designer";
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    

    // SEMUA useEffect HARUS DI ATAS, SEBELUM CONDITIONAL RETURN!
    
    // Loading effect
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

   

    // Scroll progress effect
    useEffect(() => {
        const handleScrollProgress = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        
        window.addEventListener('scroll', handleScrollProgress);
        return () => window.removeEventListener('scroll', handleScrollProgress);
    }, []);

    // Typing animation effect
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, []);

    // Detect section saat scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'work', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll ke section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const projects = [
        {
            title: "Tunas Auto Graha Toyota Palembang",
            desc: "Aplikasi Mobile untuk divisi Komunikasi dan Marketing Tunas Auto Graha",
            tags: ["Flutter", "Firebase", "Dart"],
            link: "https://www.instagram.com/toyota.tunasautograha/?hl=en",
            image: "/Me.jpeg"
        },
        {
            title: "Hotel Sriwidjaya",
            desc: "Design Website untuk Hotel Sriwidjaya Palembang",
            tags: ["Figma", "UI/UX", "Design"],
            link: "#"
        },
    ];

    // LOADING SCREEN - Setelah semua hooks
    if (isLoading) {
        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <h1 style={{
                    fontSize: '60px',
                    fontWeight: '700',
                    color: '#fff'
                }}>
                    V
                </h1>
                <div style={{
                    width: '50px',
                    height: '3px',
                    backgroundColor: '#667eea',
                    marginTop: '20px'
                }} className="loading-bar" />
            </div>
        );
    }

    return (
        <div style={{
            backgroundColor: '#0a0a0a',
            color: '#ffffff',
            minHeight: '100vh'
        }}>
            {/* SCROLL PROGRESS BAR */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollProgress}%`,
                height: '3px',
                backgroundColor: '#667eea',
                zIndex: 9999,
                transition: 'width 0.1s ease'
            }} />

            {/* MINIMALIST NAVIGATION */}
            <nav style={{
                position: 'fixed',
                right: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                {[
                    { id: 'home', label: 'Home' },
                    { id: 'about', label: 'About' },
                    { id: 'work', label: 'Work' },
                    { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className="nav-dot"
                        style={{
                            position: 'relative',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            border: '2px solid #fff',
                            backgroundColor: activeSection === id ? '#fff' : 'transparent',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        aria-label={label}
                    >
                        <span style={{
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            whiteSpace: 'nowrap',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            fontSize: '12px',
                            pointerEvents: 'none'
                        }} className="nav-label">
                            {label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* SECTION 1: HERO */}
            <section id="home" style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 80px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ maxWidth: '800px' }}>
                    <p style={{
                        fontSize: '18px',
                        color: '#888',
                        marginBottom: '20px',
                        letterSpacing: '2px'
                    }}>
                        HI, I'M
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(40px, 8vw, 80px)',
                        fontWeight: '700',
                        marginBottom: '10px',
                        lineHeight: '1.1'
                    }}>
                        Veraldo
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(30px, 6vw, 60px)',
                        fontWeight: '700',
                        color: '#666',
                        marginBottom: '30px',
                        minHeight: '80px'
                    }}>
                        {displayText}
                        <span style={{
                            animation: 'blink 1s infinite',
                            marginLeft: '5px'
                        }}>|</span>
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#888',
                        lineHeight: '1.8',
                        maxWidth: '600px',
                        marginBottom: '40px'
                    }}>
                        Saya seorang mahasiswa Universitas Multi Data Palembang yang tertarik 
                        dalam menciptakan pengalaman digital yang indah dan fungsional.
                    </p>
                    <button
                        onClick={() => scrollToSection('work')}
                        style={{
                            padding: '18px 40px',
                            fontSize: '16px',
                            backgroundColor: 'transparent',
                            color: '#fff',
                            border: '2px solid #fff',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            letterSpacing: '1px'
                        }}
                        className="hero-button"
                    >
                        VIEW MY WORK
                    </button>
                </div>
            </section>

            {/* SECTION 2: ABOUT */}
            <section id="about" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '100px 80px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    <div>
                        <p style={{
                            fontSize: '14px',
                            color: '#888',
                            marginBottom: '10px',
                            letterSpacing: '2px'
                        }}>
                            ABOUT ME
                        </p>
                        <h2 style={{
                            fontSize: 'clamp(32px, 5vw, 48px)',
                            fontWeight: '700',
                            marginBottom: '30px'
                        }}>
                            Passionate about creating
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            color: '#aaa',
                            lineHeight: '1.8',
                            marginBottom: '30px'
                        }}>
                            Saya adalah mahasiswa yang sedang mempelajari web development dengan fokus 
                            pada teknologi modern seperti React, Next.js, dan Flutter.
                        </p>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '15px'
                        }}>
                            {['Next.js', 'React', 'Flutter', 'UI/UX', 'HTML/CSS', 'JavaScript'].map((skill) => (
                                <div key={skill} style={{
                                    padding: '12px 20px',
                                    backgroundColor: '#111',
                                    border: '1px solid #222',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }} className="skill-tag">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div style={{
                        position: 'relative',
                        aspectRatio: '1',
                        maxWidth: '500px'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            border: '2px solid #333',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img 
                                src="/Me.jpeg"
                                alt="Veraldo"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%)',
                                    transition: 'all 0.5s ease'
                                }}
                                className="about-image"
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                                transition: 'opacity 0.5s ease'
                            }} className="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WORK */}
            <section id="work" style={{
                minHeight: '100vh',
                padding: '100px 80px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <p style={{
                    fontSize: '14px',
                    color: '#888',
                    marginBottom: '10px',
                    letterSpacing: '2px'
                }}>
                    RECENT WORK
                </p>
                <h2 style={{
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: '700',
                    marginBottom: '60px'
                }}>
                    Projects I've built
                </h2>

                <div style={{
                    display: 'grid',
                    gap: '40px'
                }}>
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <div 
                                className="project-card"
                                style={{
                                    padding: '40px',
                                    backgroundColor: '#111',
                                    border: '1px solid #222',
                                    borderRadius: '8px',
                                    transition: 'all 0.4s ease',
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '20px'
                                }}>
                                    <div>
                                        <h3 style={{
                                            fontSize: '28px',
                                            fontWeight: '600',
                                            marginBottom: '15px'
                                        }}>
                                            {project.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '16px',
                                            color: '#888',
                                            lineHeight: '1.6',
                                            maxWidth: '600px'
                                        }}>
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div style={{
                                        fontSize: '24px',
                                        transition: 'transform 0.3s ease'
                                    }} className="project-arrow">
                                        →
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    gap: '10px',
                                    flexWrap: 'wrap'
                                }}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} style={{
                                            padding: '6px 12px',
                                            fontSize: '12px',
                                            backgroundColor: '#0a0a0a',
                                            border: '1px solid #333',
                                            borderRadius: '4px',
                                            color: '#888'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* SECTION 4: CONTACT */}
            <section id="contact" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 80px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                    <p style={{
                        fontSize: '14px',
                        color: '#888',
                        marginBottom: '10px',
                        letterSpacing: '2px'
                    }}>
                        GET IN TOUCH
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: '700',
                        marginBottom: '30px'
                    }}>
                        Let's work together
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#888',
                        lineHeight: '1.8',
                        marginBottom: '50px'
                    }}>
                        Punya project atau ide? Saya selalu terbuka untuk kesempatan 
                        baru dan kolaborasi yang menarik.
                    </p>
                    <a
                        href="mailto:veraldo24092005@gmail.com"
                        style={{
                            display: 'inline-block',
                            padding: '18px 40px',
                            fontSize: '16px',
                            backgroundColor: '#fff',
                            color: '#0a0a0a',
                            border: 'none',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            transition: 'all 0.3s ease'
                        }}
                        className="contact-button"
                    >
                        SAY HELLO
                    </a>

                    <div style={{
                        marginTop: '60px',
                        display: 'flex',
                        gap: '30px',
                        justifyContent: 'center'
                    }}>
                        {[
                            { name: 'GitHub', url: 'https://github.com/Veeraldo' },
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/veraldo' },
                            { name: 'Instagram', url: 'https://www.instagram.com/veerldo' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: '14px',
                                    color: '#888',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    letterSpacing: '1px'
                                }}
                                className="social-link"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* BACK TO TOP BUTTON */}
            {scrollProgress > 20 && (
                <button
                    onClick={() => scrollToSection('home')}
                    style={{
                        position: 'fixed',
                        bottom: '40px',
                        left: '40px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        color: '#0a0a0a',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease',
                        zIndex: 999
                    }}
                    className="back-to-top"
                >
                    ↑
                </button>
            )}
        </div>
    );
}