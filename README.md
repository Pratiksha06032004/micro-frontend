# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- # Micro-frontend architecture using React.js and Vite.
 <h2><b>Tools and Frameworks Used :</b></h2>
<h4><b> React js Core framework for building UI component</b></h4>
<h4><b>Vite</b>-Fast build tool for React application</h4>
<h4><b>Micro-Frontend Framework</b> Single-SPA for micro frontend integration</h4>
<h4><b>GitHub Pages</b>-For deployment</h4>
<br><br>
<h2>Set Up and Run the Apllication</h2>
<h4>1.Clone the Repository</h4>
<p>git clone https://github.com/Pratiksha06032004/micro-frontend.git</p>
<h4>2.Install Dependencies</h4>
<p>cd micro-frontend</p>
<p>npm install</p>
<h4>3.Start Micro-Frontend</h4>
<p>npm run dev</p>
<br><br>
<h2>Key Architecture Decision and Trade-offs</h2>
<h3>Decision -</h3>
<p>Using a Micro-Frontend Framework-Enable indepent development and deployment of features.</p>
<p>Vite for Fast Builds-Instead of webpack,but avoids vite.config.js modification.</p>
<p>GitHub Pages for Hosting-Simplifies deployement without needing a backend</p>
<h3>Trade-offs -</h3>
<h5>Pros :</h5>
<p>Faster development with independent apps.</p>
<p>Deployment Flexibility</p> 
<h5>Cons :</h5>
<p>Managing shared dependencies can be tricky</p>
<p>Event-based communication requires careful handling</p>
<p>Routing needs careful handeling to ensure smooth navigation between micro-frontends.</p>

