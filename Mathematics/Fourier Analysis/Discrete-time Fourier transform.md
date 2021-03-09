The **discrete-time Fourier transform (DTFT / DFT)** is the [[Fourier transform]] applied to a discrete signal $x[n]$ of length $N$.

\begin{equation} X(e^{\iota\omega}) = \sum_{n = -\infty}^\infty x[n] e^{-\iota\omega n} \tag{Analysis} \end{equation}

Despite $x[n]$ being discrete, $X$ is a continuous function of frequency.

\begin{equation}
x[n] = \frac{1}{2\pi} \int_{-\pi}^\pi X(e^{\iota\omega}) e^{\iota\omega n} \dd{\omega} \tag{Synthesis}
\end{equation}

# Extension of Fourier Transform

Let's push our discrete signal $x[n]$ into continuous time using a train of deltas.

$$
x(t) \triangleq \sum_{n=-\infty}^\infty x[n]\delta(t-n)
$$

\begin{align}
X(\omega) &= \mathcal{F}\\{x(t)\\} \\\\
&= \mathcal{F}\left\\{ \sum_{n=-\infty}^\infty x[n] \delta(t-n) \right\\}  \\\\
&= \sum_{n=-\infty}^\infty x[n] e^{-\iota \omega n}
\end{align}

# Properties

[[Linearity|Linear map]]
: $$ax[n] + by[n] \rightarrow aX(\omega) + bY(\omega)$$