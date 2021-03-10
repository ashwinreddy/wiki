The **discrete time Fourier series (DTFS)** is a special case of the [[discrete-time Fourier transform]] when the signal is periodic $x[n]$ with period $N$.

\begin{equation}
x[n] = \sum_{k=0}^{N-1} c_k e^{\iota k\omega_0 n} \tag{DTFS Synthesis}
\end{equation}

$$
c_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-\iota k \omega_0 n}
$$

Although you can take the sum over any length $N$ interval.