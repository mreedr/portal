import React from 'react'
import styled, { keyframes } from 'styled-components'

const Resume = props => {
  const columns = 4
  return (
    <FlexibleContainer>
      <Layout span={columns}>
        <Cell span={3}>
          <h1>Michael Reeder</h1>
        </Cell>
        <Cell span={1}>
          <Contact></Contact>
        </Cell>

        <Cell span={4}>
          <Logo>&</Logo>
          <h2>Experience</h2>
        </Cell>
        <Cell span={1}>
          <Label>SharesPost</Label>
        </Cell>
        <Cell span={3}>
          <p>Implementing solidity smart contract solutions for FinTech problems. Created an asset exchange network using tokens as economic incentive. A large part of our time was spent on security, using the Smart Contract Weakness Classification (SWC) guide. Strong CI and testing including static analysis tools like Mythril and Slither.</p>
        </Cell>

        <Cell span={1}>
          <Label>Super Systems Inc</Label>
        </Cell>
        <Cell span={3}>
          <p>Manufacturing of products for the thermal processing industry including probes, analyzers, flow meters, controllers, software solutions, and engineered systems. I reimplemented their legacy desktop application to a user-friendly mobile solution using React Native.</p>
        </Cell>

        <Cell span={1}>
          <Label>Terrapin Ticketing</Label>
        </Cell>
        <Cell span={3}>
          <p>A software company creating a secure peer to peer encrypted Ethereum based ticket exchange using Solidity. As lead developer, I contributed software engineering expertise in the design and development of the software lifecycle. This project leveraged ecrecover signature verification and encryption to create secure QR codes. React front end.</p>
        </Cell>

        <Cell span={1}>
          <Label>Wyzerr</Label>
        </Cell>
        <Cell span={3}>
          <p>A software company making surveys with smart form interfaces. Oversee a team of four software developers and lead weekly discussions to brainstorm ideas in software development and to track changes made in existing programs. Led a team to design, develop and implement web based applications including creation of a client custom editor tool. Saas platform,  React/Redux, Express and Go.</p>
        </Cell>

        <Cell span={1}>
          <Label>Zipscene</Label>
        </Cell>
        <Cell span={3}>
          <p>Built large scale data applications using Node.js with heavy emphasis on streams. My responsibilities focused on automating large data ingestions from various sources (CSVs, .shp, FTP, REST, etc). This data is used to create “profiles” in our system that various machine learning techniques leverage to predict future customer behavior.</p>
        </Cell>

        <Cell span={1}>
          <Label>Interactive Intelegance</Label>
        </Cell>
        <Cell span={3}>
          <p>I have a wide range of responsibilities at Interactive Intelligence. The main projects I work on use node.js to build scalable web apis. I recently completed building our test framework using Mocha and Chai. Other projects have included a chrome extension, using puppet/vagrent/hiera to provision an AWS instance, using Asgard, Packer, and Ansible to provision AWS instances, and getting our node.js client scripts to run in Windows.</p>
        </Cell>

        <Cell span={1}>
          <Label>ConnXus Inc</Label>
        </Cell>
        <Cell span={3}>
          <p>ConnXus: (Intern June 2013 - December 2013)
Independently developed an automated web crawler (Strategy pattern) using Amazon Web Services API and parts of the admin control panel. Implemented a responsive real time chat system with node.js and socket.io. Member of development team to redesign and launch website.</p>
        </Cell>

        <Cell span={1}>
          <Label>Knoesis Research</Label>
        </Cell>
        <Cell span={3}>
          <p>Knoesis Research Center at Wright State University: (Internship Jan 2012 - Jan 2013) 
Member of a research team responsible for designing and developing a twitter sentiment analysis web application (Twitris). Tweets are aggregated and ran through sentiment analysis algorithms to get an approximation of their polarity. Also, lead a development team that designed and developed a mobile Android (Java) healthcare application; in collaboration with the OSU medical department (K-Health). The application collects data utilizing a combination of sensors and dialogue inputs and is currently in clinical trials at OSU medical department.</p>
        </Cell>

        <Cell span={1}>
          <Label>Enter Media</Label>
        </Cell>
        <Cell span={3}>
          <p>EnterMedia: (summer 2011) 
Tested and debugged legacy code and software. Responsible for pushing and pulling code over a distributed server system, and assigned bugs to the senior developers; using SVN, and Linux. shell, and Jenkins.</p>
        </Cell>

        <Cell span={4}>
          <Logo>&</Logo>
          <h2>Education</h2>
        </Cell>

        <Cell span={1}>
          <Label>Wright State University</Label>
        </Cell>
        <Cell span={3}>
          <p> B.S. Computer Science (May 2014)
            Cryptography, Advanced C Programming for Engineers, Windows and Linux, Web Information Systems, Linear Algebra, Data Analysis, Data Structures and Algorithms, Comparative Languages, Formal Logic for Computer Scientist, Software Testing, Matrix Computations, Software Engineering, Database Management Systems, Operating Systems and Internals, Calculus I, II, III, Physics I, II, III
          </p>
        </Cell>
      </Layout>
    </FlexibleContainer>
  )
}

export default Resume

// this is what I could do my medium article on
const FlexibleContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 980px) minmax(0, 1fr);
  grid-auto-columns: 1fr;
  grid-template-areas:
    ". row .";
`
/*
  next steps:
  could change to grid-template-areas to include side gutters and remove
  "columns" concept from html
  that would be coo...
*/
const Layout = styled.div`
  grid-area: row;
  grid-row: auto;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(${props => props.span}, 1fr);
`

const Contact = styled.div`height: 100%; width: 100%; border: 1px solid chocolate;`

const Cell = styled.div`
  grid-column: auto / span ${props => props.span};
  display: flex;
  width: 100%;
`

// also could post about that grid-row has to go below grid-area
const Label = styled.p`
  font-weight: bold;
  margin-left: auto;
  text-align: right;
`

const Logo = styled.div`
  align-self: center;
`
