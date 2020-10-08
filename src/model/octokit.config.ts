import OctokitSingleton from "./singletons/OctokitSingleton";

// add options here
const opitons = {}

const octokit = new OctokitSingleton(opitons).getOctokit()

export default octokit;