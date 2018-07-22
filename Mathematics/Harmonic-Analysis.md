### Fourier Series



For a function $f(t)$ with period $T$,

$$
f(t) = \sum_{n=-\infty}^{\infty} c_n \exp(2\pi\iota{n}/T)
$$

$$
c_n = \frac{1}{T}\defint{0}{T}{f(t)\exp(-2\pi\iota{n}/T)}{t} \qquad c_n^*  =c_{-n}
$$

### Fourier Transform

The Fourier Transform is an integral transform (see definition \@ref(def:integral-transform)), similar to [Laplace Transform][Laplace Transform].

$$
\mathscr{F}\{g(t)\} = G(f) = \defint{-\infty}{\infty}{g(t)\exp(-2\pi\iota{ft})}{t}
$$

$$
\mathscr{F}^{-1}\{G(f)\} = \defint{-\infty}{\infty}{G(f)\exp(2\pi\iota{ft})}{t}
$$
