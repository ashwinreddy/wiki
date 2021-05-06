**Kalman filter** allows us to estimate hidden state from observations and a linear model.

\begin{equation}
X_n = AX_{n-1} + V_n, \qquad n \geqslant 1 \tag{System Evolution}
\end{equation}

\begin{equation}
Y_n = CX_n + W_n \tag{Observation}
\end{equation}

[[https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/]]