export default function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About</h1>

      <a
        className="api-link"
        href="https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fake Store API Docs
      </a>

      <section className="capstone-section">
        <h2 className="section-title">Capstone Process</h2>
        <p className="section-text">
          The process of my capstone first started out for me by analyzing and
          drawing out how I wanted each page to look and the
          features/functionalities they needed to have on them. I then began the
          building process with starting off with what I knew how to do. When I
          found myself stuck I would ask for help or go back and review the
          curriculum. From this, I learned a lot of things and eventually got
          through the capstone by trying out new things and reviewing and
          teaching myself with things I struggled with along the way.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">How I Overcame my Struggles</h2>
        <p className="section-text">
          One of the things I struggled the most with was learning how to use
          props in React. This concept was just a little bit hard for me to wrap
          my head around. To solve this, I began by asking for help, researching
          props, and watching youtube videos to gain a further understanding of
          what they were and how to effectively use them. I also struggled a
          little bit with context, but I figured it out by re-reading and
          reviewing the curriculum and trying different things until they
          worked. I learned to be persistent and learn constantly like a true
          developer.
        </p>
      </section>

      <section className="languages-section">
        <h2 className="section-title">My Favorite Languages</h2>
        <p className="section-text">
          My favorite languages are: Python, C#, TypeScript, Javascript. I love
          Python because of the syntax it uses, C# because I build my first game
          with it, and JavaScript and TypeScript because I have used them for
          several projects. Typescript and JavaScript make building interactive
          features feel natural, and TypeScript helps catch mistakes early as
          projects get bigger.
        </p>
      </section>
    </div>
  );
}
