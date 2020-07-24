A **rotation matrix** is a [[square matrix]] $A$ that represents a rotation in the sense that $x \mapsto Ax$ calculates the coordinates of the rotated vector.

# 2D

In 2D, a rotation matrix for angle $\theta$,
$$
R(\theta) = \begin{bmatrix}
\cos \theta & - \sin\theta \\\\\
\sin\theta & \cos\theta
\end{bmatrix}
$$

Or, we just write using $i = \begin{bmatrix}0 & -1 \\\\\ 1 & 0 \end{bmatrix}$,

$$
R = I \cos\theta + i\sin\theta
$$