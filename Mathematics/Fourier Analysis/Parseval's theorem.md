**Parseval's theorem**. [[Fourier transform]] Consider the energy per unit frequency interval (sort of like power):


\begin{equation}
\int_{-\infty}^\infty | x(t) |^2 \dd{t} = \frac{1}{2\pi} \int_{-\infty}^\infty |X(\omega)|^2 \dd{\omega} \tag{Parseval's theorem for continuous signal}
\end{equation}

\begin{equation}
\sum_{n = -\infty}^\infty | x[n] |^2 = \frac{1}{2\pi} \int_{-\infty}^\infty |X(\omega)|^2 \dd{\omega} \tag{Parseval's theorem for discrete signal}
\end{equation}

# Meaning


$$
\mathcal{E}(\omega_0) = \lim_{\delta \omega \to 0}\frac{E(\omega_0 + \delta\omega) - E(\omega_0)}{\delta \omega}
$$