A **policy** $\pi$ completely characterizes an agent by telling us how it behaves in all scenarios. In the deterministic case, we would write $a = \pi(s)$. 

$$
\pi : \mathcal{A} \to \mathcal{S}
$$

However, if it were stochastic we would write $\pi\left(a \mid s\right)$ to indicate it is a [[conditional probability]].

$$
\pi : \mathcal{A} \to \Delta_{\mathcal{S}}
$$

# Trajectories

A choice of policy induces a distribution over trajectories, which we can decompose using a [[/Mathematics/Probability-Theory/chain rule]]

\begin{equation}
p_\pi (\tau) = p(\mathbf{s}_1, \mathbf{a}_1, \ldots, \mathbf{s}_T, \mathbf{a}_T) = p(\mathbf{s}\_1) \prod\_{t=1}^T \pi(\mathbf{a}_t \mid \mathbf{s}\_t , \theta)p(\mathbf{s}\_{t+1} \mid \mathbf{s}_t, \mathbf{a}_t)
\end{equation}

Suppose, for example, that we randomly take actions in a uniform manner. Then,

$$
p(\tau) \propto p(s_1) \prod_{t=0}^{T-1} p(s_{t+1} \mid s_t, a_t)
$$

With deterministic dynamics, every feasible trajectory has equal probability of being sampled.