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
            dd: ['{\\mathrm{d}#1}', 1],
            dv: ['{\\frac{\\dd{#1}}{\\dd{#2}}}', 2],
            order: ['{\\mathcal{O}\\left(#1\\right)}', 1],
      }
    },
    loader: {load: ['[tex]/physics']},
    tex: {packages: {'[+]': ['physics']}}
};
