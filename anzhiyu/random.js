var posts=["posts/64793.html","posts/36113.html","posts/27151.html","posts/53258.html","posts/28699.html","posts/32756.html","posts/45693.html","posts/17026.html","posts/53571.html","posts/53577.html","posts/53574.html","posts/24445.html","posts/60211.html","posts/4875.html","posts/6512.html","posts/16107.html","posts/28593.html","posts/45400.html","posts/29525.html","posts/30935.html","posts/63734.html","posts/36808.html","posts/37773.html","posts/41166.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };