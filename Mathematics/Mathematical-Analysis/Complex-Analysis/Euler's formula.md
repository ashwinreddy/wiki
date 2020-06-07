**Euler's formula**

\begin{equation}
e^{ix} = \cos x + \iota \sin x \tag{Euler}
\end{equation}

The fact that complex numbers can be [[represented as a matrix|complex number#as-a-matrix]] suggests that we can also write Euler's formula as relating a [[matrix exponential]] of a [[skew-symmetric matrix]] and a [[rotation matrix]].

$$
\exp \left({\begin{bmatrix}0 & -x \\ x & 0\end{bmatrix}}\right) = \begin{bmatrix}\cos x & -\sin x \\ \sin x & \cos x\end{bmatrix}
$$

[[https://upload.wikimedia.org/wikipedia/en/d/d0/Euler%27s_formula_commutative_diagram.png]]

# Proof

Euler's original proof simply showed this using [[Maclaurin series|Taylor series#Maclaurin-series]] for [[sine]] and [[cosine]].