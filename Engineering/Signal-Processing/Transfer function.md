The **transfer function** for a [[linear time-invariant system]]

$$
H(s) = \frac{Y(s)}{X(s)}
$$

where $H(s)$ is the [[Laplace transform]] of [[impulse response]] $h(t)$.

# LCCDE

$$
\sum_{k=0}^N a_k \frac{\dd{}^k y(t)}{\dd{t^k}} = \sum_{k=0}^M b_k \frac{\dd{}^k x(t)}{\dd{t^k}}
$$

In $s$-space,

$$
\sum_{k=0}^N a_k s^K Y(s) = \sum_{k=0}^M b_k s^k X(s)
$$

Therefore,

$$
H(s) = \frac{Y(s)}{X(s)} = \frac{b_M s^M + \dots + b_0}{a_N s^N + \dots + a_0}
$$