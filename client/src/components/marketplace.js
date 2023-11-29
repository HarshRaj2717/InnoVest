import React, { useState } from "react";

// Tag component
const Tag = ({ label, selected, onClick }) => (
  <button className="" onClick={onClick}>
    {label}
  </button>
);

// StartupCard component
function StartupCard({ name, tagline, tags }) {
  return (
    <div className="card w-96 m-5 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
          {tagline}
        </p>
        <div className="text-xs italic">
          {tags && tags.length > 0 && (
            <div className="flex space-x-2 mt-2">
              {tags.map((tag, index) => (
                <Tag key={index} label={tag} />
              ))}
            </div>
          )}
        </div>
        <div className="card-actions justify-end">
          <button className="btn">Know More...</button>
        </div>
      </div>
    </div>
  );
}

function getStartups() {
  let startUps = [];

  Array.from({ length: 5 }, (_, i) =>
    startUps.push({
      name: "Work-AI",
      tagline:
        "Transforming Virtual Workplaces with AI-Powered Innovation and Dynamic Collaboration.",
      tags: ["AI"],
    })
  );
  Array.from({ length: 5 }, (_, i) =>
    startUps.push({
      name: "BLock",
      tagline:
        "Transforming Virtual Workplaces with AI-Powered Innovation and Dynamic Collaboration.",
      tags: ["Blockchain"],
    })
  );

  return startUps;
}

// Marketplace component
export default function Marketplace() {
  const [selectedTags, setSelectedTags] = useState([]);
  const allTags = [
    "Tech",
    "Fashion",
    "Travel",
    "Entertainment",
    "Fitness",
    "Sustainability",
    "Education",
    "Food and Beverages",
    "Blockchain",
    "AI",
    "Security",
  ];

  const startups = getStartups();

  const filteredStartups = selectedTags.length
    ? startups.filter((startup) =>
        startup.tags.some((tag) => selectedTags.includes(tag))
      )
    : startups;

  const handleTagClick = (tag) => {
    if (allTags.includes(tag)) {
      setSelectedTags([tag]);
    } else {
      setSelectedTags(allTags);
    }
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="flex justify-center flex-wrap">
        <div className="flex space-x-2 mt-4">
          <Tag label="All" onClick={() => setSelectedTags([])} />
          <div className="tag-divider">|</div>
          {allTags.map((tag, index) => (
            <React.Fragment key={index}>
              <Tag label={tag} onClick={() => handleTagClick(tag)} />
              <div className="tag-divider">|</div>
            </React.Fragment>
          ))}
        </div>
        {filteredStartups.map((startup, index) => (
          <StartupCard key={index} {...startup} />
        ))}
      </div>
    </div>
  );
}
