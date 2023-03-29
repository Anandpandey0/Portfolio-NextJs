async function handleAddProject(name, img, desc, github, demo) {
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  const response = await fetch("/api/addProjects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, img, desc, github, demo }),
  });

  const data = await response.json();

  //   console.log(data.exists);

  return data;
}

export default handleAddProject;
