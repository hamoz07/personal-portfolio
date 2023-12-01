import React, { useEffect, useState } from "react";
import "./main.css";
import Card from "./Card.jsx";
import { projects } from "../../projects.js";
const Main = () => {
  const [active, setActive] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const filteredcss = projects.filter((pro) => {
    return pro.technologies === "css";
  });

  const filteredjs = projects.filter((pro) => {
    return pro.technologies === "js";
  });

  const filteredreact = projects.filter((pro) => {
    return pro.technologies === "react";
  });

  useEffect(() => {
    const res = projects.filter((pro) => {
      return pro.technologies === active;
    });

    if (!showAll) {
      setDisplayedProjects((active === "all" ? projects : res).slice(0, 6)); // the problem is in this line|
    } else {
      setDisplayedProjects(active === "all" ? projects : res);
    }
  }, [active, showAll]);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <>
      <h1>Projects</h1>
      <main className="flex" id="projects">
        <section className="flex left-side">
          <button
            className={`${active === "all" ? "active" : null}`}
            onClick={() => {
              setShowAll(false);
              setActive("all");
            }}
          >
            All projects ({projects.length})
          </button>
          <button
            className={`${active === "css" ? "active" : null}`}
            onClick={() => {
              setShowAll(false);
              setActive("css");
            }}
          >
            HTML & CSS ({filteredcss.length})
          </button>
          <button
            className={`${active === "js" ? "active" : null}`}
            onClick={() => {
              setShowAll(false);
              setActive("js");
            }}
          >
            javascript ({filteredjs.length})
          </button>
          <button
            onClick={() => {
              setShowAll(false);
              setActive("react");
            }}
            className={`${active === "react" ? "active" : null}`}
          >
            react & Mui ({filteredreact.length})
          </button>
        </section>
        <section className={`right-side ${showAll ? "overcontainer" : ""}`}>
          {displayedProjects.map((repo, i) => (
            <Card
              key={i}
              websiteLink={repo.has_pages}
              name={repo.name}
              repo={repo.gitrepo}
              vercel={repo.website}
              img={repo.path}
              desc={repo.description}
              tech={repo.technologies}
            />
          ))}
        </section>
      </main>
      {!showAll && displayedProjects.length >= 6 && (
        <div className="showall-holder">
          <button onClick={handleShowAll}>show all</button>
        </div>
      )}
      {showAll && (
        <div className="showall-holder">
          <button onClick={handleShowLess}>show less</button>
        </div>
      )}
    </>
  );
};

export default Main;
