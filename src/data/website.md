
# Website for the University of Groningen

I developed an online web interface for the lab practical for the course
control engineering at the University of Groningen. In the past the students
conducted the practical at one of the university labs. The purpose of building
the website was to allow the students to conduct the experiments on the same
equipment at the lab by using the web interface. Therefore, reducing any
consequences of the Covid measures put on by the government on the study
experience for the students.

![Homepage](./images/front.png){width=50%}

The design goal was made to use a database to store all the information
that the students submit at each section of the practical. The backend of
the website was therefore written in Django with a database running on a
MySQL server. The front-end of the website used HTML, CSS, Bootstrap, Jinja2

![Data](./images/data.png){width=50%}

The purpose of the website was to be fucntional and fufill the requirments set by the
professor of the course. The site has a admin page where TA's can monitor the progress of the students and fix any minor problems that might accure.

import raw from 'raw.macro';

const markdown = raw('../data/website.md');

import ReactMarkdown from 'react-markdown';

<ReactMarkdown
        source={markdown}
        escapeHtml={false}
      />