import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="section">
          <h2>Philosophy</h2>
          <p className="lead">
            The unknown is the blank space of life — the light that reveals the essence of our hearts in times of hardship. It is the wisdom of the unknown, the depth and the philosophy. It is the life attitude of “When you reach the end of the water, sit and watch the clouds rise.”
          </p>
          <p>
            … Sometimes they say the unknown is scary… but so is ordering food in a foreign country without knowing the language. One time, we thought we ordered “grilled fish” and ended up with a “giant grilled eggplant” wearing a tiny hat. The point is — just like in technology projects, the unknown can surprise you. Sometimes it's a bug, sometimes it's a feature… and sometimes it's just a vegetable in a hat. At MijiSoft, we believe these moments are where creativity lives — we explore, adapt, and make the most out of every unexpected twist.
          </p>
        </section>

        <section className="section">
          <h2>Our vision</h2>
          <p>
            Mijisoft Studio is committed to exploring the unknown frontiers of software technology, creating breakthrough digital solutions for the complex world with fearless curiosity and open collaboration spirit, and illuminating the infinite possibilities of the future.
          </p>
          <Link to="/mijisoft" className="cta-link">Go to Mijisoft -→</Link>
        </section>

        <section className="section">
          <h2>Our Core Services</h2>
          <ul>
            <li><strong>Fullstack Development</strong> — delivering customized website and application solutions.</li>
            <li><strong>Database management & optimization</strong> — ensuring the security and efficient use of data.</li>
            <li><strong>Data analysis & visualization</strong> — helping you identify trends and drive business decisions.</li>
            <li><strong>API development & integration</strong> — connecting your systems seamlessly with third-party platforms to extend functionality and improve workflows.</li>
            <li><strong>Cloud deployment & DevOps</strong> — building scalable infrastructure, automating deployments, and optimizing performance on AWS, Azure, or other cloud platforms.</li>
            <li><strong>UI/UX design</strong> — crafting intuitive, user-centered designs that enhance engagement and usability.</li>
            <li><strong>Mobile app development</strong> — creating cross-platform and native mobile applications to extend your reach and improve accessibility.</li>
            <li><strong>System maintenance & technical support</strong> — providing ongoing monitoring, troubleshooting, and optimization to ensure reliability and stability.</li>
          </ul>
        </section>

        <section className="section collaboration">
          <h2>Collaboration</h2>
          <p>
            <strong>Seeking Collaboration — Creating Excellence Together! 🤝</strong>
          </p>
          <p>
            Dear Partners, MijiSoft sincerely invites you to develop forward-thinking projects together! We specialize in transforming innovative ideas into efficient technical solutions to drive business growth.
          </p>
          <p>
            If you or your company are seeking a technology partner, we welcome you to connect with us at any time! Our professional team looks forward to providing you with high-quality services and exploring the potential and value of your projects together.
          </p>
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
