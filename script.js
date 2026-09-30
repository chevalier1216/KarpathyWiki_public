const getConfigValue=(path)=>path.split(".").reduce((value,key)=>value&&value[key],window.PUBLIC_WIKI_CONFIG);
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-config]").forEach((node)=>{
    const value=getConfigValue(node.dataset.config);
    if(typeof value!=="string") return;
    if(node.dataset.configHtml==="true") node.innerHTML=value;
    else node.textContent=value;
  });

  const articleTitle=document.querySelector("[data-article-title]");
  if(articleTitle){
    const title=getConfigValue(articleTitle.dataset.articleTitle);
    if(typeof title==="string"){
      articleTitle.textContent=title;
      document.title=title+" · "+(getConfigValue("site.title")||"Public Knowledge Wiki");
      const meta=document.querySelector('meta[name="description"]');
      if(meta) meta.setAttribute("content",title);
    }
  }

  const q=document.querySelector("#site-search");
  if(q){
    const cards=[...document.querySelectorAll("[data-search]")];
    q.addEventListener("input",()=>{
      const term=q.value.trim().toLowerCase();
      for(const card of cards){
        const searchable=(card.dataset.search+" "+card.textContent).toLowerCase();
        card.style.display=!term||searchable.includes(term)?"block":"none";
      }
    });
  }
});
