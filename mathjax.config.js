window.MathJax = {
    tex2jax: {
        inlineMath:  [ ['$','$'], ['\\(','\\)'] ],
        displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
        processEscapes: true
    },
    TeX: { 
        equationNumbers: { autoNumber: "AMS" },
        extensions: ["autoload-all.js", "autobold.js"]
    }
};

window.MathJax.Hub.config({
    TeX: {
      Macros: {
        RR: '{\\bf R}',
        defeq: ['{\\mathrel{\\unicode{x2254}}}']
      }
    }
  });
