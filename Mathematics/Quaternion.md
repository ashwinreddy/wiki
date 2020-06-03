**Quaternions** are an extension of [[complex number]]s, useful for describing rotations in 3D. They can be thought of as a [[vector space]] over $\RR^4$ where the elements are given by

$$
q = a + b i + c j + dk
$$

Quaternion multiplication is defined by the following equation, discovered by William Rowan Hamilton. The set of quaternions is denoted $\mathbb{H}$ after him.

\begin{equation}
i^2 = j^2 = k^2 = ijk = -1
\end{equation}

Like complex numbers, quaternions have conjugates.

$$
\bar{q} = a - bi - cj - dk
$$

The product of a quaternion with its conjugate gives us the norm

$$
q\bar{q} = \bar{q}q = a^2 + b^2 + c^2 + d^2
$$

# Matrix form

A quaternion can also be written using a complex $2 \times 2$ matrix where 1 and $i$ are the same as with the matrix form for a [[complex number#as-a-matrix]].

$$
j = \begin{bmatrix}0 & i \\ i & 0\end{bmatrix}, k = \begin{bmatrix} i & 0 \\ 0 & -i\end{bmatrix}
$$.



# Unit quaternion

A unit quaternion is one with norm unity. Unit quaternions belong to the [[special unitary group]] $SU(2)$.

# Rotations

We start with a vector $v$ in the [[subspace]] $\RR i + \RR j + \RR k$