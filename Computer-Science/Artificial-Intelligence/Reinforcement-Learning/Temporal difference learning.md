**Temporal difference learning (TD learning)** refers to bootstrapping the [[value function]].

\begin{equation}
V(s) \leftarrow V(s) + \alpha\left( r + \gamma V(s') - V(s) \right)
\end{equation}