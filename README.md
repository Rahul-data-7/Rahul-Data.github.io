<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Rahul | Data Analyst</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      background-color: #f9fafb;
      color: #1f2933;
      line-height: 1.6;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-bottom: 40px;
    }

    .header img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #e5e7eb;
    }

    h1 {
      margin: 0;
      font-size: 2.2rem;
      font-weight: 600;
    }

    h2 {
      margin-top: 40px;
      font-size: 1.4rem;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 6px;
    }

    .subtitle {
      font-size: 1rem;
      color: #4b5563;
      margin-top: 6px;
    }

    p {
      margin-top: 10px;
      max-width: 700px;
    }

    ul {
      padding-left: 18px;
    }

    .projects {
      margin-top: 20px;
    }

    .project {
      margin-bottom: 20px;
    }

    .project-title {
      font-weight: 600;
    }

    a {
      color: #2563eb;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .links a {
      margin-right: 15px;
      font-weight: 500;
    }

    footer {
      margin-top: 60px;
      font-size: 0.9rem;
      color: #6b7280;
    }
  </style>
</head>

<body>
  <div class="container">

    <!-- HEADER -->
    <div class="header">
      <!-- Replace photo.jpg with your photo file name -->
      <img src="photo.jpg" alt="Rahul Profile Photo">

      <div>
        <h1>Rahul [Last Name]</h1>
        <div class="subtitle">
          Data Analyst | SQL • Python • Power BI | MS Business Analytics
        </div>

        <div class="links" style="margin-top:10px;">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
          <a href="resume.pdf" target="_blank">Resume</a>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <h2>About</h2>
    <p>
      Data Analyst with a Master’s degree in Business Analytics, experienced in transforming raw data into actionable business insights.
      Skilled in SQL, Python, Excel, and Power BI. Actively seeking full-time Data Analyst opportunities.
    </p>

    <!-- SKILLS -->
    <h2>Skills</h2>
    <ul>
      <li>SQL (Joins, Subqueries, Window Functions)</li>
      <li>Python (Pandas, NumPy, EDA)</li>
      <li>Excel (Pivot Tables, Lookups, KPIs)</li>
      <li>Power BI (Dashboards, DAX Basics)</li>
      <li>Statistics & Business Analysis</li>
    </ul>

    <!-- PROJECTS -->
    <h2>Projects</h2>
    <div class="projects">

      <div class="project">
        <div class="project-title">Sales Performance Analytics</div>
        <p>
          Analyzed large sales datasets to identify revenue trends, underperforming regions, and pricing gaps.
          <br>
          <strong>Tools:</strong> SQL, Python, Power BI
          <br>
          <a href="#">GitHub Repo</a> | <a href="#">Dashboard</a>
        </p>
      </div>

      <div class="project">
        <div class="project-title">Customer Churn Analysis</div>
        <p>
          Conducted exploratory data analysis to identify key drivers of customer churn and retention.
          <br>
          <strong>Tools:</strong> Python, Excel
          <br>
          <a href="#">GitHub Repo</a>
        </p>
      </div>

    </div>

    <!-- FOOTER -->
    <footer>
      © 2025 Rahul [Last Name] • Data Analyst
    </footer>

  </div>
</body>
</html>
