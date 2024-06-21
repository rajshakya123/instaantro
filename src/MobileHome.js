import './Home.css';

export const MobileHome = () => {

    return (
        <>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>InstaAstro</title>
                    <link rel="stylesheet" href="styles.css" />
                </head>
                <body>
                    <header>
                        <nav>
                            <div class="menu-icon">&#9776;</div>
                            <div class="logo">InstaAstro</div>
                            <button class="get-app">Get App</button>
                        </nav>
                    </header>
                    <main>
                        <section class="features">
                            <div class="feature-item">Free Kundli</div>
                            <div class="feature-item">Daily Horoscope</div>
                            <div class="feature-item">Live Sessions</div>
                            <div class="feature-item">Astrology Blog</div>
                        </section>
                        <section class="hero">
                            <div class="hero-content">
                                <h1>Talk to India's Best Astrologers at ₹1</h1>
                                <p>And get ₹100 talk time</p>
                                <div class="hero-buttons">
                                    <button>Chat with Astrologer</button>
                                    <button>Talk with Astrologer</button>
                                </div>
                                <div class="app-buttons">
                                    <button>Get it on Google Play</button>
                                    <button>Download on the App Store</button>
                                </div>
                            </div>
                        </section>
                    </main>
                </body>
            </html>
        </>
    );
}