A **policy** $\pi$ completely characterizes an agent by telling us how it behaves in all scenarios. In the deterministic case, we would write $a = \pi(s)$. However, if it were stochastic we would write $\pi\left(a \mid s\right)$.


A trajectory has an associated probability under a policy, which we can decompose using a [[/Mathematics/Probability-Theory/chain rule]]

\begin{equation}
p_\pi (\tau) = p(\mathbf{s}_1, \mathbf{a}_1, \ldots, \mathbf{s}_T, \mathbf{a}_T) = p(\mathbf{s}\_1) \prod\_{t=1}^T \pi(\mathbf{a}_t \mid \mathbf{s}\_t , \theta)p(\mathbf{s}\_{t+1} \mid \mathbf{s}_t, \mathbf{a}_t)
\end{equation}