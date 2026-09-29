const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const outputPath = path.join(__dirname, 'Tianah_Omomeji_CV.pdf');
const stream = fs.createWriteStream(outputPath);

doc.pipe(stream);

// Color Palette
const primaryColor = '#1e293b';   // Dark Slate
const accentColor = '#0f766e';    // Teal Accent
const textColor = '#334155';      // Body text
const mutedColor = '#64748b';     // Muted grey

// Header
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('OMOMEJI OLAIDE CHRISTIANAH', { align: 'center' });

doc.moveDown(0.2);
doc.fillColor(mutedColor)
   .font('Helvetica')
   .fontSize(9.5)
   .text('07014266066  |  olaideomomeji@gmail.com  |  Ibadan, Oyo State', { align: 'center' });

doc.moveDown(0.8);
// Horizontal Line
doc.moveTo(40, doc.y).lineTo(555, doc.y).strokeColor('#cbd5e1').lineWidth(0.75).stroke();
doc.moveDown(0.8);

function addSectionTitle(title) {
  doc.moveDown(0.4);
  doc.fillColor(accentColor)
     .font('Helvetica-Bold')
     .fontSize(12)
     .text(title.toUpperCase());
  doc.moveTo(40, doc.y + 2).lineTo(555, doc.y + 2).strokeColor('#0f766e').lineWidth(1).stroke();
  doc.moveDown(0.5);
}

// Summary
addSectionTitle('Professional Summary');
doc.fillColor(textColor)
   .font('Helvetica')
   .fontSize(9.5)
   .lineGap(3)
   .text('Results-driven Administrative Manager with over 4 years of progressive experience spanning executive support, office operations, hospitality administration, and team coordination. Proven ability to design efficient workflows, manage complex schedules, and lead administrative functions across corporate and faith-based environments. Adept at handling confidential information, coordinating multi-stakeholder engagements, and driving measurable improvements in organisational productivity.');

// Competencies
addSectionTitle('Core Competencies');
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('Administrative & Operational: ', { continued: true })
   .font('Helvetica')
   .text('Administrative Operations | Office Management | Calendar & Schedule Coordination | Records & Documentation Management | Executive Support | Stakeholder Communication | Event & Meeting Coordination | Team Leadership | Hospitality Administration');

doc.moveDown(0.3);
doc.font('Helvetica-Bold')
   .fontSize(9)
   .text('Tools & Software: ', { continued: true })
   .font('Helvetica')
   .text('Microsoft Office Suite (Word, Excel, PowerPoint, Outlook) | Google Workspace | Zoom / Microsoft Teams / Google Meet');

// Experience
addSectionTitle('Professional Experience');

function addRole(title, company, period, bullets) {
  doc.fillColor(primaryColor)
     .font('Helvetica-Bold')
     .fontSize(10.5)
     .text(title, { continued: true })
     .font('Helvetica-Bold')
     .fillColor(accentColor)
     .text(`  |  ${company}`, { continued: true })
     .font('Helvetica-Oblique')
     .fillColor(mutedColor)
     .text(`  (${period})`);

  doc.moveDown(0.3);

  bullets.forEach(b => {
    doc.fillColor(textColor)
       .font('Helvetica')
       .fontSize(9)
       .lineGap(2)
       .text(`•  ${b}`, { indent: 10 });
  });
  doc.moveDown(0.5);
}

addRole('Head of Administration – Hospitality Unit', 'The Light Nation', '2023 – Present', [
  'Oversee all hospitality and administrative functions for a faith-based organisation, ensuring seamless coordination of services, events, and guest management.',
  'Design and implement administrative systems and standard operating procedures to improve operational consistency across the unit.',
  'Lead and supervise a team of hospitality volunteers and staff, maintaining high standards of service delivery and organisational culture.',
  'Manage logistics and resource allocation for gatherings and programmes, ensuring timely execution within defined parameters.',
  'Serve as a key administrative liaison between unit leadership and the broader organisation.'
]);

addRole('Executive Assistant', 'Soraidcare Consulting Limited', 'Nov 2023 – Aug 2024', [
  'Managed the executive calendar, coordinating over 50 meetings via Google Meet with a 98% attendance rate through proactive scheduling.',
  'Maintained and optimised company daily itinerary and operations workflow, resulting in a 30% improvement in overall productivity.',
  'Coordinated virtual events and team-building activities, contributing to a 20% improvement in team cohesion and morale.',
  'Produced comprehensive administrative documentation, reports, and correspondence to support executive decision-making.',
  'Managed internal and external communications, acting as primary contact point for stakeholders and partners.',
  'Supported content and community management operations, producing over 170 pieces of content and achieving a 20% boost in audience engagement.'
]);

addRole('Personal Assistant to the Lead Engineer', 'D.O.A Construction, Akure', 'Sept 2022 – Jan 2023', [
  'Coordinated daily schedules and operational logistics for the Lead Engineer, improving efficiency by 30%.',
  'Prepared over 50 detailed project reports and maintained accurate documentation, contributing to a 15% reduction in project delays.',
  'Managed communications across 20+ clients, achieving a 25% increase in client satisfaction and repeat business.',
  'Assisted in overseeing five construction projects, with 80% completed on time and within budget.'
]);

addRole('Administrative Secretary', 'Diligence Nigeria Enterprise, Lagos', 'Apr 2020 – Jan 2021', [
  'Managed end-to-end office operations including correspondence handling, appointment scheduling, and records management.',
  'Provided high-quality administrative support to management, significantly reducing documentation errors.',
  'Maintained confidentiality of sensitive information, fostering a trusted and professional work environment.'
]);

// Leadership
addSectionTitle('Leadership & Volunteer Experience');

addRole('Team Lead – Programs, Publicity & Volunteers', 'The Bishop Shane Initiatives', 'Feb 2023 – Present', [
  'Lead programme planning, volunteer coordination, and publicity operations, managing budgets, timelines, and stakeholder relationships.',
  'Implemented project evaluation frameworks to measure outcomes and drive continuous improvement in programme delivery.'
]);

addRole('Ambassador & Facilitator', 'Legacy Mentorship Academy', 'May 2022 – Dec 2022', [
  'Represented the academy and facilitated sessions supporting young professionals in career development and leadership growth.'
]);

// Education & Training
addSectionTitle('Education & Professional Development');

doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('Postgraduate Studies in Managerial Psychology', { continued: true })
   .font('Helvetica-Oblique')
   .fillColor(mutedColor)
   .text('  (In Progress)');

doc.moveDown(0.2);
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('B.A. Linguistics and Languages (2019)', { continued: true })
   .font('Helvetica')
   .fillColor(textColor)
   .text('  — Adekunle Ajasin University, Akungba-Akoko, Ondo State');

doc.moveDown(0.4);
doc.fillColor(textColor)
   .font('Helvetica')
   .fontSize(9)
   .text('• Certificate of Participation in Effective Communication — Leap Africa (2023)')
   .text('• Leadership and Personal Growth Training — Dr. John Maxwell Movement (2022)')
   .text('• Goals and Leadership Training — Dreams to Legacy Initiative (2021)');

doc.moveDown(0.6);
doc.fillColor(mutedColor)
   .font('Helvetica-Oblique')
   .fontSize(8.5)
   .text('References available upon request.', { align: 'center' });

doc.end();

stream.on('finish', () => {
  console.log('PDF generated successfully at: ' + outputPath);
});
