async function discord(endpoint){
  const token=localStorage.getItem("token");
  return fetch("https://discord.com/api/v10/"+endpoint,{
    headers:{Authorization:`Bearer ${token}`}
  }).then(r=>r.json());
}
