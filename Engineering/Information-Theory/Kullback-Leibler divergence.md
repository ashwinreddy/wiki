The **Kullback-Leibler (KL) divergence** is a measure of relative entropy, the inefficiency in using a distribution $Q$ to model distribution $P$.

$$
D_{KL} (P \parallel Q) = H(P, Q) - H(P)
$$

It operates in a manner similiar to a metric but it is not symmetric.

# Computation

A computationally convenient form for the KL divergence is given by

$$
D_{KL}(P \parallel Q) = \mathbb{E}_{x \sim P}\left[\log \frac{P(X)}{Q(X)}\right]
$$

# Relationship to Fisher Information

