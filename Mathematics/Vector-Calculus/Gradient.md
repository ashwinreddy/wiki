The **gradient** of a [[function]] $f: \mathbb{R}^n \to \mathbb{R}$ is given by collecting all the [[partial derivatives|partial derivative]] into a [[vector]].

$$
\left(\vec\nabla f\right)_{i} = {\partial f \over \partial x_i }
$$

# Examples

$$
\vec\nabla (\langle \vec{x}, \vec{a} \rangle) =  \vec{a}
$$

$$
\vec\nabla\lVert \vec{x} \rVert^2 = \vec\nabla (\langle \vec{x}, \vec{x} \rangle) =  2\vec{x}
$$

$$
\vec\nabla \left[ \lVert A \vec{x} \rVert^2_2 \right] = \vec\nabla\left[ \left(A\vec{x}\right)^\top A\vec{x} \right] = \vec\nabla\left[ \vec{x}^\top A^\top A\vec{x} \right] = 2A^\top A\vec{x}
$$

$$
\vec\nabla \left( \vec{x}^\top A \vec{x} \right) = (A+A^\top)\vec{x}
$$
