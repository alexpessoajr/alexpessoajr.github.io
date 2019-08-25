import React from 'react';
import WorkHistory from './WorkHistory';

const Resume = () => (
  <div>
    <header>
      <img src="https://avatars1.githubusercontent.com/u/1766028?v=3&s=150" alt="Alex Pessoa" />
      <h1>Alex Pessoa</h1>
      <ul>
        <li><a href="https://github.com/alexpessoajr" className="fa fa-github"></a></li>
        <li><a href="https://codepen.io/alexpessoajr" className="fa fa-codepen"></a></li>
        <li><a href="https://www.linkedin.com/in/alexpessoajr" className="fa fa-linkedin-square"></a></li>
      </ul>
    </header>
    <WorkHistory />
  </div>
);

export default Resume;
