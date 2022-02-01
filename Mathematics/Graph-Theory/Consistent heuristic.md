A **consistent heuristic** $h(\cdot)$ is one such that

\begin{gather}
h(A) - h(C) \leqslant c(A, C) \\\\
h(A) \leqslant c(A,C) + h(C) \tag{Triangle Inequality}
\end{gather}

Ask yourself: is the decrease in heuristic across adjacent states upper bounded by the cost of moving between the states?

Consistency implies [[admissibility|admissible heuristic]].