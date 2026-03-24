import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>
          Have questions or want to collaborate? We would love to hear from you.
          Send us a message and we will respond as soon as possible.
        </p>
      </section>

      <section className={styles.contentGrid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Send us a Message</h2>
          <form className={styles.form}>
            <FormField
              label="Full Name"
              type="text"
              placeholder="John Doe"
              icon="👤"
            />
            <FormField
              label="Email Address"
              type="email"
              placeholder="example@gmail.com"
              icon="📧"
            />
            <FormField
              label="Subject"
              type="text"
              placeholder="How can we help you?"
              icon="💬"
            />

            <div className={styles.formGroup}>
              <label className={styles.label}>📝 Your Message</label>
              <textarea
                placeholder="Tell us more about your inquiry..."
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Contact Information</h2>
          <div className={styles.contactInfo}>
            <ContactInfo
              icon="📧"
              title="Email"
              content="hello@bloggify.com"
              subtitle="We'll reply within 24 hours"
            />
            <ContactInfo
              icon="📞"
              title="Phone"
              content="+1 (555) 123-4567"
              subtitle="Mon-Fri from 8am to 6pm"
            />
            <ContactInfo
              icon="📍"
              title="Office"
              content="123 Blog Street, Digital City"
              subtitle="Visit our headquarters"
            />
            <ContactInfo
              icon="💬"
              title="Live Chat"
              content="Available 24/7"
              subtitle="Get instant support"
            />
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FormField({ label, type, placeholder, icon }) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {icon} {label}
      </label>
      <input type={type} placeholder={placeholder} className={styles.input} />
    </div>
  );
}

function ContactInfo({ icon, title, content, subtitle }) {
  return (
    <div className={styles.infoItem}>
      <div className={styles.infoIcon}>{icon}</div>
      <div className={styles.infoContent}>
        <h3>{title}</h3>
        <p className={styles.main}>{content}</p>
        <p className={styles.sub}>{subtitle}</p>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "Q. How long does it take to get a response?",
    answer:
      "Ans: We typically respond to all inquiries within 24 hours during business days.",
  },
  {
    question: "Q. Do you offer technical support?",
    answer: "Ans: Yes, we provide 24/7 technical support for all our users.",
  },
  {
    question: "Q. Can I schedule a demo?",
    answer:
      "Ans: Absolutely! Contact us to schedule a personalized demo of our platform.",
  },
];
