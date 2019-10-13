alert("hello");

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

MathJax.Hub.Config({
    TeX: {
      Macros: {
        RR: '{\\bf R}',
        defeq: ['{\\mathrel{\\unicode{x2254}}}']
      }
    }
  });
MathJax.Hub.Config({
  CommonHTML: {
    styles: {
      "@font-face /* vec */ ": {
        "font-family": "MJX-VEC",
        src: [
          "url(data:application/x-font-woff;charset=utf-8;base64,",
          "d09GRgABAAAAAARMAA0AAAAABiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEMAAAABwA",
          "AAAccRGLqUdERUYAAAQMAAAAJAAAACgANAAmT1MvMgAAAaAAAABJAAAAYFc5gfFjbWFwAAACAAAA",
          "AEYAAAFKQxjlbWdhc3AAAAQEAAAACAAAAAj//wADZ2x5ZgAAAlQAAACUAAAAlIQU9HBoZWFkAAAB",
          "MAAAADAAAAA2C748e2hoZWEAAAFgAAAAHgAAACQFXQDqaG10eAAAAewAAAAUAAAAFAYvAE9sb2Nh",
          "AAACSAAAAAwAAAAMACgAcm1heHAAAAGAAAAAHQAAACAASQAmbmFtZQAAAugAAADxAAAB5uwlD0hw",
          "b3N0AAAD3AAAACgAAAA34M9aEXjaY2BkYGAA4uOfgq7G89t8ZeBmfgEUYbga+icNTssClVxnOgXk",
          "cjAwgUQBdqEMW3jaY2BkYGBu+feBgYHxCwMQMF5nYGRABawAcaQESgAAeNpjYGRgYGBlUGZgYgAB",
          "EMnIABJzAPMZAAZZAHAAAAB42mNgYSxn/MLAysDA1MW0h4GBoQdCMz5gMGRkAooysDEzwAAjECvA",
          "OAFprikMBxgUFCcxt/z7wMDA3MIoAFUDAwoMjACD8Qv5AAAAAfQAMgAAAAABTQAAAPoAAAH0AB14",
          "2mNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZgYFBQn/f8P5IPp/4/vFUHVAwEjGwOcw8gEJJgY",
          "UAEjxIrhDACLGwmnAAAAAAAUABQAFAAUAEoAAgAyAAABwgIVAAMABwAAMxEhESUhESEyAZD+ogEs",
          "/tQCFf3rMgGxAAEAHQIEAdcCygAiAAABNDYzMhcWFxYXFhUUBgcGBw4DIyImNTQ3IycmNTQ3ISYB",
          "eQsJBwUFBQofCwYLKyACBwMGBAcNL6urDQ0BZxgCtggMBQQPJRQHCwkGBhYpAgkCAgsJEygBCQoH",
          "DSYAeNqVjrGKwkAURe/EGBBUrG12CishMrFQcDuLsAi26YMOmsIMxAh+hN8i+CF+gd+y4B3zttjC",
          "woHhncu7774HoI8rFP5eIKzQw5dwgAjfwi2McBEO6bkLtzHAr3CEnhrTqcKOpDasMCQ1HKCLWLiF",
          "HyyFQ3puwm1oPIQjDFXfR62Ro8YeK9YzMlhsqB0qtvJ6v8rPmd3Uzkv2tihwwoHCbosTa0pryYH0",
          "NbKjRWPB/z626Se8dsY/hSHPGeTKOnXVzuqF/reYOoln8dQk80+u9b0KR97rD9Rc4xdNXtVQI7PV",
          "sXClNiaZGGP0B+FPMN1KMAAAAHjaY2BiAIP/zQxGDNgAKxAzMjAxMDMycSUWFeWXF2WmZ5QAAGh5",
          "BhgAAAAB//8AAnjaY2BkYGDgA2IJBgUgycTAyMDMwAIkWcA8BgZGCAYACgIAWwAAAAEAAAAAxmW3",
          "ygAAAADVVeemAAAAANVV7Dg=) format('woff')"
        ].join('')
      },
      ".MJX-VEC": {
        "font-family": "MJX-VEC"
      }
    }
  }
});
MathJax.Hub.Register.StartupHook("CommonHTML Jax Ready", function () {
  var MML = MathJax.ElementJax.mml;
  var fixCombiningChar = MML.mo.prototype.CHTMLfixCombiningChar;
  MML.mo.Augment({
    CHTMLfixCombiningChar: function (node) {
      if (node.textContent === '\u20D7') {
        //
        //  Safari makes combining characters into non-combining ones when
        //  they don't have anything to combine with; replace \vec arrow
        //  with a non-combining one so all browsers get the same thing
        //
        node = node.firstChild;
        node.firstChild.nodeValue = "\u2192";
        node.className = "mjx-char MJX-VEC";
        node.style.marginLeft = "-.5em";
        node.style.paddingTop = ".45em";
      } else {
        fixCombiningChar.call(this,node);
      }
    }
  });
});
