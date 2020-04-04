A **dual representation** for a [[group]] $G$ and its [[group representation]] $\rho$ on a [[vector space]] $V$ is a $\rho^\*$ defined for the [[dual space]] $V^\*$ that respects the natural pairing. In other words, $\rho^\*: G \to \operatorname{GL}(V^\*)$ or, if we like, $G \times V^\* \to V^\*$. However, we want to restrict ourselves to looking for $\rho^\*$ that respect the natural pairing between $V$ and $V^\*$.

Consider elements $v \in V$ and $v^* \in V^\*$. They can be paired up so that $\langle v^\*, v\rangle = c$. All we're saying is that don't want our representation to mess this up:

$$
\langle \rho^*(g)(v^*), \rho(g)(v) \rangle = c
$$

$$
\rho^*(g)(v^*) \big[ \rho(g)(v)\big] = v^*(v)
$$

It turns out that we need $\rho^\star(g)=\rho(g^{-1})^\top$.