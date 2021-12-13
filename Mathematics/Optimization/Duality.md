**Duality** refers to the fact that a given [[optimization problem]], which we'll call the _primal problem_, has a related _dual problem_.

# Lagrange duality

Suppose we're given the problem

\begin{equation}
\begin{aligned}
\min_{\mathbf{x}} \quad & f_0(\mathbf{x})\\\\
\textrm{s.t.} \quad & f_i(\mathbf{x}) \leqslant 0, \quad i = 1, \dots, m \\\\
  & h_j(\mathbf{x}) = 0, \quad j = 1, \dots, n
\end{aligned} \equiv  \begin{aligned}
\min_{\mathbf{x}} \quad & \mathcal{L}(\mathbf{x})\\\\
& \mathcal{L}(\mathbf{x}) = \begin{cases}f_0(\mathbf{x}) & f_i(\mathbf{x}) \leqslant 0 ,\;  h_j(\mathbf{x}) = 0 \\\\ \infty &  \text{otherwise} \end{cases}
\end{aligned}
\end{equation}

