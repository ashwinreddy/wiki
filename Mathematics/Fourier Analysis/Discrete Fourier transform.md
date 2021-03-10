The **discrete Fourier transform (DFT)** takes a length $N$ discrete signal $x[n]$ for $n \in \\{0, \dots, N-1\\}$. Then,

$$
X[k] = \sum_{n=0}^{N-1} x[n] e^{-\iota \omega_0 k n}, \qquad k = 0, \dots, N-1 \tag{DFT Analysis}
$$

$$
x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{\iota \omega_0 k n}, \qquad n = 0, \dots, N-1 \tag{DFT Synthesis}
$$

$$
\vec{X} = F \vec{x}
$$