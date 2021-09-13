**Fast Fourier transform (FFT)** is an [[algorithm]] $\mathsf{FFT}(p, n)$ that will do a [[Discrete Fourier transform]] in $\order{n \log n}$ time. We consider $p$ to be an $n$-length vector $[p_0, \dots, p_{n-1}]$ and we compute

$$
\begin{bmatrix}P(1) \\\\ P(\omega_n) \\\\ P(\omega_n^2) \\\\ \ldots \\\\ P(\omega_n^{n-1})\end{bmatrix}
$$