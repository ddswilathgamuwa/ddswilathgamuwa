const quickActions = [
  { title: 'System Check', command: 'sudo apt update && sudo apt upgrade -y', tag: 'maintenance' },
  { title: 'Disk Usage', command: 'df -h && du -sh ~/Downloads/*', tag: 'storage' },
  { title: 'Security Audit', command: 'sudo lynis audit system', tag: 'security' },
  { title: 'Dev Setup', command: 'sudo apt install git nodejs npm docker.io -y', tag: 'development' },
];

const workflows = [
  {
    name: 'Morning Boot Routine',
    steps: ['Check system updates', 'Start VPN', 'Open daily notes', 'Launch coding stack'],
  },
  {
    name: 'Focus Mode',
    steps: ['Mute notifications', 'Track Pomodoro timer', 'Open IDE + terminal split'],
  },
  {
    name: 'Night Cleanup',
    steps: ['Backup key folders', 'Clear cache/logs', 'Shutdown background services'],
  },
];

export default function App() {
  return (
    <main className="page">
      <section className="hero card">
        <p className="badge">Linux AI Companion</p>
        <h1>Personalize your Linux assistant dashboard</h1>
        <p>
          Build routines, run safe command snippets, and track system tasks in one place. This starter UI gives you a
          clean base to connect your own LLM backend, shell runner, or automation scripts.
        </p>
        <div className="ctaRow">
          <button>Connect Local LLM</button>
          <button className="secondary">Import dotfiles profile</button>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Quick Assistant Commands</h2>
          <ul>
            {quickActions.map((action) => (
              <li key={action.title}>
                <div>
                  <strong>{action.title}</strong>
                  <span>{action.command}</span>
                </div>
                <em>{action.tag}</em>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Automation Workflows</h2>
          {workflows.map((flow) => (
            <div key={flow.name} className="workflow">
              <h3>{flow.name}</h3>
              <ol>
                {flow.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </article>
      </section>

      <section className="card config">
        <h2>Assistant Preferences</h2>
        <div className="prefs">
          <label>
            Preferred Distro
            <select defaultValue="Ubuntu">
              <option>Ubuntu</option>
              <option>Fedora</option>
              <option>Arch</option>
              <option>Debian</option>
            </select>
          </label>
          <label>
            Tone
            <select defaultValue="Technical + Friendly">
              <option>Technical + Friendly</option>
              <option>Minimal</option>
              <option>Beginner Guided</option>
            </select>
          </label>
          <label>
            Default Shell
            <select defaultValue="bash">
              <option>bash</option>
              <option>zsh</option>
              <option>fish</option>
            </select>
          </label>
        </div>
      </section>
    </main>
  );
}
