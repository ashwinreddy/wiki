**REINFORCE** is a simple implementation of a [[policy gradient]] [[algorithm]].

# Algorithm

1. Sample trajectories by running policy.
2. Estimate policy gradient using samples given \ref{eq:estimate}.
3. Take step in direction of gradient according to \ref{eq:gradient-update}.

\begin{equation}
\label{eq:estimate}
\nabla_\theta J(\theta) \approx \sum_i \left( \sum_t \nabla_\theta \log \pi_\theta(a_t^i \mid s_t^i) \right)\left( \sum_t r(s_t^i, a_t^i) \right) \tag{Gradient Estimate}
\end{equation}

\begin{equation}
\label{eq:gradient-update}
\theta \leftarrow \theta + \alpha \nabla_\theta J(\theta) \tag{Gradient Update}
\end{equation}