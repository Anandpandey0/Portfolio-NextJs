async function handleAddProject(name, img, desc, github, demo) {
  const response = await fetch("/api/addProjects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, img, desc, github, demo }),
  });

  const data = await response.json();
  console.log("data" + data);

  return data;
}

export default handleAddProject;
