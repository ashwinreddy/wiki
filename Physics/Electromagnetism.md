# Magnetism

## Vector Potential

The vector potential $\vec{A}$ is such that the result of its curl is $\vec{B}$. We can do this because of the no monopole rule (i.e. since $\vec{B}$ is incompressible, it can be the curl of something else).

\begin{equation}
\vec{B} = \vec\nabla\times\vec{A}
\end{equation}

$$
\vec{A}\left(\vec{r}\right) = \frac{1}{4\pi}\int_{\mathbb{R}^3}\frac{\vec\nabla_y\times\vec{B}\left(\vec{y}\right)}{|\vec{r}-\vec{y}|}\mathrm{d}^3\vec{y}
$$

But you can pick any $\vec{A}$, $\vec{A}+\vec\nabla m$. The non-uniqueness means we have to fix/pick a gauge.


## Electrostatics

This only works if there's no changing magnetic field (there's a curl then):
$$
\vec{E} = -\vec\nabla V
$$


$$
\vec\nabla\cdot\vec{E} = \frac{\rho}{\epsilon_0} \implies \vec\nabla\cdot\left(-\vec\nabla V\right) = \frac{\rho}{\epsilon_0}
$$

Poisson's equation for electrostatics is 

\begin{equation}
\nabla^2 V = -\frac{\rho}{\epsilon_0}
\end{equation}

Solution:
$$
V(r) = \frac{Q}{4\pi\epsilon_0 r}
$$

## Reformulation of Maxwell's Equation

$$
\vec{E} = -\vec\nabla V - \frac{\partial \vec{A}}{\partial t}
$$

$$
\vec{∇}×\vec{E} = \frac{-\partial\vec{B}}{\partial t} = -\frac{\partial}{\partial t}\left[\vec{\nabla}\times\vec{A}\right] \implies \vec\nabla\times\left[\vec{E} + \dot{\vec{A}}\right] = - \vec\nabla \varphi
$$

$$
\nabla^2 \varphi - \frac{1}{c^2}\frac{\partial^2 \varphi}{\partial t^2} = -\frac{\rho}{\epsilon_0}
$$


The gauge

$$
\vec\nabla\cdot\vec{A} = -\frac{1}{c^2}\dot{\varphi}
$$

is called the Lorentz gauge

# Electromagnetism

Lorentz force:

$$
\vec{F} = q\left[\vec{E} + \vec{v}\times\vec{B}\right]
$$