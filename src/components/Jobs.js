import React from "react";
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiJobs {
        nodes {
          company
          date
          description
          role
        }
    }
  }
`;

const Jobs = () => (
    <StaticQuery
        query={query}
        render={data => (
            <ul>
                {data.allStrapiJobs.nodes.map(job => (
                    <li>{job.company}</li>
                ))}
            </ul>
        )}
    />
);

export default Jobs;

