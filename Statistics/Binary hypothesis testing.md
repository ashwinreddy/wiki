**Binary hypothesis testing** is [[hypothesis testing]]. We have $X \in \\{0, 1\\}$ and

\begin{align}
H_0: Y \sim P_{Y \mid X = 0} \tag{Null Hypothesis} \\\\
H_1: Y \sim P_{Y \mid X = 1} \tag{Alternate Hypothesis}
\end{align}

We want a decision rule $\hat{X}: Y \to \\{0, 1\\}$ to get

\begin{equation}
\begin{aligned}
\min_{w,b,\xi} \quad & \frac{1}{2}w\^{t}w+C\sum_{i=1}^{N}{\xi_{i}}\\\\
\textrm{s.t.} \quad & y_{i}(w\phi(x_{i}+b))+\xi_{i}-1\\\\
  &\xi\geq0    \\
\end{aligned}
\end{equation}