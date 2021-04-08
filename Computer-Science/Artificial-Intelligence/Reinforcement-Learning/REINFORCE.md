**REINFORCE** is a simple implementation of a [[policy gradient]] [[algorithm]].

# Algorithm

1. Sample trajectories by running policy.
2. Estimate policy gradient using samples.
3. Take step in direction of gradient according to \ref{eq:gradient-update}.


\begin{equation}
\label{eq:gradient-update}
\theta \leftarrow \theta + \alpha \nabla_\theta J(\theta)
\end{equation}