A **rotation matrix** is a [[square matrix]] $A$ that represents a rotation in the sense that $x \mapsto Ax$ calculates the coordinates of the rotated vector.

# 2D

In 2D, a rotation matrix for angle $\theta$ is given by
$$
R(\theta) = \begin{bmatrix}
\cos \theta & - \sin\theta \\\\\
\sin\theta & \cos\theta
\end{bmatrix}
$$

We can interpret this as a [[complex number#matrix-construction]]

$$
R = I \cos\theta + i\sin\theta
$$


$$
R =  \lim_{n \to \infty}\left(I + \iota\frac{\theta}{n}\right)^n \tag{Generator Form}
$$

In fact, [[exponential map]]