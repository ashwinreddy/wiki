The **discrete time Fourier series (DTFS)** represents a [[periodic function]] (fundamental period $N$; fundamental frequency $\omega_0 = \frac{2\pi}{N}$) discrete signal $x[n]$ as a sum of complex exponentials. It is a special case of the [[discrete-time Fourier transform]]. 

\begin{equation}
x[n] = \sum_{k=0}^{N-1} c_k e^{\iota k\omega_0 n} \tag{DTFS Synthesis}
\end{equation}

\begin{equation}
c_k = \frac{1}{N} \sum_{n\in \langle N \rangle} x[n] e^{-\iota k \omega_0 n} \tag{DTFS Analysis}
\end{equation}

Notice that $c_k$ corresponds to $\omega_0 k$, so therefore $c_{k+N} = \omega_0 k + \cancelto{2\pi}{\omega_0 N}$, which is the same frequency as $c_k$.

where $\langle N \rangle$ denotes an interval of $N$ integers.
