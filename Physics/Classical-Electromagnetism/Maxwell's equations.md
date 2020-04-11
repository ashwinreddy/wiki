Maxwell's equations describe how to create electric field $\vec{E}$ and magnetic field $\vec{B}$ using an electric charge density $\rho$ and current vector $\vec{\jmath}$.

|Name|Differential Form|Integral Form|
|-----|-----------------|-------------|
|Gauss's law|$\vec\nabla \cdot \vec{E} = \rho/\varepsilon_0$|$\oint_S \vec{E}\cdot\dd{\vec{A}} = Q/\varepsilon_0$|
|No magnetic monopole|$$\vec\nabla \cdot \vec{B} = 0$$|$\oint_S \vec{B}\cdot\dd{\vec{A}} = 0$|
|Faraday's law of induction|$\vec\nabla \times \vec{E} = - \pdv{\vec{B}}{t}$|$\oint \vec{E}\cdot\dd{\vec{\ell}} = -\dv{}{t}\iint \vec{B}\cdot\dd{\vec{S}}$|
|Ampere's law|$\vec\nabla \times \vec{B} = \mu\_0 \vec{\jmath} + \frac{1}{c^2} \pdv{\vec{E}}{t}$|$\oint \vec{B}\cdot \dd{\vec{\ell}} = \mu_0 \iint \vec{\jmath}\cdot\dd{\vec{S}} +\frac{1}{c^2}\dv{}{t}\iint \vec{E} \cdot \dd{\vec{S}}$|

# Potential Equations

Using the [[Lorenz gauge|magnetic vector potential#lorenz gauge]],

$$
\nabla^2 \varphi - \frac{1}{c^2} {\partial^2 \varphi \over \partial t^2} = -\frac{\rho}{\epsilon_0}
$$

# Tensor Equations

$$
\partial_\mu F^{\mu\nu} = J^\nu
$$

$$
\partial_{[\mu}F_{\nu\lambda]} = 0
$$

