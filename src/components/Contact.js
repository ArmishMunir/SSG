import React, { useState, useEffect } from "react";

function Contact() {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("https://api2.dev.cubotoo.ch/public/categories?type=tree")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [refresh]);
  console.log(data);
  return (
    <div>
      <div>
        {data &&
          data.map((parent) => (
            <div
              key={parent.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              <h1>{parent.category_number}</h1>
              <p>{parent.name[1].value}</p>
              {parent.children?.categories &&
                parent.children?.categories.map((child) => (
                  <div key={child.id}>
                    <h2>{child.category_number}</h2>
                    <p>{child.name[1].value}</p>

                    {child.children?.categories &&
                      child.children?.categories.map((grandChild) => (
                        <div key={grandChild.id}>
                          <h3>{grandChild.category_number}</h3>
                          <p>{grandChild.name[1].value}</p>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          ))}
      </div>
      <button onClick={() => setRefresh(!refresh)}>Fetch Again</button>
    </div>
  );
}

export default Contact;
