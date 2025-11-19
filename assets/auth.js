
function login(){
  const client_id = "YOUR_DISCORD_CLIENT_ID";
  const redirect = window.location.origin + window.location.pathname;
  const url = `https://discord.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect)}&response_type=token&scope=identify%20guilds`;
  window.location.href = url;
}

function logout(){
  localStorage.removeItem("token");
  window.location.href="index.html";
}

window.onload = () => {
  const hash = window.location.hash;
  if(hash.includes("access_token")){
    const token = hash.split("=")[1].split("&")[0];
    localStorage.setItem("token", token);
    window.location.href="servers.html";
  }
};
