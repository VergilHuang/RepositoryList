import React, { FC } from 'react';
import "./style.sass";
import { RepoDataInterface } from '../../interfaces/RepoDataInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Props = {
    datasource: RepoDataInterface
}

const RepoCard: FC<Props> = ({ datasource }) => {

    const { name, html_url, description, language, watchers_count } = datasource;

    const watcherIconStyle: React.CSSProperties = {
        marginRight: 6,
        fontSize: "0.98rem"
    }

    return (
        <div className="repo-card-container">
            <div className="repo-card-content">
                <h4 className="repo-name">
                    {name}
                </h4>
                <div className="repo-watcher">
                    <FontAwesomeIcon icon={"eye"} style={watcherIconStyle} />
                    <span>{watchers_count}</span>
                </div>
                <p className="repo-desc">
                    {description}
                </p>
                <p className="repo-url">
                    <a href={html_url} target="__blank">{html_url}</a>
                </p>
                <div className="repo-footer">
                    <span className="repo-lang">
                        {language}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RepoCard;