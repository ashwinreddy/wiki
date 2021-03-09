The **discrete-time Fourier transform (DTFT / DFT)** is the [[Fourier transform]] applied to a discrete signal.

\begin{equation}
X[k] = \sum_{n =0}^{N-1} x[n] e^{-\iota\omega_0 k n}, \qquad \omega_0 = \frac{2\pi}{N} \tag{Analysis}
\end{equation}

\begin{equation}
x[n] = \frac{1}{2\pi} \int_{-\pi}^\pi X(e^{\iota\omega}) e^{\iota\omega n} \dd{\omega} \tag{Synthesis}
\end{equation}

# Properties

[[Linearity|Linear map]]
: $$ax[n] + by[n] \rightarrow aX(\omega) + bY(\omega)$$