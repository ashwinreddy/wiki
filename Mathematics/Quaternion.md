**Quaternions** are an extension of [[complex number]]s used for describing rotations in 3D (i.e. the [[special orthogonal group]] $SO(3)$). 

$$
i^2 = j^2 = k^2 = ijk = -1
$$

Just as [[complex number]]s can be represented using matrices, we can extend by defining

\begin{gather\*}
j = \begin{bmatrix}0 & \iota \\\\\ \iota & 0\end{bmatrix} \\\\\
k = \begin{bmatrix}\iota & 0\\\\\ 0 & -\iota\end{bmatrix} \\\\\
\end{gather\*}

In essence, we've shown that quaternions are isomorphic to [[special unitary group]] $SU(2)$.

<<Warn("huh? how?")>>

# As Matrices

We can represent a quaternion $q$ as

$$
q = \begin{bmatrix} a + \iota d & -b-\iota c \\ b - \iota c & a - \iota d\end{bmatrix}
$$