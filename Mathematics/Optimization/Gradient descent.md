**Gradient descent** is an algorithm that tries to find the vector $\vec{a}$ that minimizes a function $F$. The vanilla algorithm consists of computing the [[gradient]] and taking a step in that direction.

\begin{equation}
\vec{a}_{n+1} = \vec{a}_n - \alpha \vec\nabla F(\vec{a}_n) \tag{Update Rule}
\end{equation}