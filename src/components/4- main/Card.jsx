import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";

const Card = ({ name, websiteLink, vercel, repo, img, desc , tech }) => {
  return (
    <article className="card">
      <div>
        <img
          src={`${
            img
              ? img
              : "https://th.bing.com/th/id/R.1ac8616cc26c5ffa5d4a124e068c447d?rik=Q3ad8plACqWAMQ&riu=http%3a%2f%2flovelyfotos.l.o.pic.centerblog.net%2fo%2f98a8ed98.jpg&ehk=oMZ4%2bUZ%2b2P7UvBelRgLJi%2fXMGMrpqfqtm%2bTC58Gqtbg%3d&risl=&pid=ImgRaw&r=0"
          }`}
          alt=""
        />
      </div>
      <div className="project-info">
        <div className="project-text">
          <h3>{name}</h3>
          <p>{desc ? desc : `${name} project created`}</p>
        </div>
        <div className="discover-project flex">
          <div className="flex">
            {websiteLink && (
              <>
                <a
                  href={
                    websiteLink === true
                      ? `https://hamoz07.github.io/${name}/`
                      : websiteLink === "vercel"
                      ? vercel
                      : null
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </>
            )}
            <a href={`${repo}`} target="_blank" rel="noreferrer">
              <span className="icon icon-github"></span>
            </a>
          </div>
          <div>
            <span 
            style={{background:tech === "js" ? "#F7E025": tech === "css" ? "#2D53E5" :  "#08D9FF"}}
            >{tech}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
