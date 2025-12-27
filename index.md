<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Rahul | Data Analyst</title>

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background-color: #f8f9fb;
      color: #1f2937;
      line-height: 1.6;
    }

    a {
      color: #2563eb;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .container {
      max-width: 1000px;
      margin: auto;
      padding: 40px 20px;
    }

    /* HEADER */
    .header {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-bottom: 60px;
    }

    .header img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #e5e7eb;
    }

    .header h1 {
      margin: 0;
      font-size: 2.4rem;
      font-weight: 600;
    }

    .header p {
      margin: 8px 0 12px;
      color: #4b5563;
    }

    .social a {
      margin-right: 15px;
      font-weight: 500;
    }

    /* SECTIONS */
    section {
      margin-bottom: 60px;
    }

    section h2 {
      font-size: 1.6rem;
      margin-bottom: 20px;
      border-bottom: 2px solid #e5e7eb;
      display: inline-block;
      padding-bottom: 6px;
    }

    /* SKILLS */
    .skills {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }

    .skill-box {
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      font-weight: 500;
    }

    /* PROJECTS */
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    .project-card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.08);
    }

    .project-card h3 {
      margin-top: 0;
      font-size: 1.2rem;
    }

    .project-card p {
      font-size: 0.95rem;
      color: #374151;
    }

    /* FOOTER */
    footer {
      text-align: center;
      color: #6b7280;
      font-size: 0.9rem;
      margin-top: 40px;
    }

    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        text-align: center;
      }
    }
  </style>
</head>

<body>

  <div class="container">

    <!-- HEADER -->
    <div class="header">
      <!-- Upload your photo as photo.jpg -->
      <img src="photo.jpg" alt="Rahul Photo">

      <div>
        <h1>Rahul [Last Name]</h1>
        <p>Data Analyst | SQL • Python • Power BI<br>MS in Business Analytics</p>

        <div class="social">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
          <a href="resume.pdf" target="_blank">Resume</a>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <section>
      <h2>About Me</h2>
      <p>
        Data Analyst with a Master’s degree in Business Analytics, experienced in converting raw data
        into actionable insights. Strong hands-on experience with SQL, Python, Excel, and Power BI.
        Actively seeking full-time Data Analyst opportunities.
      </p>
    </section>

    <!-- SKILLS -->
    <section>
      <h2>Skills</h2>
      <div class="skills">
        <div class="skill-box">SQL (Joins, Window Functions)</div>
        <div class="skill-box">Python (Pandas, NumPy, EDA)</div>
        <div class="skill-box">Excel (Pivot Tables, KPIs)</div>
        <div class="skill-box">Power BI (Dashboards)</div>
        <div class="skill-box">Statistics</div>
        <div class="skill-box">Business Analysis</div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section>
      <h2>Projects</h2>
      <div class="projects">

        <div class="project-card">
          <h3>Sales Performance Analytics</h3>
          <p>
            Analyzed sales data to identify revenue trends and underperforming regions.
            Built an interactive Power BI dashboard to support business decisions.
          </p>
          <p><strong>Tools:</strong> SQL, Python, Power BI</p>
          <a href="#">GitHub Repo</a> | <a href="#">Dashboard</a>
        </div>

        <div class="project-card">
          <h3>Customer Churn Analysis</h3>
          <p>
            Conducted exploratory data analysis to identify key factors influencing customer churn
            and provided retention recommendations.
          </p>
          <p><strong>Tools:</strong> Python, Excel</p>
          <a href="#">GitHub Repo</a>
        </div>

      </div>
    </section>

    <!-- CONTACT -->
    <section>
      <h2>Contact</h2>
      <p>
        Email: your@email.com <br>
        LinkedIn: linkedin.com/in/yourprofile
      </p>
    </section>

    <footer>
      © 2025 Rahul • Data Analyst
    </footer>

  </div>

</body>
</html>
