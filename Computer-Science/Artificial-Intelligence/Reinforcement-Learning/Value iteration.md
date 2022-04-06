**Value iteration** is a [[dynamic programming]] [[algorithm]] to update [[value function]].

1. Initialize estimates to 0, i.e. $\forall s: U_0(s)=0$
2. Repeat until convergence: $U_{k+1}\leftarrow B U_k$

where $B$ is the [[Bellman operator]].

$$
\forall s: V_0^*(s) \leftarrow 0 \tag{Initialization}
$$

# Proof

We want a fixed point $U^* = BU^*$.