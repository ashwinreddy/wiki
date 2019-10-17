window.MathJax = {
    tex2jax: {
        inlineMath:  [ ['$','$'], ['\\(','\\)'] ],
        displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
        processEscapes: true
    },
    TeX: { 
        equationNumbers: { autoNumber: "AMS" },
        extensions: ["autoload-all.js", "autobold.js"],
        Macros: {
            RR: '{\\mathbb{R}}',
            dd: '{\\mathrm{d}#1}',
            dv: '{\\frac{\\dd{#1}}{\\dd{#2}}}',
            order: '{\\mathcal{O}\left(#1\right)}',
            defeq: ['{\\mathrel{\\unicode{x2254}}}']
      }
    }
};
