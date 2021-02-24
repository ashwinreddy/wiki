The **discrete Fourier transform (DFT)** is like the [[Fourier transform]].

\begin{equation}
X(e^{\iota\omega}) = \sum_{n \in \mathbb{Z}} x[n] e^{-\iota\omega n} \tag{Analysis}
\end{equation}

\begin{equation}
x[n] = \frac{1}{2\pi} \int_{-\pi}^\pi X(e^{\iota\omega}) e^{\iota\omega n} \dd{\omega} tag{Synthesis}
\end{equation}