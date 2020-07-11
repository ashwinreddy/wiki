---
bibliography: 'bibliography.bib'
---

A **policy gradient** method tries to directly optimize a parameterized policy $\pi_\theta$. In other words, the goal is to find the best $\theta$ for the objective $J$, which we can pick as the expected return or some other variant of the return. For example, we could choose to give a reward for a trajectory just by summing undiscounted rewards.

$$
r(\tau) = \sum_{t=1}^T r(s_t, a_t)
$$

The objective is to make the average return as high as possible.

$$
J(\theta) = \mathbb{E}\_{\tau \sim \pi_\theta}\left[r(\tau) \right]
$$

$$
\theta^\star = \arg\max_\theta J(\theta)
$$

The obvious approach is to use [[gradient descent]].

\begin{equation}
\theta \leftarrow \theta + \alpha \nabla_\theta J(\theta)
\end{equation}


# Gradient computation

If we're going to apply gradient descent successfully, we'll need to compute the gradient of the objective $J(\theta)$. We can pass the gradient through the expectation integral:

$$
\nabla_\theta J(\theta) = \int \nabla_\theta p_\theta(\tau) r(\tau) \dd{\tau}
$$

However, we can't compute $p_\theta(\tau)$ without knowing the transition probabilities, which requires a model.

--- 
