---
bibliography: "Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---


**Control as inference** is a way of seeing [[reinforcement learning]] and/or optimal control through the lens of inference. As @levine2018reinforcement states,

> How can we formulate a [[probabilistic graphical model]] such that the most probable [[trajectory]] corresponds to the trajectory from the optimal [[policy]]? Or, equivalently, how can we formulate a probabilistic graphical model such that inferring the posterior action conditional $p(a_t \mid s_t, \theta)$ gives us the optimal policy.

We first need to introduce a notion of optimality into the probabilistic graphical model. Do this via a binary random variable $e_t$ that depends on state and action taken.

[[https://dibyaghosh.com/blog/assets/posts/controlasinference/state_action_reward.png|align=center,height=200px]]

# Policy Search

We want the policy $p(a_t \mid s_t, e_{t:T})$. To do this, we will compute

$$
\beta_t(s_t, a_t) = p(e_{t:T} \mid s_t, a_t)
$$

Let the probability of optimality be given by 

$$
\Pr(e_t = 1 \mid s_t, a_t) = \exp r(s_t, a_t) 
$$

An optimal policy would have $e_t=1$ at every time step. Since the action is independent of past events, the optimal policy is

$$
\pi_{t}(a \mid s) = \Pr (A_t = a \vert S_t = s, e_{t:T} =1).
$$


So if we can compute the RHS, we are done. Using Bayes' rule again,

$$
P(A_t =a \mid S_t=s, e_{t:T}=1) = \frac{P(e_{t:T}=1 \mid A_t =a,  S_t=s)P(A_t = a \mid S_t =s)}{P(e_{t:T}=1\mid S_t=s)}
$$

The first step is to compute the $\Pr(e_{t:T} \mid S_t = s)$ and $\Pr(e_{t:T} \mid S_t = s, A_t =a)$. Let us work with the log probabilities instead.

\begin{align}
Q_t(s, a) &= \log \Pr(e_{t:T} = 1 \mid S_t = s, A_t = a) \\\\\
V_t(s) &= \log \Pr(e_{t:T} =1 \mid S_t = s)
\end{align}

Mathematically, it turns out that

\begin{align}
Q_t(s, a) &= r(s, a) + \log \mathbb{E}\_{s' \sim T(\cdot \mid s, a)} \left[ e^{V_{t+1}(s')} \right] \\\\\
V_t(s) &= \log \mathbb{E}_a\left[ e^{Q_t(s, a)} \right]
\end{align}

The policy is then [[advantage function]]-seeking if we simply let $A_t(s, a) = Q_t(s, a) - V_t(s)$.

$$
\pi_t(A_t = a \mid S_t = s, e_{t:T} = 1) = { e^{ Q_t(s, a) } C \over e^{V_t(s)} } \propto \exp(A_t(s, a))
$$



---

Suppose you have a [[trajectory]] $\tau$. The probability that every step was optimal is given by

$$
\Pr(\text{All } e_t = 1 \mid \tau) = \prod_{t=0}^T f(s_t, a_t)
$$

If we write $r(s_t, a_t) = \log f(s_t, a_t)$, then by the [[exponential function#properties]],

$$
\Pr(e_{1:T} = 1 \mid \tau) = \exp\left( \sum_{t=0}^T r(s_t, a_t) \right)
$$

By [[Bayes' theorem]],

$$
\Pr(\tau \mid e_{1:T}) \propto \exp\left( \sum_{t=0}^T r(s_t, a_t) \right) P(\tau)
$$

---