The **Hessian matrix** is the natural analog of second derivatives for a scalar-valued function $f: \RR^n \to \RR$ in the form of a matrix. 

$$
H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}
$$

For example, if $f(x) = x^\mathsf{T}Ax$, then the Hessian is exactly $A$. Otherwise, it's the best choice of $A$ at a point for the function.