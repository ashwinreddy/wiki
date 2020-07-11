---
bibliography: 'bibliography.bib'
---

A **policy gradient** method tries to directly optimize a parameterized policy $\pi_\theta$. In other words, the goal is to find the best $\theta$ for the objective $J$, which we can pick as the expected return or some other variant of the return. For example, we could choose to give a reward for a trajectory just by summing undiscounted rewards.

$$
r(\tau) = \sum_{t=1}^T r(s_t, a_t)
$$

The objective is to make the average return as high as possible. Let us treat the policy $\pi_\theta$ as a distribution over possible trajectories $\tau$.

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
\nabla_\theta J(\theta) = \int \nabla_\theta \pi_\theta(\tau) r(\tau) \dd{\tau}
$$

However, we can't compute $\pi_\theta(\tau)$ without knowing the transition probabilities, which requires a model. We need to change this so that it only requires $\pi_\theta(a \mid s)$ evaluations. We can use the grad-log trick:

$$
\nabla_\theta J(\theta) = \int \pi_\theta(\tau)\nabla_\theta \log \pi_\theta(\tau) r(\tau) \dd{\tau}
$$

While this looks more complicated, we can repackage it into an expectation because it contains probabilities $\pi_\theta(\tau)$ as weights.

$$
\nabla_\theta J(\theta) = \mathbb{E}\_{\tau \sim \pi\_\theta}\left[\nabla_\theta \log \pi_\theta(\tau) r(\tau) \right]
$$

And this expectation is computable:

$$
\nabla_\theta \log \pi_\theta(\tau) = \nabla_\theta \left[ \cancelto{0}{\log p(s_1)} + \sum_{t=1}^T \log \pi_\theta(a_t \mid s_t) + \cancelto{0}{\log p(s_{t+1} \mid s_t, a_t)} \right]
$$

--- 
