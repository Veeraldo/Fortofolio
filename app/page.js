// app/page.js - One Page Portfolio dengan Scroll Animation
'use client';
import { useEffect, useState } from 'react';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');

    // Smooth scroll ke section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    // Detect section saat scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
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

    return (
        <>
            {/* FLOATING NAVIGATION */}
            <nav style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 1000,
                display: 'flex',
                gap: '10px',
                flexDirection: 'column',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: '10px',
                borderRadius: '50px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
                {['home', 'about', 'projects', 'contact'].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="hover-grow"
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: activeSection === section ? '#667eea' : '#ddd',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        title={section.charAt(0).toUpperCase() + section.slice(1)}
                    />
                ))}
            </nav>

            <div className="scroll-indicator" style={{
                position: 'fixed',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                display: activeSection === 'home' ? 'block' : 'none'
            }}>
                <div className="animate-bounce" style={{
                    color: 'white',
                    fontSize: '2em',
                    cursor: 'pointer'
                }} onClick={() => scrollToSection('about')}>
                    ⬇️
                </div>
            </div>

            {/* SECTION 1: HOME */}
            <section id="home" style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
                <div 
                    className="animate-scale profile-container"
                    style={{
                        position: 'relative',
                        marginBottom: '30px'
                    }}
                >
                    <img 
                        src="/Me.jpeg"
                        alt="Foto Profil"
                        className="profile-image hover-float"
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '5px solid white',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                        }}
                    />
                    <div className="profile-ring"></div>
                </div>

                <h1 className="animate-fade-in delay-1" 
                    style={{
                        fontSize: '3em', 
                        color: 'white',
                        marginBottom: '10px',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        textAlign: 'center'
                    }}>
                    👋 Halo, Saya Veraldo
                </h1>
                
                <p className="animate-fade-in delay-2" 
                    style={{
                        fontSize: '1.3em', 
                        color: '#f0f0f0',
                        marginBottom: '40px',
                        textAlign: 'center'
                    }}>
                    Web Developer | Designer | Mobile Developer
                </p>
                
                <div className="animate-fade-in delay-3" 
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        gap: '15px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                    <button 
                        className="hover-lift" 
                        onClick={() => scrollToSection('projects')}
                        style={{
                            padding: '15px 30px',
                            fontSize: '1.1em',
                            backgroundColor: 'white',
                            color: '#667eea',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}
                    >
                        📂 Lihat Project
                    </button>
                    
                    <button 
                        className="hover-grow" 
                        onClick={() => scrollToSection('contact')}
                        style={{
                            padding: '15px 30px',
                            fontSize: '1.1em',
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        📧 Hubungi Saya
                    </button>
                </div>
            </section>

            {/* SECTION 2: ABOUT */}
            <section id="about" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px',
                backgroundColor: '#f7fafc'
            }}>
                <div style={{maxWidth: '800px', width: '100%'}}>
                    <h1 className="scroll-reveal" style={{
                        fontSize: '2.5em', 
                        marginBottom: '30px',
                        color: '#333',
                        textAlign: 'center'
                    }}>
                        Tentang Saya
                    </h1>
                    
                    <div className="scroll-reveal delay-1" style={{
                        padding: '30px',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        marginBottom: '40px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        <p style={{fontSize: '1.2em', lineHeight: '1.8', color: '#444'}}>
                            Halo! Nama saya <strong>Veraldo</strong>, saya adalah Mahasiswa Universitas Multi Data Palembang, dan ini adalah fortofolio saya sebagai dasar saya dalam mempelajari web dengan Next.js.
                        </p>
                    </div>
                    
                    <div className="scroll-reveal delay-2">
                        <h2 style={{fontSize: '2em', marginBottom: '20px', color: '#333', textAlign: 'center'}}>
                            Skills
                        </h2>
                        <div style={{
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                            gap: '15px'
                        }}>
                            {['💻 HTML & CSS', '⚛️ React', '🚀 Next.js', '🎨 UI/UX Design', '⚛ Flutter'].map((skill, i) => (
                                <div key={i} className="hover-lift scroll-reveal" style={{
                                    padding: '20px',
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    color: '#333',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    animationDelay: `${i * 0.1}s`
                                }}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: PROJECTS */}
            <section id="projects" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            }}>
                <div style={{maxWidth: '1000px', width: '100%'}}>
                    <h1 className="scroll-reveal" style={{
                        fontSize: '2.5em', 
                        marginBottom: '50px',
                        color: 'white',
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}>
                        Project Saya
                    </h1>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {['TAG Toyota Palembang', 'Hotel Sriwidjaya'].map((num) => (
                            <div key={num} className="hover-lift scroll-reveal" style={{
                                padding: '30px',
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                animationDelay: `${num * 0.2}s`
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '150px',
                                    backgroundColor: '#e2e8f0',
                                    borderRadius: '10px',
                                    marginBottom: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3em'
                                }}>
                                    📁
                                </div>
                                <h3 style={{fontSize: '1.5em', marginBottom: '10px', color: '#333'}}>
                                    Project {num}
                                </h3>
                                <p style={{color: '#666', lineHeight: '1.6'}}>
                                    Deskripsi singkat tentang project ini. Teknologi yang digunakan dan hasil yang dicapai.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: CONTACT */}
            <section id="contact" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px',
                backgroundColor: '#1a202c'
            }}>
                <div style={{maxWidth: '600px', width: '100%', textAlign: 'center'}}>
                    <h1 className="scroll-reveal" style={{
                        fontSize: '2.5em', 
                        marginBottom: '20px',
                        color: 'white'
                    }}>
                        Kontak Saya
                    </h1>
                    
                    <p className="scroll-reveal delay-1" style={{
                        fontSize: '1.2em', 
                        color: '#a0aec0', 
                        marginBottom: '40px'
                    }}>
                        Jangan ragu untuk menghubungi saya!
                    </p>
                    
                    <div className="scroll-reveal delay-2 hover-lift" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        padding: '30px',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                    }}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5j20cy6nP068DPAQvzLz2dFjFdzkk5DwEA&s" 
                            alt="Gmail Icon" 
                            style={{
                                width: "50px", 
                                height: "auto",
                                backgroundColor: "white",
                                padding: "8px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                            }} 
                        />
                        <div style={{textAlign: 'left'}}>
                            <p style={{fontSize: '0.9em', color: '#718096', marginBottom: '5px'}}>
                                Email
                            </p>
                            <a style={{fontSize: '1.1em', fontWeight: 'bold', color:'#333'}} href="mailto:veraldo24092005@gmail.com" target="_blank"  rel="noopener noreferrer">
                                veraldo24092005@gmail.com
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}