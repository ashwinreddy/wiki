**REINFORCE** is a simple implementation of a [[policy gradient]] [[algorithm]]. Recall that the goal is to find

# Algorithm

1. Perform \ref{eq:sample}.
2. Compute \ref{eq:estimate}.
3. Execute \ref{eq:gradient-update}.

\begin{equation}
\label{eq:sample}
\\{ \tau^i \\} \sim \pi_\theta(a_t \mid s_t) \tag{Trajectory Sampling}
\end{equation}

\begin{equation}
\label{eq:estimate}
\nabla_\theta J(\theta) \approx \sum_i \left( \sum_t \nabla_\theta \log \pi_\theta(a_t^i \mid s_t^i) \right)\left( \sum_t r(s_t^i, a_t^i) \right) \tag{Gradient Estimate}
\end{equation}

\begin{equation}
\label{eq:gradient-update}
\theta \leftarrow \theta + \alpha \nabla_\theta J(\theta) \tag{Gradient Update}
\end{equation}

# Proof

How do we obtain \ref{eq:estimate}?

\begin{align}
\nabla_\theta J(\theta) = \mathbb{E}\_{\tau \sim \pi_\theta(\tau)}\left( \nabla_\theta \log \pi_\theta(\tau) r(\tau) \right)
\end{align}