import { Octokit } from "octokit";
// create octokit instance
export const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});
