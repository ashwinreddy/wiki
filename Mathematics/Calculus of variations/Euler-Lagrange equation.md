The **Euler-Lagrange equation** says that if $(X, L)$ is a mechanical system with configuration space $X$ and Lagrangian $L: \RR \times \operatorname{T}X \to \RR$, then the stationary point of 

$$
S[\mathbf{q}] = \int_a^b L(t, \mathbf{q}(t), \dot{\mathbf{q}}(t)) \mathrm{d}t
$$

is given by

$$
\boxed{\frac{\mathrm{d}}{\mathrm{d}t}\left( \frac{\partial L}{\partial \dot{x}} \right) = \frac{\partial L}{\partial x}}
$$