**Fast Fourier transform (FFT)** is an [[algorithm]] that will do a [[Discrete Fourier transform]] in $\order{n \log n}$ time.

In particular, it is useful for [[polynomial]] multiplication. Suppose we have a coefficient representation $p = [p_0, \dots, p_{n-1}]^\mathsf{T}$. The FFT will give us a value representation

\begin{equation}
\begin{bmatrix}P(1) \\\\ P(\omega_n) \\\\ P(\omega_n^2) \\\\ \ldots \\\\ P(\omega_n^{n-1})\end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & \dots & 1 \\\\ 1 & \omega_n^1 & \omega_n^2 & \ldots & \omega_n^{n-1} \\\\ 1 & \omega_n^2 & \omega_n^4 & \dots & \omega_n^{2(n-1)} \\\\ \vdots & \vdots & \vdots & \ddots & \vdots \\\\ 1 & \omega_n^{n-1} & \omega_n^{2(n-1)} & \dots & w_n^{(n-1)(n-1)} \end{bmatrix} \cdot p
\end{equation}

where we get them evaluated at [[root of unity]].

# Polynomial Multiplication

We can represent an $d$-degree [[polynomial]] either by its 

* coefficients
* value at $d+1$ points

$n$ roots of unity $(1, \omega_n, \omega_n^2, \dots, \omega_n^{n-1})$.