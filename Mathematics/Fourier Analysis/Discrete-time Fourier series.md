The **discrete time Fourier series (DTFS)** is a special case of the [[discrete-time Fourier transform]] when the signal is periodic $x[n]$ with period $N$.

$$
\omega_0 = \frac{2\pi}{N}
$$

\begin{equation}
x[n] = \sum_{k=0}^{N-1} c_k e^{\iota k\omega_0 n} \tag{DTFS Synthesis}
\end{equation}

\begin{equation}
c_k = \frac{1}{N} \sum_{n\in \langle N \rangle} x[n] e^{-\iota k \omega_0 n}
\end{equation}

where $\langle N \rangle$ denotes an interval of $N$ integers.