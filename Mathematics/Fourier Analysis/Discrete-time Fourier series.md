The **discrete time Fourier series (DTFS)** represents a [[periodic function]] (fundamental period $N$; fundamental frequency $\omega_0 = \frac{2\pi}{N}$) discrete signal $x[n]$ as a sum of complex exponentials. It is a special case of the [[discrete-time Fourier transform]]. 

\begin{equation}
x[n] = \sum_{k \in \langle N \rangle} X_k e^{\iota k\omega_0 n} \tag{DTFS Synthesis}
\end{equation}

The coefficients are given by

\begin{equation}
X_k = \frac{1}{N} \sum_{n\in \langle N \rangle} x[n] e^{-\iota k \omega_0 n}, \tag{DTFS Analysis}
\end{equation}

where $\langle N \rangle$ denotes an interval of $N$ integers. The coefficients are periodic: notice that $c_k$ corresponds to $\omega_0 k$, so therefore $c_{k+N} = \omega_0 k + \cancelto{2\pi}{\omega_0 N}$, which is the same frequency as $c_k$.


