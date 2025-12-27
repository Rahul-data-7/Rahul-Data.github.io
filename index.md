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

