function login(){
  const client_id="1440533345523204217";
  const redirect="https://engels811.github.io/wonderlife-dashboard/index.html";
  const url=`https://discord.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect)}&response_type=token&scope=identify%20guilds%20guilds.members.read`;
  window.location.href=url;
}
function logout(){localStorage.removeItem("token");window.location.href="index.html";}
