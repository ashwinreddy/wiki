The **Kullback-Leibler (KL) divergence** is a measure of relative entropy, the inefficiency in using a distribution $Q$ to model distribution $P$. It operates in a manner similiar to a metric but it is not symmetric.

$$
D_{KL} (P \parallel Q) \doteq H(P, Q) - H(P)
$$

Suppose $P$ and $Q$ are distributions from the same parameterized family and differ only slightly in those parameters. For example, say $P$ is the true model for a phenomenon and $Q$ is our current best guess. Since the KL divergence has a minimum at zero, the [[Taylor series]] approximation for the divergence kicks in with the quadratic.

$$
f_{\theta_0}(\theta) = D_{KL}\left(P(\theta_0) \parallel Q(\theta)\right)
$$

$$
f_{\theta_0}(\theta) =  \frac{1}{2} \sum_{jk} \Delta \theta^j \Delta\theta^k f_{\theta_0}''(\theta_0)
$$


# Computation

A computationally convenient form for the KL divergence is given by

$$
D_{KL}(P \parallel Q) = \mathbb{E}_{x \sim P}\left[\log \frac{P(X)}{Q(X)}\right]
$$

