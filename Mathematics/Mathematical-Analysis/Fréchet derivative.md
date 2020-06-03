The **Frechet derivative** allows us to take derivatives for $f: \RR^n \to \RR^m$. The derivative $D f_x$ is given by the [[linear map]] $A_x: \RR^n \to \RR^m$ such that

$$
\lim_{ \lVert h \rVert \to 0 } \frac{\lVert f(x + h) - f(x) - A_x(h) \rVert}{ \lVert h \rVert } = 0
$$

# Correspondences

* The Frechet derivative of a function $\RR \to \RR$ is $A_x(h) = f'(x)\cdot h$.
* The Frechet derivative of a vector-valued function is the gradient, similar to above.
* The Frechet derivative of a multivariable function is the [[directional derivative]]