## Vector Potential

The vector potential $\vec{A}$ is such that the result of its curl is $\vec{B}$. We can do this because of the no monopole rule (i.e. since $\vec{B}$ is incompressible, it can be the curl of something else).

\begin{equation}
\vec{B} = \vec\nabla\times\vec{A}
\end{equation}


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
\vec{∇}×\vec{E} = \frac{-\partial\vec{B}}{\partial t} = -\frac{\partial}{\partial t}\left[\vec{\nabla}\times\vec{A}\right] \implies \vec\nabla\times\left[\vec{E} + \dot{\vec{A}}\right] = - \vec\nabla \phi
$$