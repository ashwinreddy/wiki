**Binary hypothesis testing** is [[hypothesis testing]]. We have $X \in \\{0, 1\\}$ and

\begin{align}
H_0: Y \sim P_{Y \mid X = 0} \tag{Null Hypothesis} \\\\
H_1: Y \sim P_{Y \mid X = 1} \tag{Alternate Hypothesis}
\end{align}

We want a decision rule $\hat{X}: Y \to \\{0, 1\\}$ to get

\begin{equation}
\begin{aligned}
q = \max_{A} \quad & 1 - \beta(A) \\\\
\textrm{s.t.} \quad & \alpha(A) \leqslant z \\\\
  &\xi\geq0    \\
\end{aligned}
\end{equation}