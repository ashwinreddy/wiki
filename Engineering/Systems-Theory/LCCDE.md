**Linear constant coefficient differential / difference equation**

$$
\sum_{k=0}^N a_k \frac{\dd{}^k y(t)}{\dd{} t^k} = \sum_{k=0}^M b_k \frac{\dd{}^k x(t)}{\dd{} t^k}
$$

The homogenous solution $y_{\mathsf{homogeneous}}(t)$ solves

$$
\sum_{k=0}^N a_k \frac{\dd{}^k y(t)}{\dd{} t^k} = 0
$$

$$
y(t) = y_{\mathsf{homogeneous}}(t) + A \cdot y_{\mathsf{particular}}(t)
$$

# Example

Suppose we want to solve

$$
\dv{y(t)}{t} + a y(t) = u(t)
$$

The homogeneous equation will encapsulate 

$$
\dv{y_{\mathsf{homogeneous}}(t)}{t} + a y_{\mathsf{homogeneous}}(t) = 0 \implies y_{\mathsf{homogeneous}}(t) = Ae^{-at}
$$