const contactEmail = "contact@fluidlabsllc.com";

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Fluid Labs home">
          <span className="brand-mark" aria-hidden="true">
            FL
          </span>
          <span>Fluid Labs LLC</span>
        </a>

        <nav>
          <a href="#company">Company</a>
          <a href="#products">Products</a>
          <a className="nav-contact" href={`mailto:${contactEmail}`}>
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            Independent software studio
          </p>
          <h1>Thoughtful software for everyday progress.</h1>
          <p className="hero-description">
            Fluid Labs LLC designs and operates focused digital products that
            turn complicated work into clear, useful experiences.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#products">
              View our products
              <span aria-hidden="true">↘</span>
            </a>
            <a className="text-action" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
        </div>

      </section>

      <section className="company section-shell" id="company">
        <div className="section-heading">
          <p className="section-number">01 / Company</p>
          <h2>Small by design. Serious about the details.</h2>
        </div>

        <div className="company-content">
          <p>
            We build practical software with an emphasis on clarity,
            reliability, and long-term value. Every product is developed and
            operated by Fluid Labs LLC.
          </p>

          <dl className="company-facts">
            <div>
              <dt>Legal entity</dt>
              <dd>Fluid Labs LLC</dd>
            </div>
            <div>
              <dt>Entity type</dt>
              <dd>Limited liability company</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>United States</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="products section-shell" id="products">
        <div className="section-heading">
          <p className="section-number">02 / Products</p>
          <h2>Products with a clear purpose.</h2>
        </div>

        <article className="product-card">
          <div className="product-identity">
            <span className="product-mark" aria-hidden="true">
              FC
            </span>
            <div>
              <p className="product-name">FitnessCoach</p>
              <p className="product-status">In development</p>
            </div>
          </div>

          <p className="product-description">
            A coaching platform designed to help fitness professionals create
            programs, support clients, and turn goals into consistent action.
          </p>

          <span className="product-link">
            A Fluid Labs product
            <span aria-hidden="true">01</span>
          </span>
        </article>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="section-number">03 / Contact</p>
        <div className="contact-row">
          <h2>Let&apos;s make something useful.</h2>
          <a href={`mailto:${contactEmail}`}>
            {contactEmail}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            FL
          </span>
          <span>Fluid Labs LLC</span>
        </a>
        <p>© {new Date().getFullYear()} Fluid Labs LLC</p>
      </footer>
    </main>
  );
}
