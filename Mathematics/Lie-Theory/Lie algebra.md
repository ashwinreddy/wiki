A **Lie algebra** over $k$ is a $k$-[[vector space]] $V$ along with a **Lie bracket**.

# Bracket

Lie bracket / commutator
: A [[bilinear map]] $[\cdot,\cdot]: V \times V \to V$ satisfying the following for all $x, y, z \in V$:

* $[x, x] = 0$ for all $x \in V$
* \begin{equation}[x, [y, z]] + [y, [z,x]] + [z, [x,y]]=0 \tag{Jacobi identity}\end{equation}
* $[x,y] = -[y,x]$


# Ideal

An **ideal** of $L$ is a subspace $I$ such that $[x,y] \in I$ for all $x \in L, y \in I$. Examples include:

* $\mathfrak{sl}(n,F)$ is an ideal of $\mathfrak{gl}(n, F)$

An ideal is automatically a [[Lie subalgebra]], though the converse need not be true.

# Homomorphism

A **Lie algebra homomorphism** is a linear map between Lie algebras that is compatible with the Lie bracket.

