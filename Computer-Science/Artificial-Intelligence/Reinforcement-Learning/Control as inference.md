---
bibliography: "Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---


**Control as inference** is a way of seeing [[reinforcement learning]] and/or optimal control through the lens of [[inference]]. @levine2018reinforcement poses the fundamental question succinctly:

> How can we formulate a [[probabilistic graphical model]] such that the most probable [[trajectory]] corresponds to the trajectory from the optimal [[policy]]? Or, equivalently, how can we formulate a probabilistic graphical model such that inferring the posterior action conditional $p(a_t \mid s_t, \theta)$ gives us the optimal policy.

# Graphical Model

We first need to introduce a notion of optimality/reward/cost into the probabilistic graphical model to distinguish good and bad [[trajectory]]. We insert a binary random variable $e_t$ that depends on state and action taken. 

[[https://dibyaghosh.com/blog/assets/posts/controlasinference/state_action_reward.png|align=center,height=200px]]

Let the probability of optimality be given by the [[exponential function]] of a [[reward function]].

$$
\Pr(e_t = 1 \mid s_t, a_t) = \exp r(s_t, a_t) 
$$

By the [[exponential function#properties]], we can extend this notion to the full trajectory.

$$
\Pr(e_{1:T} = 1 \mid \tau) = \prod_{t=0}^T \exp r(s_t, a_t) = \exp \sum_{t=0}^T r(s_t, a_t) 
$$

In the standard RL formulation, we're looking for $\pi(a_t \mid s_t, \theta^\star)$, but here we're looking for something slightly different. Instead, we want $\pi(a_t \mid s_t, e_{t:T}=1)$. So a natural question to ask then is what these optimal trajectories actually look like. Let's find out what the probability of an optimal trajectory is. By [[Bayes' theorem]],

$$
\Pr(\tau \mid e_{1:T}) \propto \exp\left( \sum_{t=0}^T r(s_t, a_t) \right) P(\tau)
$$

This means that in deterministic dynamics (where every feasible trajectory is equally likely), the likelihood of a trajectory is exponential in the total reward.

# Policy Search

We want the policy $p(a_t \mid s_t, e_{t:T})$. To do this, we will compute "backwards messages," which tell us the probability of a trajectory being optimal after time $t$ starting in $s_t$ with action $a_t$.

$$
\beta_t(s_t, a_t) = p(e_{t:T} \mid s_t, a_t)
$$

The backwards messages in log space correspond to soft variants of the [[value function]] and the [[action-value function]].

\begin{align}
Q(s_t, a_t) &= \log \beta_t(s_t, a_t) \\\\\
V(s_t) &= \log \beta_t (s_t)
\end{align}



So if we can compute the RHS, we are done. Using Bayes' rule again,

$$
P(A_t =a \mid S_t=s, e_{t:T}=1) = \frac{P(e_{t:T}=1 \mid A_t =a,  S_t=s)P(A_t = a \mid S_t =s)}{P(e_{t:T}=1\mid S_t=s)}
$$

The first step is to compute the $\Pr(e_{t:T} \mid S_t = s)$ and $\Pr(e_{t:T} \mid S_t = s, A_t =a)$. Let us work with the log probabilities instead.



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