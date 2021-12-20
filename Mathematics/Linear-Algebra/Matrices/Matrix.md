A **matrix** is just a collection of objects, typically numbers, organized in a grid of rows and columns. When we say an $m \times n$ matrix, we mean $n$ rows and $m$ columns. It is also useful to imagine a matrix as holding $n$ row vectors or $m$ column vectors.

$$
A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}
$$

What makes matrices useful is [[matrix multiplication]].

Note that if $A \in \mathbb{R}^{m \times n}$, then it is really a [[linear map]] $A: \mathbb{R}^n \to \mathbb{R}^m$ since it can take in a vector $\vec{v} \in \mathbb{R}^n$ and spit out a vector $A(\vec{v}) \in \mathbb{R}^m$.