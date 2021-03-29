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
 	        pdv: ['{\\frac{\\partial{#1}}{\\partial{#2}}}', 2],
	   expectation: ['{\\mathbb{E}\\left(#1\\right)}', 1 ],
            order: ['{\\mathcal{O}\\left(#1\\right)}', 1],
	   im: ['{\\iota}']
      }
    },
    loader: {load: ['[tex]/physics']},
    tex: {packages: {'[+]': ['physics']}}
};


MathJax.Hub.Config({
	TeX: {
		Macros: {

	    eqdef: '{\,\\doteq\,}',
            tpose: ['{#1^\\intercal}', 1],
		}
	}
})

console.log("loaded");
