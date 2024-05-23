import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { getUserToken } from "./login";

export default function SolvedPotd() {
  const token = getUserToken();
  const [potds, setPotds] = useState();
  const [problems, setproblems] = useState([]);
  const [counts, setcounts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(token);
        const resc = await axios.post(
          `http://localhost:5000/api/v1/potd/user/post/check`,
          {
            userId: token,
          }
        );
        console.log(resc.data);
        const newData = resc.data.check;
        setPotds(newData);

        const count = resc.data.check.map(async (potd, index) => {
          console.log(index);
          const res = await axios.post(
            "http://localhost:5000/api/v1/potd/user/post/count",
            { problemId: potd.problemId }
          );
          const resp = await axios.post(
            "http://localhost:5000/api/v1/potd/user/post/getall",
            { problemId: potd.problemId }
          );
          console.log("pro", resp.data);
          setproblems((prev) => [...prev, resp.data.Problems]);

          console.log("counting", res.data);
          return res.data.count; // Assuming the response has a property called 'attempts'
        });
        setcounts(await Promise.all(count)); // Wait for all promises to resolve
        console.log("counts", counts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData(); // Call getData function inside useEffect to fetch data
  }, [token]); // Add token as a dependency to useEffect

  return (
    <>
      <div className="something bg-light h-50">hellow</div>
      {problems &&
        problems.map((potd, index) =>
          counts[index] ? (
            <div style={styles.card} key={potd.id}>
              <div style={styles.question}>{potd.question}</div>
              <div style={styles.info}>
                <div>Posted Date: {potd.postedOn}</div>
              </div>
              <div style={styles.options}>
                {potd.options.map((option, index) => (
                  <div key={index}>{option}</div>
                ))}
              </div>
              <div className="attempts">attempts: {counts[index]}</div>
            </div>
          ) : null
        )}
    </>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    maxWidth: "400px",
    backgroundColor: "#f9f9f9",
  },

  question: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  options: {
    marginBottom: "10px",
  },
  info: {
    fontSize: "14px",
    color: "#666",
  },
};
