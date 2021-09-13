**Fast Fourier transform (FFT)** is an [[algorithm]] $\mathsf{FFT}(p, n)$ that will do a [[Discrete Fourier transform]] in $\order{n \log n}$ time. We consider $p$ to be an $n$-length vector $[p_0, \dots, p_{n-1}]$ and we compute

\begin{equation}
\begin{bmatrix}P(1) \\\\ P(\omega_n) \\\\ P(\omega_n^2) \\\\ \ldots \\\\ P(\omega_n^{n-1})\end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & \dots & 1 \\\\ 1 & \omega_n^1 & \omega_n^2 & \ldots & \omega_n^{n-1} \\\\ 1 & \omega_n^2 & \omega_n^4 & \dots & \omega_n^{2(n-1)} \\\\ \vdots & \vdots & \vdots & \ddots & \vdots \\\\ 1 & \omega_n^{n-1} & \omega_n^{2(n-1)} & \dots & w_n^{(n-1)(n-1)} \end{bmatrix} \cdot \begin{bmatrix} p_0 \\\\ p_1 \\\\ p_2 \\\\ \vdots \\\\ p_{n-1} \end{bmatrix}
\end{equation}

# Polynomial Multiplication

We can represent a polynomial by its $n$ roots of unity.