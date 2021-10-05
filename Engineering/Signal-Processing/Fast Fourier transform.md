**Fast Fourier transform (FFT)** is an [[divide and conquer]] [[algorithm]] $\mathsf{FFT}(p, n)$ that will do a [[Discrete Fourier transform]] in $\order{n \log n}$ time.

In particular, it is useful for [[polynomial]] multiplication. Suppose we have a $n$-length coefficient representation $p = [p_0, \dots, p_{n-1}]^\mathsf{T}$. The FFT will give us a value representation

\begin{equation}
\begin{bmatrix}P(1) \\\\ P(\omega_n) \\\\ P(\omega_n^2) \\\\ \ldots \\\\ P(\omega_n^{n-1})\end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & \dots & 1 \\\\ 1 & \omega_n^1 & \omega_n^2 & \ldots & \omega_n^{n-1} \\\\ 1 & \omega_n^2 & \omega_n^4 & \dots & \omega_n^{2(n-1)} \\\\ \vdots & \vdots & \vdots & \ddots & \vdots \\\\ 1 & \omega_n^{n-1} & \omega_n^{2(n-1)} & \dots & w_n^{(n-1)(n-1)} \end{bmatrix} \cdot p
\end{equation}

where we get the values for the $n$ [[root of unity]].

# Idea

We will get even and odd polynomials such that

$$
P(x) = E(x) + x O\left(x^2\right)
$$