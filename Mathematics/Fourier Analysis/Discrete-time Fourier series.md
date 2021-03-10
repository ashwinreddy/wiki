The **discrete time Fourier series (DTFS)** is a special case of the [[discrete-time Fourier transform]] when the signal is periodic $x[n]$ with period $N$. Then, the fundamental frequency is

$$
\omega_0 = \frac{2\pi}{N}
$$

\begin{equation}
x[n] = \sum_{k=0}^{N-1} c_k e^{\iota k\omega_0 n} \tag{DTFS Synthesis}
\end{equation}

\begin{equation}
c_k = \frac{1}{N} \sum_{n\in \langle N \rangle} x[n] e^{-\iota k \omega_0 n} \tag{DTFS Analysis}
\end{equation}

Notice that $c_k$ corresponds to $\omega_0 k$, so therefore $c_{k+N} = \omega_0 k + \cancelto{2\pi}{\omega_0 N}$

where $\langle N \rangle$ denotes an interval of $N$ integers.