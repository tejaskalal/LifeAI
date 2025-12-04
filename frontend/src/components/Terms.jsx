import {
  FiTarget,
  FiUser,
  FiShield,
  FiDatabase,
  FiLock,
  FiFileText,
  FiSlash,
  FiAlertTriangle,
  FiPower,
  FiMapPin,
  FiMail,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h2>LifeAI:Terms of Service</h2>
        <p>Effective date: January 1, 2025</p>
      </header>

      <main className="terms-content">
        <section>
          <h3>
            <FiUser /> Introduction
          </h3>
          <p>
            Welcome to <strong>LifeAI</strong>. By using our mobile or web
            application (the "Service"), you agree to these Terms of Service.
            The Service is intended for users who meet the minimum age
            requirement in their region.
          </p>
        </section>
        <section>
          <h3>
            <FiTarget /> Purpose of the App
          </h3>
          <p>
            LifeAI provides wellness guidance, habit tracking, and health
            insights. The Service is informational only and does not replace
            professional medical advice.
          </p>
        </section>
        <section>
          <h3>
            <FiFileText /> User Responsibilities
          </h3>
          <ul>
            <li>Provide accurate health and personal information.</li>
            <li>Use the Service appropriately and not for harmful purposes.</li>
            <li>Consult professionals for medical emergencies or decisions.</li>
          </ul>
        </section>
        <section>
          <h3>
            <FiAlertTriangle /> Health & Wellness Disclaimer
          </h3>
          <p>
            Information provided by LifeAI is for informational purposes only
            and should not be used as a substitute for medical advice.
          </p>
        </section>
        <section>
          <h3>
            <FiDatabase /> Data Collection & Privacy
          </h3>
          <p>
            LifeAI collects health metrics, personal details, and usage data to
            improve the Service. Reasonable security measures are applied, but
            absolute security cannot be guaranteed.
          </p>
        </section>
        <section>
          <h3>
            <FiLock /> Account & Security
          </h3>
          <p>
            You are responsible for your account credentials. Notify us
            immediately of unauthorized access.
          </p>
        </section>
        <section>
          <h3>
            <FiFileText /> User Content & Permissions
          </h3>
          <p>
            You own the content you upload. You grant LifeAI permission to store
            and process your data solely to provide the Service.
          </p>
        </section>
        <section>
          <h3>
            <FaRobot /> Use of AI
          </h3>
          <p>
            LifeAI uses algorithms to generate insights. AI outputs may contain
            inaccuracies and should not be used for critical health decisions.
          </p>
        </section>
        <section>
          <h3>
            <FiSlash /> Prohibited Activities
          </h3>
          <ul>
            <li>Hacking, probing, or reverse-engineering the Service.</li>
            <li>Uploading abusive, illegal, or infringing content.</li>
            <li>Using the Service for life-critical or emergency decisions.</li>
          </ul>
        </section>
        <section>
          <h3>
            <FiShield /> Limitation of Liability
          </h3>
          <p>
            LifeAI is not liable for indirect, incidental, or consequential
            damages. The Service is provided "as-is" and "as-available."
          </p>
        </section>
        <section>
          <h3>
            <FiPower /> Termination of Service
          </h3>
          <p>
            We may suspend or terminate accounts that violate these Terms. You
            are responsible for exporting your data if needed.
          </p>
        </section>
        <section>
          <h3>
            <FiMapPin /> Governing Law
          </h3>
          <p>
            These Terms are governed by the laws of the region where LifeAI is
            incorporated.
          </p>
        </section>
        <section>
          <h3>
            <FiMail /> Contact Information
          </h3>
          <p>
            Contact us at:{" "}
            <a href="mailto:support@lifeai.example">support@lifeai.example</a>
          </p>
        </section>
      </main>
      <footer className="terms-footer">
        <p>
          By using LifeAI, you agree to these Terms. If you do not agree, please
          discontinue use of the Service.
        </p>
      </footer>
    </div>
  );
};

export default Terms;
