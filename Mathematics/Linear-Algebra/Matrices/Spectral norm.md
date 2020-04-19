The **spectral norm** is a [[matrix norm]]

\begin{align}
||A||\_2 & \triangleq \max\_{\lVert \vec{x} \rVert\_2 = 1} \lVert A \vec{x} \rVert_2 \\\\\
&= \max\_{\lVert \vec{x} \rVert\_2 = 1}\sqrt{\vec{x}^\top A^\top A \vec{x}} \\\\\
&= \sqrt{\max_i \lambda_i (A^\top A) } \\\\\
&= \max_i \sigma_i (A)
\end{align}

Using [[Rayleigh quotient]]

> The most a matrix can stretch a vector is by its maximum singular value.