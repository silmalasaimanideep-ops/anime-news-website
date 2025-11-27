/* news.js — SPA router for Anime News */
(function () {
  /* ───────────── DATA SOURCES ───────────── */

  const latestArticlesHTML = `
    <section id="latest" class="content-section">
      <h2>Latest News</h2>
      <p class="lead">Stay up to date with the newest anime announcements, trailers, events, and industry updates.</p>
      
      <!-- 1 -->
      <article class="news-card">
        <img src="Assets/ln1.webp" class="news-img" alt="Sentenced to Be a Hero">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">Sentenced to Be a Hero Anime Shares Labor Thanksgiving Day Video</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Mikikazu Komatsu</span>
            <time class="news-date">NOV 24, 2025</time>
          </div>
        </div>
      </article>

      <!-- 2 -->
      <article class="news-card">
        <img src="Assets/ln2.webp" class="news-img" alt="BOCCHI THE ROCK! Stage Play">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">BOCCHI THE ROCK! Stage Play Returns with 4th Show in February 2026</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Mikikazu Komatsu</span>
            <time class="news-date">NOV 23, 2025</time>
          </div>
        </div>
      </article>

      <!-- 3 -->
      <article class="news-card">
        <img src="Assets/ln3.webp" class="news-img" alt="Super Space Sheriff Gavan Infinity">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">Super Space Sheriff Gavan Infinity Tokusatsu Series Announced for 2026</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Paul Chapman</span>
            <time class="news-date">NOV 23, 2025</time>
          </div>
        </div>
      </article>

      <!-- 4 -->
      <article class="news-card">
        <img src="Assets/ln4.webp" class="news-img" alt="Undead Unluck">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">Undead Unluck Winter Arc Anime Reveals New Trailer, Key Art</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Paul Chapman</span>
            <time class="news-date">NOV 23, 2025</time>
          </div>
        </div>
      </article>

      <!-- 5 -->
      <article class="news-card">
        <img src="Assets/ln5.webp" class="news-img" alt="My Hero Academia: All's Justice">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">MY HERO ACADEMIA: All’s Justice Trailer Gathers Heroes for Showdown</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Joseph Luster</span>
            <time class="news-date">NOV 23, 2025</time>
          </div>
        </div>
      </article>

      <!-- 6 -->
      <article class="news-card">
        <img src="Assets/ln6.webp" class="news-img" alt="Magical Girl Raising Project Restart">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">Magical Girl Raising Project Restart Anime Unveils Character Art for Nokko</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Kara Dennison</span>
            <time class="news-date">NOV 23, 2025</time>
          </div>
        </div>
      </article>

      <!-- 7 -->
      <article class="news-card">
        <img src="Assets/ln7.webp" class="news-img" alt="You and Idol Precure">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">You and Idol Precure♪ Anime Announces Star-Studded Appreciation</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Kara Dennison</span>
            <time class="news-date">NOV 23, 2025</time>
          </div>
        </div>
      </article>

      <!-- 8 -->
      <article class="news-card">
        <img src="Assets/ln8.webp" class="news-img" alt="DARK MACHINE THE ANIMATION">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">Original Esports Anime DARK MACHINE THE ANIMATION Reveals Teaser Trailer</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Liam Dempsey</span>
            <time class="news-date">NOV 22, 2025</time>
          </div>
        </div>
      </article>

      <!-- 9 -->
      <article class="news-card">
        <img src="Assets/ln9.webp" class="news-img" alt="Expelled from Paradise">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">Expelled from Paradise: Resonance of the Heart Anime Film Debuts</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Paul Chapman</span>
            <time class="news-date">NOV 22, 2025</time>
          </div>
        </div>
      </article>

      <!-- 10 -->
      <article class="news-card">
        <img src="Assets/ln10.webp" class="news-img" alt="Special Feature">
        <div class="news-meta">
          <a class="news-label">NEWS</a>
          <a class="news-title-link">
            <h3 class="news-title">Special Feature: Inside the Making of Modern Anime</h3>
          </a>
          <div class="news-details">
            <span class="news-author">Maya Fujimoto</span>
            <time class="news-date">NOV 25, 2025</time>
          </div>
        </div>
      </article>
    </section>
  `;

  const featuresItems = [
    {
      title: "Why Did It Take Me So Long to Watch Akudama Drive?",
      author: "Tony Cocking",
      date: "NOV 23, 2025",
    },
    {
      title:
        "Cozy Anime Corner: Get Spirited Away by Kakuriyo -Bed & Breakfast for Spirits-",
      author: "Kelly Knox",
      date: "NOV 21, 2025",
    },
    {
      title: "Anime Like Chainsaw Man From Tokyo Ghoul to FLCL",
      author: "Tony Cocking",
      date: "NOV 20, 2025",
    },
    {
      title:
        "Basic Doesn’t Back Down: A Thank You Letter to Gachiakuta's Zanka Nijiku",
      author: "Briana Lawrence",
      date: "NOV 19, 2025",
    },
    {
      title:
        "How Director Tatsuya Nagamine Created a Framework for Excellence in Anime",
      author: "Daniel Dockery",
      date: "NOV 18, 2025",
    },
    {
      title:
        "Tojima Wants to Be a Kamen Rider Is the Perfect Watch for Elder Millennials",
      author: "Daniel Dockery",
      date: "NOV 18, 2025",
    },
    {
      title: "Gachiakuta Episode 18 Recap, “Oh Zap, Totes Legit”",
      author: "Kelly Knox",
      date: "NOV 12, 2025",
    },
    {
      title: "Gachiakuta Episode 19 Recap, “Watchman Series”",
      author: "Kelly Knox",
      date: "NOV 18, 2025",
    },
    {
      title: "Why Naruto’s Akatsuki Resonates So Hard with Black Anime Fans",
      author: "Jameel Raeburn",
      date: "NOV 11, 2025",
    },
    {
      title: "10 Revenge Anime That Have Reached the Breaking Point",
      author: "Briana Lawrence & Mohamed Mir",
      date: "NOV 6, 2025",
    },
  ];

  const seasonalAvail =
    "North America, Central America, South America, Europe, Africa, Oceania, the Middle East, CIS, Indian Subcontinent and Southeast Asia";

  const seasonalShows = [
    {
      title: "Gachiakuta",
      studio: "Bones Film",
      genres: "Action, Dark Fantasy, Thriller",
      episodes: "24",
      sub: "Sundays at 12:30 AM JST",
      dub: "Same-day dub on Crunchyroll",
    },
    {
      title: "My Hero Academia FINAL SEASON",
      studio: "Bones",
      genres: "Action, Superhero, Shonen",
      episodes: "25",
      sub: "Saturdays at 5:30 PM JST",
      dub: "English dub airs within 24 hours",
    },
    {
      title: "SPY x FAMILY Season 3",
      studio: "WIT STUDIO × CloverWorks",
      genres: "Comedy, Action, Slice of Life",
      episodes: "12",
      sub: "Saturdays at 11:00 PM JST",
      dub: "Next-day English dub",
    },
    {
      title: "To Your Eternity Season 3",
      studio: "Drive × Studio Massket",
      genres: "Drama, Supernatural, Fantasy",
      episodes: "11",
      sub: "Saturdays at 7:00 PM JST",
      dub: "Same-day dub on Crunchyroll",
    },
    {
      title: "Let's Play",
      studio: "A-1 Pictures",
      genres: "Romance, Comedy, Slice of Life",
      episodes: "12",
      sub: "Fridays at 10:00 PM JST",
      dub: "Next-day English dub",
    },
    {
      title:
        "My Status as an Assassin Obviously Exceeds the Hero’s",
      studio: "SILVER LINK",
      genres: "Fantasy, Adventure, Isekai",
      episodes: "12",
      sub: "Mondays at 1:30 AM JST",
      dub: "48-hour dub delay",
    },
    {
      title: "A Gatherer's Adventure in Isekai",
      studio: "ENGI",
      genres: "Fantasy, Crafting, Adventure",
      episodes: "12",
      sub: "Thursdays at 8:00 PM JST",
      dub: "Simultaneous weekly dub",
    },
    {
      title: "A Mangaka's Weirdly Wonderful Workplace",
      studio: "Doga Kobo",
      genres: "Slice of Life, Comedy",
      episodes: "12",
      sub: "Wednesdays at 6:30 PM JST",
      dub: "Weekly dub release",
    },
    {
      title: "A Wild Last Boss Appeared!",
      studio: "Passione",
      genres: "Fantasy, Action, Adventure",
      episodes: "12",
      sub: "Saturdays at 9:45 PM JST",
      dub: "24-hour dub delay",
    },
    {
      title: "Alma-chan Wants to Be a Family!",
      studio: "MAPPA",
      genres: "Drama, Slice of Life",
      episodes: "13",
      sub: "Sundays at 5:00 PM JST",
      dub: "Weekly dub release",
    },
  ];

  const announcementItems = [
    {
      title: "Bleach: Soul Resonance Action RPG Game Launches Worldwide",
      author: "Liam Dempsey",
      date: "NOV 21, 2025",
    },
    {
      title: "‘So Bad’ Web Anime Teaser Promises Comedy Chaos",
      author: "Kara Denninson",
      date: "NOV 20, 2025",
    },
    {
      title:
        "Iconic Return: Lelouch from Code Geass Headlines Special Feature",
      author: "Joseph Luster",
      date: "NOV 19, 2025",
    },
    {
      title:
        "Anime Frontier Returns—Crunchyroll Presents New Guests & Events",
      author: "Mikikazu Komatsu",
      date: "NOV 18, 2025",
    },
    {
      title:
        "Anyway, I’m Falling in Love with You Premieres This Season",
      author: "Adriana Hazra",
      date: "NOV 17, 2025",
    },
    {
      title:
        "Release That Witch Anime Announced: Fiery Visual Revealed",
      author: "Rafael Antonio Pineda",
      date: "NOV 16, 2025",
    },
    {
      title:
        "Atom: The Beginning Officially Added to Titan Manga Lineup",
      author: "Paul Chapman",
      date: "NOV 15, 2025",
    },
    {
      title:
        "Jujutsu Kaisen Villains Preview: Mystery Box Holds Many Eyes",
      author: "Kelly Knox",
      date: "NOV 14, 2025",
    },
    {
      title:
        "Chibi Heroes Assemble: Overlord, Tanya, and Kazuma Join in Maraca Musical",
      author: "Briana Lawrence",
      date: "NOV 13, 2025",
    },
    {
      title:
        "Honkai: Star Rail x Crunchyroll Collaboration Hero Showcase",
      author: "Liam Dempsey",
      date: "NOV 12, 2025",
    },
  ];

  /* ───────────── RENDER HELPERS ───────────── */

  function renderFeaturesSection() {
    const cards = featuresItems
      .map(
        (f, i) => `
        <article class="news-card">
          <img src="Assets/f${i + 1}.webp" class="news-img" alt="${f.title}">
          <div class="news-meta">
            <a class="news-label">FEATURES</a>
            <a class="news-title-link">
              <h3 class="news-title">${f.title}</h3>
            </a>
            <div class="news-details">
              <span class="news-author">${f.author}</span>
              <time class="news-date">${f.date}</time>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    return `
      <section id="features" class="content-section">
        <h2>Features</h2>
        <p class="lead">In-depth articles, editor picks, analysis, and explorations into the world of anime.</p>
        ${cards}
      </section>
    `;
  }

  function renderSeasonalSection() {
    const cards = seasonalShows
      .map(
        (s, i) => `
        <article class="news-card seasonal-card">
          <img src="Assets/nf${i + 1}.webp" class="news-img" alt="${s.title}">
          <div class="news-meta">
            <a class="news-label">SEASONAL LINEUP</a>
            <a class="news-title-link">
              <h3 class="news-title">${s.title}</h3>
            </a>

            <div class="news-details">
              <span class="studio">Studio: ${s.studio}</span>
            </div>

            <div class="season-info">
              <p><strong>Sub Airtime:</strong> ${s.sub}</p>
              <p><strong>Dub Airtime:</strong> ${s.dub}</p>
            </div>

            <hr class="season-divider">

            <ul class="extra-meta">
              <li><strong>Availability:</strong> ${seasonalAvail}</li>
              <li><strong>Genres:</strong> ${s.genres}</li>
              <li><strong>Episodes:</strong> ${s.episodes}</li>
            </ul>

            <p class="cta">
              <a href="#" class="watch-now">
                ${i < 4 ? "WATCH ON HI ANIME" : "ADD TO WATCHLIST"}
              </a>
              |
              <a href="#" class="trailer">
                ${i < 10 ? "OFFICIAL TRAILER" : "TRAILER"}
              </a>
            </p>
          </div>
        </article>
      `
      )
      .join("");

    return `
      <section id="seasonal" class="content-section">
        <h2>Seasonal Lineup — Fall 2025 (Top Picks)</h2>
        <p class="lead">
          A curated selection of confirmed and upcoming Fall 2025 anime shows — complete details included.
        </p>
        ${cards}
      </section>
    `;
  }

  function renderAnnouncementsSection() {
    const cards = announcementItems
      .map(
        (item, i) => `
        <article class="news-card">
          <img src="Assets/a${i + 1}.webp" class="news-img" alt="${item.title}">
          <div class="news-meta">
            <a class="news-label">Announcement</a>
            <a class="news-title-link">
              <h3 class="news-title">${item.title}</h3>
            </a>
            <div class="news-details">
              <span class="news-author">${item.author}</span>
              <time class="news-date">${item.date}</time>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    return `
      <section id="Announcement" class="content-section">
        <h2>Announcement</h2>
        <p class="lead">Official updates, project reveals, special events, and major anime-related announcements.</p>
        ${cards}
      </section>
    `;
  }

  /* ───────────── PAGES MAP ───────────── */

  const pages = {
    latest: latestArticlesHTML,
    features: renderFeaturesSection(),
    seasonal: renderSeasonalSection(),
    Announcement: renderAnnouncementsSection(),
  };

  /* ───────────── ROUTER / NAVIGATION ───────────── */

  const container = document.getElementById("main-content");

  function render(pageKey) {
    if (!container) return;

    const key = pages[pageKey] ? pageKey : "latest";
    container.innerHTML = pages[key];

    container.setAttribute("tabindex", "-1");
    container.focus({ preventScroll: true });

    document.querySelectorAll("nav a[href^='#']").forEach((a) => {
      const target = (a.getAttribute("href") || "").replace(/^#/, "");
      if (target === key) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      } else {
        a.classList.remove("active");
        a.removeAttribute("aria-current");
      }
    });
  }

  function onHashChange() {
    const hash = location.hash.replace(/^#/, "");
    render(hash);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  document.addEventListener(
    "click",
    function (e) {
      if (e.defaultPrevented) return;

      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      if (a.hasAttribute("data-no-router")) return;

      e.preventDefault();
      const target = a.getAttribute("href").replace(/^#/, "") || "latest";
      location.hash = "#" + target;

      const menu = document.getElementById("primary-menu");
      const toggle = document.getElementById("menu-toggle");
      if (menu && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    },
    false
  );

  window.addEventListener("hashchange", onHashChange, false);

  /* ───────────── INIT ───────────── */

  document.addEventListener("DOMContentLoaded", function () {
    // initial route
    if (!location.hash) {
      location.hash = "#latest";
    } else {
      onHashChange();
    }

    /* Mobile menu toggle */
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("primary-menu");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        const isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }

    const aboutLink = document.querySelector(
      '.main-nav a[data-no-router][href="#footer-section"]'
    );

    if (aboutLink) {
      aboutLink.addEventListener("click", function (e) {
        e.preventDefault(); 

        const footer = document.getElementById("footer-section");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }

        const menu = document.getElementById("primary-menu");
        const toggle = document.getElementById("menu-toggle");
        if (menu && menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }

        document.querySelectorAll("nav a[href^='#']").forEach((a) => {
          a.classList.remove("active");
          a.removeAttribute("aria-current");
        });
        aboutLink.classList.add("active");
        aboutLink.setAttribute("aria-current", "page");
      });
    }
  });
})();
