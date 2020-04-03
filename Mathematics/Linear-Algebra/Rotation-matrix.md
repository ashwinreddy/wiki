A **rotation matrix** is a matrix that performs a rotation in Euclidean space.

\begin{equation}
R(\vartheta) = \begin{bmatrix}\cos \vartheta &amp; -\sin\vartheta \\\ \sin\vartheta &amp; \cos\vartheta
\end{bmatrix}
\end{equation}

**Proof**. Let $v = \langle \cos \alpha, \sin \alpha \rangle$. Then,

\begin{align}
R(\vartheta)v &amp;= \begin{bmatrix}\cos \vartheta &amp; -\sin\vartheta \\\ \sin\vartheta &amp; \cos\vartheta
\end{bmatrix}\begin{bmatrix}\cos\alpha \\\ \sin\alpha\end{bmatrix} \\\
&amp;= \begin{bmatrix}\cos\vartheta \cos\alpha - \sin\theta\sin\alpha \\\ \sin\vartheta\cos\alpha + \cos\theta\sin\alpha \end{bmatrix} \\\
&amp;= \begin{bmatrix}\cos(\alpha+\vartheta) \\\ \sin(\alpha+\vartheta)\end{bmatrix}
\end{align}