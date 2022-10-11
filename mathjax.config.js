window.MathJax = {
    tex2jax: {
        inlineMath:  [ ['$','$'], ['\\(','\\)'] ],
        displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
        //processEscapes: true
    },
    TeX: { 
        Macros: {
            RR: '{\\mathbf{R}}',
	     dd: ['{\\mathrm{d}#1}', 1],
	     dv: ['{\\frac{\\dd{#1}}{\\dd{#2}}}', 2],
	   pdv: ['{\\frac{\\partial{#1}}{\\partial{#2}}}', 2],
	   expectation: ['{\\mathbb{E}\\left(#1\\right)}', 1 ],
           order: ['{\\mathcal{O}\\left(#1\\right)}', 1],
	   im: ['{\\iota}']
      }
    },
    loader: { load: ['[tex]/cancel'] },
    tex: { packages: { '[+]': ['cancel'] }}
};


