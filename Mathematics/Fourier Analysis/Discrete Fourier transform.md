The **discrete Fourier transform (DFT)** takes a length $N$ discrete signal $x[n]$ for $n \in \\{0, \dots, N-1\\}$. Then,

$$
X_k = \sum_{n=0}^{N-1} x[n] e^{-\iota \omega_0 k n}, \qquad k = 0, \dots, N-1 \tag{DFT Analysis}
$$

$$
x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X_k e^{\iota \omega_0 k n}, \qquad n = 0, \dots, N-1 \tag{DFT Synthesis}
$$

These equations are almost the same (modulo the location of the $1/N$ factor) to the [[Discrete-time Fourier series]].

# Matrix multiplication

$$
F_{kn} = e^{-\iota \omega_0 kn}
$$

This would enable a [[matrix multiplication]]

$$
X_k = \sum_{n=0}^{N-1} F_{kn} x[n]
$$

$$
X = F \vec{x}
$$

# Connection to [[DTFS|Discrete-time Fourier Series]]

If you did a DTFS analysis on the signal, you would get a sequence $c_k$. It turns out that

$$
X_k = N a_k
$$

# Properties

Circular convolution (treating $x_1$ and $x_2$ as periodic), and denoting $n_N$ as $n \mod N$.

$$
\mathsf{DFT}^{-1} \left \\{ X_1[k]X_2[k] \right \\} = \sum_{n_1=0}^{N-1} x_1[n_1] x_2[(n-n_1)_N]
$$