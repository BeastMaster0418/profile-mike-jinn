import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import './Mijisoft.css';

const API_BASE = 'http://localhost:8000';

function getSectionTitle(section) {
  return section.SectionName ?? 'Section';
}

function getSectionContent(section) {
  return section.SectionContent ?? 'Section';
}

function getSectionId(section, index) {
  return section?.slug ?? section?.id ?? `section-${index}`;
}

export default function Mijisoft() {
  const { pathname, hash } = useLocation();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_BASE}/api/sections/`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSections(Array.isArray(data.sections) ? data.sections : []);
      })
      .catch((e) => {
        setError(e.message);
        setSections([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [pathname, hash, sections]);

  const useApiSections = sections.length > 0;

  return (
    <>
      <main className="main ">
        {loading && (
          <p className="section" style={{ color: 'var(--color-muted)' }}>
            Loading…
          </p>
        )}
        {error && !useApiSections && (
          <p className="section" style={{ color: '#f87171' }}>
            Could not load sections: {error}
          </p>
        )}
        {/* {useApiSections ? (
          sections.map((section, index) => {
            console.log(section.SectionName, section.SectionContent);
            const title = getSectionTitle(section);
            const content = getSectionContent(section);
            const id = getSectionId(section, index);
            return (
              <section key={section.id ?? index} className="section" id={id}>
                <h2>{title}</h2>
                {content && <p>{content}</p>}
              </section>
            );
          })
        ) : ( */}
          <>
            <section className="section" id="about">
              <h2>About us</h2>
              <p>
                Mijisoft Studio is a software development company dedicated to exploring unknown frontiers of software technology. We deliver innovative digital solutions for the complex world with fearless curiosity and a collaborative spirit.
              </p>
            </section>

            <section className="section" id="work">
              <h2>What we do</h2>
              <p>
                We specialize in building scalable software applications, offering consultancy, and integrating cutting-edge technologies to meet our clients' unique challenges. Whether it's web development, mobile apps, or customized software solutions, our team thrives on innovation and quality.
              </p>
              <div id="experience">
                <h3 className="section-subhead">Experience:</h3>
                <div className="cards-grid experience-grid">
                  <div className="experience-block card">
                    <p className="experience-range">2019-NOW ABC WAREHOUSE</p>
                    <h3 className="experience-role">Product Information Management</h3>
                    <ul>
                      <li>Led migration to edge-rendered stack, cutting TTFB by 42%.</li>
                      <li>Designed CI pipelines; 35% faster deploys.</li>
                    </ul>
                  </div>
                  <div className="experience-block card">
                    <p className="experience-range">2014-2019 COMPANY B</p>
                    <h3 className="experience-role">E-Commerce and ERP Tools</h3>
                    <ul>
                      <li>Built internal design system adopted by 6 teams.</li>
                      <li>Launched analytics features used by 50k MAU.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section-cards" id="projects">
              <h2>Projects</h2>
              <div className="cards-grid projects-grid">
                <div className="project-card card">
                  <h3 className="project-name">PyNOP CLI</h3>
                  <p className="project-desc">Zero-dep CLI scaffolder with plug-in architecture.</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub →</a>
                </div>
                <div className="project-card card">
                  <h3 className="project-name">ABC-PIM</h3>
                  <p className="project-desc">Lightweight TS data-fetch layer with caching.</p>
                  <a href="#" rel="noopener noreferrer">Docs →</a>
                </div>
              </div>
            </section>

            <section className="section" id="skills">
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

            <section className="section" id="contact">
              <h2>Contact</h2>
              <p className="contact-line contact-inline">
                Email: <a href="mailto:admin@mijisoft.com">admin@mijisoft.com</a>
                {' · '}
                GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">@you</a>
                {' · '}
                LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">/in/you</a>
              </p>
            </section>
          </>
        {/* )} */}
      </main>
      <Footer />
    </>
  );
}
