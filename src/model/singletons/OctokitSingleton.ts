import { Octokit } from "@octokit/rest";

export default class OctokitSingleton {

    private static instance: OctokitSingleton;
    private octokit = new Octokit()

    constructor(options?: any) {
        if (OctokitSingleton.instance) {
            return OctokitSingleton.instance
        }

        this.octokit = new Octokit(options);
        OctokitSingleton.instance = this;
    }

    getOctokit() {
        return this.octokit;
    }
}