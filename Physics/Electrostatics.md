Let's start with

$$
\vec{E} = -\vec\nabla V
$$

Now the goal is to write Maxwell's First Equation just using the electric potential $V$.

$$
\vec\nabla\cdot\vec{E} = \frac{\rho}{\epsilon_0} \implies \vec\nabla\cdot\left(-\vec\nabla V\right) = \frac{\rho}{\epsilon_0}
$$

Recall that $\nabla^2 = \vec\nabla\cdot\vec\nabla$, so

$$
\nabla^2 V = -\frac{\rho}{\epsilon_0}
$$

An PDE of this form is known as **Poisson's equation**. If we look at the special case where $\rho$ is zero, then we are looking at **Laplace's equation**.


---

Because the magnetic force is defined as a cross product, it is not conservative. However, we can artificially construct the concept of potential for magnetism using what's known as the **vector potential**. Recall Maxwell's Third Equation:

$$
\vec\nabla\cdot\vec{B} = 0
$$

From the identity $\vec\nabla\cdot\left(\vec\nabla\times\vec{A}\right)=0$, we can decide to represent $\vec{B}$ as the curl of a vector field $\vec{A}$, our vector potential. Notice, however, that $\vec\nabla\cdot\vec{A}$ is free to be anything we like. Picking the value for it is known as **fixing the gauge**. 
