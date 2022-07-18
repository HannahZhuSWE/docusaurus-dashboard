import React from "react";
import MDXComponents from '@theme-original/MDXComponents';
import StatusBadge from './StatusBadge.mdx'
import classes from "./RepoCard.module.css"
const RepoCard = (props) =>{

  const badgeLink  = () =>{
    return "https://github.com/staticwebdev/".concat(props.repoName).concat("/actions/workflows/playwright.yml/badge.svg");
  }

  const githubActionsLink = () => {
    return "https://github.com/staticwebdev/".concat(props.repoName).concat("/actions/workflows/playwright.yml");
  }
  
  const githubLink = () => {
    return "https://github.com/staticwebdev/".concat(props.repoName);
  }

    return (
        <div className={classes.Card}>
          <a href={githubLink()}>
            <h3 className={classes.Title}>
                {props.repoName}
            </h3>
          </a>
            
            <a href={githubActionsLink()}>
              <img src={badgeLink()}/>
            </a>
            
        </div>
    );
}

export default RepoCard;