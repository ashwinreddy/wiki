**Value iteration** is an [[algorithm]] to update [[value function]].

First, we initialize all values to 0.

$$
\forall s: V_0^*(s) \leftarrow 0 \tag{Initialization}
$$

$$
\forall s \in S:\quad V_{i+1}^\*(s) \leftarrow \max_a \sum_{s'} T(s, a, s')\left[R(s,a,s') + \gamma V_i^*(s')\right]
$$

$$
U_{k+1} \leftarrow B U_{k}
$$

Value iteration converges to the optimal value function.