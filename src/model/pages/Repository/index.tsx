import React, { FC } from 'react';
import "./style.sass";
import RepoList from '../../components/RepoList';


const Repository: FC = () => {

    return (
        <div className="repository-page-container">
            <div className="parallax"></div>
            <RepoList />
        </div>
    );
};

export default Repository;