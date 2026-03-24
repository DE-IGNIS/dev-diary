import styles from "./Home.module.css";

export default function Home() {
  const features = [
    {
      icon: "📝",
      title: "Easy Writing",
      description:
        "Intuitive editor with markdown support and real-time preview.",
    },
    {
      icon: "🎨",
      title: "Beautiful Themes",
      description:
        "Choose from multiple modern themes to personalize your blog.",
    },
    {
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Lightning-fast loading times with optimized content delivery.",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "Your content is safe with our enterprise-grade security.",
    },
    {
      icon: "📊",
      title: "Analytics",
      description:
        "Track your blog performance with detailed analytics dashboard.",
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description:
        "Reach readers worldwide with our content distribution network.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Writers" },
    { number: "50K+", label: "Published Articles" },
    { number: "1M+", label: "Monthly Readers" },
    { number: "95%", label: "User Satisfaction" },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to Bloggify</h1>
          <p className={styles.subtitle}>
            Your ultimate platform for creating, sharing, and discovering
            amazing content. Join our community of passionate writers and
            readers.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Read Blog</button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Choose Bloggify?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.sectionTitle}>
          Ready to Start Your Blogging Journey?
        </h2>
        <p className={styles.subtitle}>
          Join thousands of writers who are already sharing their stories with
          the world.
        </p>
        <button className={styles.ctaButton}>Create Your Blog Now</button>
      </section>
    </div>
  );
}
