A **joint normal distribution** is a [[probability distribution]] for a $k$-dimensional [[random vector]] where each component is a [[normal distribution]].

$$
\mathbf{X} \sim \mathcal{N}_k(\boldsymbol{\mu}, \mathbf{\Sigma})
$$

We may always choose to express a joint normal as an affine transform of standard iid normals.

$$
\mathbf{X} \equiv \mathbf{A}\mathbf{Z} + \boldsymbol{\mu},
$$

in which case $\mathbf{\Sigma} = \mathbf{A}\mathbf{A}^\mathsf{T}$.

$$
f(\mathbf{x}) = \frac{1}{\sqrt{(2\pi^k)} |\mathbf{\Sigma}| }\exp\left( -\frac{1}{2}\left(\mathbf{x} - \boldsymbol{\mu}\right)\^\mathsf{T}\mathbf{\Sigma}^{-1}\left(\mathbf{x} - \boldsymbol{\mu}\right) \right)
$$