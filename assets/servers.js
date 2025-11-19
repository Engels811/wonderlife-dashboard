
const servers = {
  'WonderLife Network': '1438177248678121615',
  'WonderLife City': '1329371549035135037',
  'WonderLife Studios': '1438324009929543694',
  'WonderLife FM': '1438326396677263463',
  'WonderLife Logs': '1438574264126144595',
  'WonderLife City – Routen': '1438476402277220364',
  'WonderLife Development': '1438326142846111917',
  'WonderLife Entbannung': '1438473736729923659'
};

const container=document.getElementById("server-container");
for(const name in servers){
  const div=document.createElement("div");
  div.className="card";
  div.innerHTML=`<h3>${name}</h3><p>ID: ${servers[name]}</p>`;
  container.appendChild(div);
}
