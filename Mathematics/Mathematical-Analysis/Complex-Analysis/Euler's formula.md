**Euler's formula** relates trigonometric functions and the exponential function.

\begin{equation}
e^{ix} = \overbrace{\cos x + \iota \sin x}^{\text{unit circle}} \tag{Euler}
\end{equation}

This idea can be more dramatically explained with a graph

[[https://i0.wp.com/peterjamesthomas.com/wp-content/uploads/2017/03/s1-tangent-space.png]]


The fact that complex numbers can be [[represented as a matrix|complex number#as-a-matrix]] suggests that we can also write Euler's formula as relating a [[matrix exponential]] of a [[skew-symmetric matrix]] and a [[rotation matrix]].

$$
\exp \left({\begin{bmatrix}0 & -x \\ x & 0\end{bmatrix}}\right) = \begin{bmatrix}\cos x & -\sin x \\ \sin x & \cos x\end{bmatrix}
$$

[[https://upload.wikimedia.org/wikipedia/en/d/d0/Euler%27s_formula_commutative_diagram.png|align=center]]

# Proof

Euler's original proof simply showed this using [[Maclaurin series|Taylor series#Maclaurin-series]] for [[sine]] and [[cosine]].