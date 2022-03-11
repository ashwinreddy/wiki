**Value iteration** is an [[algorithm]] to update [[value function]].

$$
\forall s: V_0^*(s) \leftarrow 0 \tag{Initialization}
$$

$$
V_{i+1}^\*(s) \leftarrow \max_a \sum_{s'} T(s, a, s')\left[R(s,a,s') + V_i^*(s)\right]
$$