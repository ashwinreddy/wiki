**Control as inference** is a way of seeing [[reinforcement learning]] and/or optimal control through the lens of inference. We first need to introduce a notion of optimality into the [[probabilistic graphical model]]. Do this via a binary random variable $e_t$ that depends on state and action taken.

$$
\Pr(e_t = 1 \mid S_t = s_t, A_t = a_t) = f(s_t, a_t)
$$

[[https://dibyaghosh.com/blog/assets/posts/controlasinference/state_action_reward.png|align=center,height=200px]]

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

An optimal policy will then be

$$
\pi_{t}(a \vert s) = \Pr (A_t = a \vert S_t = s, e_{t:T} =1),
$$

since the action is independent of past events.

So if we can compute the RHS, we are done. Using Bayes' rule again,

$$
P(A_t =a \mid S_t=s, e_{t:T}=1) = \frac{P(e_{t:T}=1 \mid A_t =a,  S_t=s)P(A_t = a \mid S_t =s)}{P(e_{t:T}=1\mid S_t=s)}
$$

The first step is to compute the $\Pr(e_{t:T} \mid S_t = s)$ and $\Pr(e_{t:T} \mid S_t = s, A_t =a)$.