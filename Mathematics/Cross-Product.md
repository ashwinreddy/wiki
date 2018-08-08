The **cross product** takes two vectors in $\mathbb{R}^3$ and returns a vector that is orthogonal to both (whose direction is given by the right hand rule) and whose magnitude is equivalent to the area spanned by the two vectors.

# Matrix Representation

If we define

$$
a_{[\times]} = \begin{bmatrix}
0 & -a_3 & a_2 \\\
a_3 & 0 & - a_1 \\\
-a_2 & a_1 & 0
\end{bmatrix}
$$

Then 

$$
\vec{a}_{[\times]}\vec{b} = \vec{a}\times\vec{b}
$$

# Levi-Civita Tensor

$$
\epsilon_{ijk} = \begin{cases}
1 & ijk \text{ an even permutation of } (1,2,3) \\\
-1 & ijk \text{ an odd permutation of } (1,2,3) \\\
0 & i = j \lor i = k \lor j = k
\end{cases}
$$