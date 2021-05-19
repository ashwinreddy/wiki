**Binary hypothesis testing** is [[hypothesis testing]] where we have $X \in \\{0, 1\\}$ and

\begin{align}
H_0: Y \sim P_{Y \mid X = 0} \tag{Null Hypothesis} \\\\
H_1: Y \sim P_{Y \mid X = 1} \tag{Alternate Hypothesis}
\end{align}

We want a decision rule $\hat{X}: Y \to \\{0, 1\\}$ to get the highest probability of correct detection without setting off too many false alarms:

\begin{equation}
\begin{aligned}
\max \quad & \text{PCD} \\\\
\textrm{s.t.} \quad & \text{PFA} \leqslant \beta \\\\
\end{aligned}
\end{equation}

# Bayesian binary hypothesis testing

