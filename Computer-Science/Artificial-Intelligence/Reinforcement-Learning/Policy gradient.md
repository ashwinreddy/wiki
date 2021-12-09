---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

A **policy gradient** method computes an estimate of the policy gradient and uses that in [[stochastic gradient ascent]]


tries to adjust the parameters $\theta$ to [[policy]] $\pi_\theta$ to optimize the objective $J$ via the [[gradient]]. We can pick $J$ as the [[expected value]] of return or some other variant of the return. 

$$
J(\theta) = \mathbb{E}\_{\tau \sim \pi_\theta}\left[r(\tau) \right]
$$

And for $r$ we could choose to give a reward for a trajectory just by summing undiscounted rewards.

$$
r(\tau) = \sum_{t=1}^T r(s_t, a_t)
$$

The objective is to make the average return as high as possible. Let us treat the policy $\pi_\theta$ as a distribution over possible trajectories $\tau$.

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

However, we can't compute $\pi_\theta(\tau)$ without knowing the transition probabilities, which requires a model. We need to change this so that it only requires $\pi_\theta(a \mid s)$ evaluations. We can use the grad-log trick, which is just a [[logarithmic derivative]]:

$$
\nabla_\theta J(\theta) = \int \pi_\theta(\tau)\nabla_\theta \log \pi_\theta(\tau) r(\tau) \dd{\tau}
$$

While this looks more complicated, we can repackage it into an expectation because it contains probabilities $\pi_\theta(\tau)$ as weights.


<div class="theorem" data-text='Policy Gradient Theorem'>
\begin{equation}
\nabla_\theta J(\theta) = \mathbb{E}\_{\tau \sim \pi\_\theta}\left[\nabla_\theta \log \pi_\theta(\tau) r(\tau) \right]
\end{equation}
</div>

And this expectation is computable:

\begin{align\*}
\nabla_\theta \log \pi_\theta(\tau) &= \nabla_\theta \left[ \cancelto{0}{\log p(s_1)} + \sum_{t=1}^T \log \pi_\theta(a_t \mid s_t) + \cancelto{0}{\log p(s_{t+1} \mid s_t, a_t)} \right] \\\\\
&= \sum_{t=1}^T \nabla_\theta \log \pi_\theta(a_t \mid s_t)
\end{align\*}

As @10.5555/3044805.3044850 summarize,

> In particular, despite the fact that the state distribution depends on the policy parameters, the policy gradient does not depend on the gradient of the state distribution.

# Read More

* [[https://bland.website/notes/policy_gradient/]]

--- 
