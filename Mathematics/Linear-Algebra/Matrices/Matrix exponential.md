The **matrix exponential** is a generalization of [[exponential function]] to [[square matrices|square matrix]] using [[matrix power]].

$$
e^X \triangleq \sum_{k=0}^\infty \frac{1}{k!} X^k
$$

As usual, if $XY=YX$, then the algebra works out the same and

$$
e^X e^Y = e^{X+Y}
$$


The fact that complex numbers can be [[represented as a matrix|complex number#as-a-matrix]] suggests that we can also write Euler's formula as relating a [[matrix exponential]] of a [[skew-symmetric matrix]] and a [[rotation matrix]].

$$
\exp \left({\begin{bmatrix}0 & -x \\ x & 0\end{bmatrix}}\right) = \begin{bmatrix}\cos x & -\sin x \\ \sin x & \cos x\end{bmatrix}
$$