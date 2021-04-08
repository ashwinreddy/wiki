**REINFORCE** is a simple implementation of a [[policy gradient]] [[algorithm]]. Recall that the goal is to find

$$
\theta^\star = \arg\max_\theta J(\theta)
$$

\begin{align}
J(\theta) &= \mathbb{E}\_{\tau \sim p_\theta(\tau)}\left[ \sum_t r(s_t, a_t) \right] \\\\
&\approx \frac{1}{N}\sum_i \sum_t r(s_{i,t}, a_{i,t})
\end{align}

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