A **Hilbert space** $\mathscr{H}$ is a [[vector space]] with an [[inner product]] (along with some more conditions).

# Quantum Mechanics

$$
\langle f \mid g \rangle \equiv \int_a^b f(x)^* g(x) \dd{x}
$$


Normalized
: A ket $| a \rangle$ is normalized if $\langle a \mid a \rangle = 1$.

Orthogonal
: Two kets $|a \rangle$ and $|b \rangle$ are orthogonal if $\langle a \mid b \rangle = 0$.

Orthonormal
: A set of kets $| a \rangle_n$ is orthonormal if distinct kets are orthogonal and every ket is normalized. 

Complete
: A set of kets $| a \rangle_n$ is complete if for any $| v \rangle \in \mathscr{H}$, we have $c_n \in \mathbb{C}$ such that $| v \rangle = \sum_{n=1} c_n | a \rangle_n$


Suppose you have an orthonormal and complete set of kets. If you want to construct $| v \rangle$, then you can do

$$
c_n = {}_n\langle a \mid v \rangle
$$