The **bra-ket notation** is a notation used in quantum mechanics. Here, a [[vector]] is called a **ket** $\mid a \rangle \equiv \vec{a}$. A **bra** is written as $\langle a \mid$.

The [[inner product]] of kets $| a \rangle$ and $| b \rangle$ is written $\langle a \mid b \rangle$. A linear operator $T$ will act on a ket just like $T \mid a \rangle$.

Normalized
: A ket $| a \rangle$ is normalized if $\langle a \mid a \rangle = 1$.

Orthogonal
: Two kets $|a \rangle$ and $|b \rangle$ are orthogonal if $\langle a \mid b \rangle = 0$.

Complete
: A set of kets ${}_n| a \rangle$ is complete if for any $| v \rangle \in \mathscr{H}$, we have $c_n \in \mathbb{C}$ such that $| v \rangle = \sum_{n=1} c_n | a_n \rangle$

Suppose you have a complete set of kets. If you want to construct $| v \rangle$, then you can do

$$
c_n = {}_n\langle a \mid v \rangle
$$