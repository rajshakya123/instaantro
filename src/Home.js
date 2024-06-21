import './App.css';

function Home() {
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
              <div class="logo">InstaAstro</div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Kundli</a></li>
                <li><a href="#">Matchmaking</a></li>
                <li><a href="#">Horoscope</a></li>
                <li><a href="#">Live</a></li>
                <li><a href="#">Panchang</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Resource</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
              <div class="cta-buttons">
                <button>Chat with Astrologer</button>
                <button>Talk with Astrologer</button>
                <button class="signup">Sign up</button>
              </div>
            </nav>
          </header>
          <main>
            <section class="hero">
              <div class="hero-content">
                <h1>Talk to India's Best Astrologers at ₹1</h1>
                <p>And get ₹100 talk time</p>
                <div class="hero-buttons">
                  <button>Chat With Astrologer</button>
                  <button>Talk To Astrologer</button>
                </div>
              </div>
              <div class="hero-image">
                <img src="path_to_image.jpg" alt="Hero Image" />
              </div>
            </section>
          </main>
        </body>
      </html>

    </>

  );
}

export default Home;
