A **group representation** for a [[group]] $G$ and [[vector space]] $V$ is a [[homomorphism]] $\varphi: G \to \operatorname{GL}(V)$ for the [[general linear group]] of the vector space. It's a special case of [[group action]]. Basically, it's a way of mapping elements of a group to a matrix.

$$
G \to \operatorname{GL}(V) \implies G \to \left( V \to V \right) \implies G \times V \to V
$$

\begin{equation}
\varphi(g_1g_2) = \varphi(g_1) \circ \varphi(g_2)
\end{equation}

Let's say that $G$ is the [[general linear group]] $\operatorname{GL}_n(\RR)$ and our vector space is $\RR^n$. Our representation $\varphi$ could be $\varphi(A, \vec{r}) = A\vec{r}$.