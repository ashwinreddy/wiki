The **circle group** $\mathbb{T}$ is an abelian [[Lie group]] where the elements are plane rotations and the operation is composition. Its elements are the set of points on a unit circle with group action as rotation. Because of its simplicity, it can be represented in a variety of equivalent ways.

\begin{equation}
\mathbb{T} \cong \operatorname{SO}(2) \cong \operatorname{U}(1)
\end{equation}

[[_TOC_]]

# Representations

## SO(2)

SO(2) is a [[one-parameter group]] given by

\begin{equation}
R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\\\\ \sin\theta & \cos\theta \end{bmatrix}
\end{equation}

because $R(\alpha + \beta) = R(\alpha)R(\beta)$.

## U(1)

U(1) is given by unit complex numbers.

# [[Lie algebra]]

The Lie algebra is given by the one-dimensional vector space $\\{ \iota \theta: \theta \in \RR \\}$ with trivial bracket because the group is abelian. This corresponds to a skew-symmetric matrix

\begin{equation}
\iota\theta\longleftrightarrow 
\begin{bmatrix}
0 & -\theta \\\\\ \theta & 0
\end{bmatrix} 
\end{equation}

The exponential function takes us from the algebra to the group, as [[Euler's formula]] tells us.

\begin{equation}
\exp {\iota \theta} = R(\theta)
\end{equation}