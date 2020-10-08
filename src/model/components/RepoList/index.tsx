import React, { FC, Suspense, useEffect, useState } from 'react';
import "./style.sass";
import RepoCard from '../RepoCard';
import { RepoDataInterface } from '../../interfaces/RepoDataInterface';
import octokit from '../../octokit.config';

type Props = {

}

const RepoList: FC<Props> = (props) => {

    const username = "VergilHuang";

    const [repoList, setRepoList] = useState<RepoDataInterface[]>([])

    useEffect(() => {
        octokit.request(`GET /users/${username}/repos`).then(data => {
            if (data.status === 200) {
                setRepoList(data.data);
                console.log(data)
            }
        })
    }, [])

    return (
        <div className="repo-list-page-container">
            <Suspense fallback={"Wait for data..."}>
                <div className={"repo-list-box"}>
                    {repoList.map(repo => {
                        return <RepoCard key={repo.node_id} datasource={repo} />
                    })}
                </div>
            </Suspense>
        </div>
    );
};

export default RepoList;