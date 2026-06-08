function SkillsWindow() {
  return (
    <div className="flex h-full flex-col bg-[#0f172a] font-mono text-sm text-emerald-200">
      <div className="border-b border-emerald-300/15 bg-[#111827] px-4 py-2 text-xs tracking-[0.14em] text-emerald-300/80">
        skills.txt
      </div>

      <div className="flex-1 overflow-y-auto p-5 leading-7">
        <div className="whitespace-pre-wrap rounded-md border border-emerald-300/15 bg-black/25 p-4 text-emerald-100/95">
{`SKILLS
======

Languages:
- Python
- JavaScript
- TypeScript
- SQL
- HTML / CSS
- Bash

Frameworks & Libraries:
- Django
- React
- Vite
- NumPy

Cloud & Infrastructure:
- AWS (EC2, RDS, S3)
- Docker
- CI/CD Pipelines
- Linux / Unix

Databases:
- PostgreSQL
- MySQL

AI & Machine Learning:
- OpenAI API
- Anthropic API (Claude)
- RAG Pipelines
- Prompt Engineering
- Model Fine-tuning

Design & UX:
- Figma
- Adobe XD
- Sketch

Tools & Workflow:
- Git / GitHub
- REST APIs
- System Architecture
- SDLC
- Cursor

EDUCATION
=========

University of Maryland Global Campus
B.S. Computer Science, Software Engineering
GPA: 3.7

Michigan State University
Computer Science | 2021 – 2024

CERTIFICATIONS
==============

Google Professional IT Support Certificate
Feb 2024

Certified Network Security Specialist
International Cybersecurity Institute | Jul 2020`}
        </div>
      </div>
    </div>
  )
}

export default SkillsWindow
