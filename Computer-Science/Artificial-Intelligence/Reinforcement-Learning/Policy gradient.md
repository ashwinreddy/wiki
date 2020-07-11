---
bibliography: 'bibliography.bib'
---

A **policy gradient** method tries to directly optimize a parameterized policy $\pi_\theta$. In other words, the goal is to find the best $\theta$ for the objective $J$, which we can pick as the expected return or some other variant of the return.

\begin{equation}
J(\theta) = \mathbb{E}\_{\tau \sim \pi_\theta}\left[R(\tau) \right]
\end{equation}

\begin{equation}
\theta^\star = \arg\max_\theta J(\theta)
\end{equation}

The obvious approach is to use [[gradient descent]].

\begin{equation}
\theta \leftarrow \theta + \alpha \nabla_\theta J(\theta)
\end{equation}


# Gradient computation

If we're going to apply gradient descent successfully, we'll need to compute the gradient of the objective $J(\theta)$.


--- 
