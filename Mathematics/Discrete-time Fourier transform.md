The **discrete-time Fourier transform (DTFT / DFT)** is the [[Fourier transform]] applied to a discrete signal $x[n]$ of length $N$.

\begin{equation} X(e^{\iota\omega}) = \sum_{n = -\infty}^\infty x[n] e^{-\iota\omega n} \tag{Analysis} \end{equation}

<<Note()>>

\begin{equation}
x[n] = \frac{1}{2\pi} \int_{-\pi}^\pi X(e^{\iota\omega}) e^{\iota\omega n} \dd{\omega} \tag{Synthesis}
\end{equation}

# Properties

[[Linearity|Linear map]]
: $$ax[n] + by[n] \rightarrow aX(\omega) + bY(\omega)$$