const projectFiles = import.meta.glob('../content/projects/*.md', { eager: true, query: '?raw', import: 'default' });
const blogFiles = import.meta.glob('../content/blogs/*.md', { eager: true, query: '?raw', import: 'default' });

function parseFiles(filesObj) {
  return Object.values(filesObj).map((fileContent) => {
    const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { body: fileContent };
    const [, frontmatterStr, body] = match;
    const data = {};
    frontmatterStr.split('\n').forEach(line => {
      const sepIdx = line.indexOf(':');
      if (sepIdx === -1) return;
      const key = line.slice(0, sepIdx).trim();
      let value = line.slice(sepIdx + 1).trim();
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^"|"$/g, ''));
        if (value.length === 1 && value[0] === '') value = [];
      } else if (value === 'null') value = null;
      else if (value === 'true') value = true;
      else if (value === 'false') value = false;
      else { value = value.replace(/^"|"$/g, ''); }
      data[key] = value;
    });
    return { ...data, body: body.trim() };
  });
}

const profileContent = {

  /* ─── Identity ─── */
  identity: {
    name: "Animesh Patra",
    title: "AI & ML Engineer",
    tagline: "Building ML systems that actually work — computer vision, NLP, and open source contributions to sktime.",
    email: "btech10357.23@bitmesra.ac.in",
    resumeUrl: "/resume.pdf",
  },

  /* ─── Navigation ─── */
  navLinks: [
    { label: "Projects", path: "/projects" },
  ],

  /* ─── Palette tokens ─── */
  palette: {
    mustard: "#C4A14A",
    coral:   "#C4604A",
    teal:    "#3A7D7B",
    moss:    "#6B7F4A",
    olive:   "#8A8B5E",
  },

  /* ─── Dynamic Content from Markdown ─── */
  projects: parseFiles(projectFiles),
  posts:    parseFiles(blogFiles),

  /* ─── Connect ─── */
  connect: {
    nodes: [
      { label: "GitHub",    url: "https://github.com/AnimeshPatra2005",                                              icon: "GH" },
      { label: "LinkedIn",  url: "https://linkedin.com/in/animesh-patra-657b1b290",                                  icon: "IN" },
      { label: "Email",     url: "mailto:btech10357.23@bitmesra.ac.in",                                              icon: "✉" },
      { label: "YouTube",   url: "https://www.youtube.com/@AnimeshPatra",                                            icon: "YT" },
    ],
    actions: [
      { label: "Copy Email Address", action: "copy-email", icon: "✉" },
    ],
    status: {
      label: "Open to Research Collaborations",
      pulse: true,
    },
  },
};

export default profileContent;
