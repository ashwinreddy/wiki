**Kalman filter** allows us to estimate hidden state from observations and a linear model.

[[_TOC_]]

# Scalar filter


\begin{align}
x_n  = ax_{n-1} + v_n \\\\
y_n = cx_n + w_n
\end{align}

# Matrix model

\begin{equation}
X_n = AX_{n-1} + V_n, \qquad n \geqslant 1 \tag{System Evolution}
\end{equation}

\begin{equation}
Y_n = CX_n + W_n \tag{Observation}
\end{equation}

[[https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/]]