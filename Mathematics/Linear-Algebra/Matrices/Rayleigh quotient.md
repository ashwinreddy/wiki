The **Rayleigh quotient** for a matrix $M$ and vector $\vec{v}$ is

$$
R(M, \vec{x}) \triangleq {\vec{x}^\top M \vec{x} \over \vec{x}^\top \vec{x} }
$$

Notice that $R(M, c\vec{x}) = R(M, \vec{x})$.

If the maximum and minimum [[eigenpairs]] are $(\lambda\_\min, \vec{v}\_\min)$ and $(\lambda_{\max}, \vec{v}_{\max})$, then

$$
\lambda_\min = R(M, \vec{v}_\min) \leq R(M, \vec{x}) \leq R(M, \vec{v}_\max) = \lambda_\max
$$