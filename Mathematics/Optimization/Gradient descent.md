**Gradient descent** is an algorithm that tries to find the an input $a$ that minimizes a function $F$. The vanilla algorithm consists of computing the [[gradient]] and taking a step in that direction, scaled by a factor $\alpha$.

\begin{equation}
a_{n+1} = a_n - \alpha \nabla F(a_n) \tag{Update Rule}
\end{equation}