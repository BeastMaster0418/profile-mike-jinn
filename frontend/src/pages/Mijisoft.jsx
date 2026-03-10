import Footer from '../components/Footer';
import './Mijisoft.css';

export default function Mijisoft() {
  return (
    <>
      <main className="main">
        <section className="section">
          <h2>About us</h2>
          <p>
            Mijisoft Studio is a software development company dedicated to exploring unknown frontiers of software technology. We deliver innovative digital solutions for the complex world with fearless curiosity and a collaborative spirit.
          </p>
        </section>

        <section className="section">
          <h2>What we do</h2>
          <p>
            We specialize in building scalable software applications, offering consultancy, and integrating cutting-edge technologies to meet our clients' unique challenges. Whether it's web development, mobile apps, or customized software solutions, our team thrives on innovation and quality.
          </p>
        </section>

        <section className="section">
          <h2>Experience</h2>
          <div className="experience-block">
            <p className="experience-range">2019–Now · ABC Warehouse</p>
            <p className="experience-role">Product Information Management</p>
            <ul>
              <li>Designed CI pipelines; 35% faster deploys.</li>
              <li>Led migration to edge-rendered stack, cutting TTFB by 42%.</li>
            </ul>
          </div>
          <div className="experience-block">
            <p className="experience-range">2014–2019 · Company B</p>
            <p className="experience-role">E-Commerce and ERP Tools</p>
            <ul>
              <li>Launched analytics features used by 50k MAU.</li>
              <li>Built internal design system adopted by 6 teams.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <div className="project-card">
            <h3 className="project-name">PyNOP CLI</h3>
            <p className="project-desc">Zero-dep CLI scaffolder with plug-in architecture.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
          <div className="project-card">
            <h3 className="project-name">ABC-PIM</h3>
            <p className="project-desc">Lightweight TS data-fetch layer with caching.</p>
            <a href="#" rel="noopener noreferrer">Docs →</a>
          </div>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li><strong>Other:</strong> A11y, Testing, Perf</li>
            <li><strong>Tooling:</strong> Git, Docker, CI/CD</li>
            <li><strong>Cloud:</strong> AWS, Azure, cPanel, WHMCS</li>
            <li><strong>Framework:</strong> Django, Flask, Wordpress, Laravel, NOPCommerce, Bigcommerce, Shopify, Magento</li>
            <li><strong>Backend:</strong> Python/Django/DRF/Flask/Web2Py, Java/J2EE/Struts/JSF/Spring/Hibernate, .NET/C#/ASP.NET/.NETCore/IIS.NET/Nopcommerce, REST, SQL/NoSQL</li>
            <li><strong>Frontend:</strong> HTML, CSS, JS/TS, React, Vue, Angular</li>
          </ul>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <p className="contact-line contact-inline">
            Email: <a href="mailto:admin@mijisoft.com">admin@mijisoft.com</a>
            {' · '}
            GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">@you</a>
            {' · '}
            LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">/in/you</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
