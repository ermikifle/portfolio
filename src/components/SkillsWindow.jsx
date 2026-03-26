function SkillsWindow() {
  return (
    <div className="flex h-full flex-col bg-[#0f172a] font-mono text-sm text-emerald-200">
      <div className="border-b border-emerald-300/15 bg-[#111827] px-4 py-2 text-xs tracking-[0.14em] text-emerald-300/80">
        skills.txt
      </div>

      <div className="flex-1 overflow-y-auto p-5 leading-7">
        <div className="whitespace-pre-wrap rounded-md border border-emerald-300/15 bg-black/25 p-4 text-emerald-100/95">
{`SKILLS & INTERESTS
==================

Skills:

Programming Languages:
- Python (OpenCV, OpenAI, Request)
- Java
- C++
- HTML5 / CSS
- JavaScript

Frameworks & Databases:
- Django
- Bootstrap
- Basic AJAX
- MySQL
- PostgreSQL
- Firebase

Relevant Skills:
- AWS EC2
- Git
- Agile Methodologies (Scrum)
- OOP
- Sales
- Digital Marketing
- Communication
- Customer Service`}
        </div>
      </div>
    </div>
  )
}

export default SkillsWindow
