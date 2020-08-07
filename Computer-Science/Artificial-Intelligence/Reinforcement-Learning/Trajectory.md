A **trajectory** $\tau$ is a sequence of states and actions from a [[Markov Decision Process]]. 

$$
\tau = (s_0, a_0, \dots, s_H, a_H)
$$

As a [[probabilistic graphical model]],

[[https://dibyaghosh.com/blog/assets/posts/controlasinference/state_action.png|align=center,height=200px]]

In general, the factorization for the probability of a trajectory is

\begin{equation} p(\tau) = p(\mathbf{s}_1, \mathbf{a}_1, \ldots, \mathbf{s}_T, \mathbf{a}_T) = p(\mathbf{s}\_1) \prod\_{t=1}^T p(\mathbf{a}\_t \mid \mathbf{s}\_t)p(\mathbf{s}\_{t+1} \mid \mathbf{s}\_t, \mathbf{a}_t) \end{equation}

Suppose we pick actions uniformly. Then, $p(a_t) = c$ for some constant $c$ and we have

$$
\p(\tau) \propto p(\mathbf{s}\_1) \prod\_{t=1}^T p(\mathbf{a}\_t \mid \mathbf{s}\_t)p(\mathbf{s}\_{t+1} \mid \mathbf{s}\_t, \mathbf{a}_t) \end{equation}
$$