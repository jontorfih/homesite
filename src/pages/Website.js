import React from 'react';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

const markdown = raw('../data/website.md');

const Index = () => (
  <Main
    description="Website for the RUG."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">Website for the RUG</h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Index;
