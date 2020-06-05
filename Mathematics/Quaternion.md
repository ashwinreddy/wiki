**Quaternions** are an extension of [[complex numbers | complex number]] to 4 dimensions, hence the prefix "quat". The discovery of quaternions was enabled by Sir William Rowan Hamilton, who developed the multiplication rules in a eureka moment.

\begin{equation}
\label{eq:hamilton}
i^2 = j^2 = k^2 = ijk = -1 \tag{Hamilton}
\end{equation}

The set of quaternions is denoted $\mathbb{H}$ after him. Each quaternion is of the form

$$
q = \overbrace{a}^{\text{real/scalar part}} + \overbrace{b i + c j + dk}^{\text{imaginary/vector part}}
$$

For notational simplicity, we can therefore also represent $q$ as a pair $(a, \langle b, c, d\rangle)$ or by writing $q = q_0 + \vec{q}$.

# Methods

We can multiply two quaternions using Equation \ref{eq:hamilton}.

\begin{equation}
pq = p_0 q_0 - \vec{p}\cdot\vec{q} + p_0 \vec{q} + q_0 \vec{p} + \vec{p}\times\vec{q}
\end{equation}


Like complex numbers, quaternions have conjugates.

$$
\bar{q} = a - bi - cj - dk
$$

The product of a quaternion with its conjugate gives us the norm

$$
q\bar{q} = \bar{q}q = a^2 + b^2 + c^2 + d^2
$$

# Extension of complex numbers

A natural question to ask is whether we can extend $\mathbb{C}$ with another dimension. We'll introduce a new basis $j$ to get $\{1, i, j\}$. However, it's not clear what $ij$ means. We know that it must be of the form $\mathbb{R} + \mathbb{R} i + \mathbb{R}j$, so

\begin{gather}
ij = a + b i + c j \\\\\
-j = ai - b + c ij \tag{multiply by $i$} \\\\\
(ac - b) + (ab - c)i + (c^2 + 1)j = 0
\end{gather}

But there's no coefficient $v \in \RR$ such that $v^2 + 1 \neq 0$. So we need 4-dimensional numbers.

# Matrix form

A quaternion can also be written using a complex $2 \times 2$ matrix where 1 and $i$ are the same as with the matrix form for a [[complex number#as-a-matrix]].

\begin{gather}
j = \begin{bmatrix}0 & \iota \\\\\ \iota & 0\end{bmatrix} \\\\\
k = \begin{bmatrix} \iota & 0 \\\\\ 0 & -\iota\end{bmatrix}
\end{gather}
