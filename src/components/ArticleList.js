import React from "react";
import Article from "./Article"
import blogData from "../data/blog";

function ArticleList() {
  return (
    <div className="App">
        <main>
            {blogData.posts.map(d=>{
               return <Article key={d.id} title= {d.title} date={d.date} preview= {d.preview}/>
            })}
        </main>
      
    </div>
  );
}

export default ArticleList;