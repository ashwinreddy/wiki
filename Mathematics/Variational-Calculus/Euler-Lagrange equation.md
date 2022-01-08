The **Euler-Lagrange equation** gives a necessary and sufficient condition for a path minimizing a functional of the form $F[\mathbf{x}] = \int_{t_1}^{t_2} f(\mathbf{x}, \dot{\mathbf{x}}, t) \dd{t}$.


\begin{equation}
\frac{\dd{}}{\dd{t}}\frac{\partial f}{\partial \dot{\mathbf{x}}} - \frac{\partial f}{\partial \mathbf{x}} = 0
\end{equation}

# Proof

Let $\bar{\mathbf{x}}(t)$ be the minimizing path and $\eta(t)$ be the difference so that $\mathbf{x}(t) = \bar{\mathbf{x}}(t) + \pmb{\eta}(t)$. Then

$$
F[\bar{\mathbf{x}}] \leqslant F[\mathbf{x}] = \int_{t_1}^{t_2} f(\bar{\mathbf{x}} + \pmb{\eta}, \dot{\hat{\mathbf{x}}} )
$$