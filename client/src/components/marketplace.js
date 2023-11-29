import React, { useState, useEffect } from "react";

// Tag component
const Tag = ({ label, onClick }) => (
  <button className="tag" onClick={onClick}>
    {label}
  </button>
);

// StartupCard component
function StartupCard({ name, tagline, tags }) {
  return (
    <div className="card w-96 m-5 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title overflow-hidden whitespace-nowrap overflow-ellipsis">
          {name}
        </h2>
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

async function getStartups() {
  try {
    const response = await fetch("http://localhost:8000/marketplace");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.startups;
  } catch (error) {
    console.error("Error fetching startup data:", error.message);
    return [];
  }
}

// Marketplace component
export default function Marketplace() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [startups, setStartups] = useState([]);
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

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const startupsData = await getStartups();
        setStartups(startupsData);
      } catch (error) {
        console.error("Error fetching startup data:", error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
