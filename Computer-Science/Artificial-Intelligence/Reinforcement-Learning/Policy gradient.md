A **policy gradient** method tries to directly optimize a parameterized policy $\pi_\theta$. In other words, the goal is to find the best $\theta$ for the objective $J$, which we can pick as the return or some other variant of the return.

\begin{equation}
J(\theta) = \mathbb{E}\_{\tau \sim \pi_\theta}\left[R(\tau) \right]
\end{equation}

\begin{equation}
\theta^\star = \arg\max_\theta J(\theta)
\end{equation}

The obvious approach is to use [[gradient descent]].

\begin{equation}
\vec\theta \leftarrow \vec\theta + \alpha \vec\nabla J(\theta)
\end{equation}

# Gradient computation

\begin{align}
\nabla_\theta J(\theta) &= \nabla_\theta \mathbb{E}\_{\tau \sim \pi_\theta}\left[R(\tau)\right] \\\\\
&= \nabla_\theta \int_\tau P(\tau \mid \theta) R(\tau) \\\\\
&= \int_\tau \nabla_\theta P(\tau \mid \theta) R(\tau) \\\\\
&= \int_\tau P(\tau \mid \theta) \nabla_\theta \log P(\tau \mid \theta) R(\tau)
\end{align}