window.MathJax = {
    tex2jax: {
        inlineMath:  [ ['$','$'], ['\\(','\\)'] ],
        displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
        processEscapes: true
    },
    TeX: { 
        equationNumbers: { autoNumber: "AMS" },
        extensions: ["autoload-all.js"],
        Macros: {
            diff: ["{\\mathrm{d}#1}",1],
            integral: ["{\\int{#1\\,\\mathrm{d}#2}}", 2],
            defint: ["{\\int\\limits_{#1}^{#2}{#3\\,\\mathrm{d}#4}}", 4],
            deriv: ["\\frac{\\diff{#1}}{\\diff{#2}}", 2],
            set: ["\\{#1 : #2 \\}", 2]
        }
    }
};