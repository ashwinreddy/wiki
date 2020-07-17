**Control as inference** is a way of seeing reinforcement learning and/or optimal control through the lens of inference.

We introduce a notion of optimality into a graphical model via a binary random variable that depends on state and action taken.

$$
\Pr(e_t = 1 \mid S_t = s_t, A_t = a_t) = f(s_t, a_t)
$$

[[https://dibyaghosh.com/blog/assets/posts/controlasinference/state_action_reward.png|align=center,height=200px]]

Suppose you have a [[trajectory]] $\tau$. The probability that every step was optimal is given by

$$
\Pr(\text{All } e_t = 1 \mid \tau) = \prod_{t=0}^T f(s_t, a_t)
$$
