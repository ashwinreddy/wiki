Gradient descent is an algorithm for finding the minimum of an unconstrained problem.


# Newton's Method

Can use the [[Hessian]],

$$
\vec{x}_{k+1} \leftarrow \vec{x}_k - \left(\nabla^2 f(\vec{x}_k) \right)^{-1} \vec\nabla f(\vec{x}_k)
$$