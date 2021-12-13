**Duality** refers to the fact that a given [[optimization problem]], which we'll call the _primal problem_, has a related _dual problem_.

# Lagrange duality

Suppose we're given the problem

\begin{align\*}
p^* &= \begin{aligned}
\min_{\mathbf{x}} \quad & f_0(\mathbf{x})\\\\
\textrm{s.t.} \quad & f_i(\mathbf{x}) \leqslant 0, \quad i \in [m] \\\\
  & h_j(\mathbf{x}) = 0, \quad j \in [n]
\end{aligned} \\\\ & \equiv  \begin{aligned}
\min_{\mathbf{x}} \quad & \begin{cases}f_0(\mathbf{x}) & \forall i \in [m], j \in [n]: f_i(\mathbf{x}) \leqslant 0 ,\\;  h_j(\mathbf{x}) = 0 \\\\ \infty &  \text{otherwise} \end{cases}
\end{aligned} \\\\
&\equiv  \begin{aligned}
\min_{\mathbf{x}} \max_{\pmb{\lambda} \geqslant \mathbf{0}, \pmb{\nu}} f_0(\mathbf{x}) + \sum_{i=1}^m \lambda_i f_i(\mathbf{x}) + \sum_{j=1}^n \nu_j h_j(\mathbf{x})
\end{aligned}
\end{align\*}

