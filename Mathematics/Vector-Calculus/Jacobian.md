The **Jacobian** of a function $f: \RR^n \to \RR^m$ is a [[matrix]]

$$
[\mathbf{J}_f]_{ij} = \pdv{f_i}{x_j}
$$

We can then do a first-order approximation with a [[Taylor series]]

$$
f(\vec{x} + \delta\vec{x}) \approx f(\vec{x}) + \mathbf{J}(\vec{x}) \delta{\vec{x}}
$$