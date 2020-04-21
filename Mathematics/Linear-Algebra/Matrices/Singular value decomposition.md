**Singular value decomposition (SVD)** is a [[matrix decomposition]] that can be applied to any $m \times n$ matrix $A$ of rank $r$ and can be thought of inuitively as an extension of [[eigendecomposition]]. SVD comes in many variants. The full SVD decomposes $A$ using an $m\times m$ matrix $U$, $n\times n$ matrix $V$, $m \times n$ [[diagonal matrix]] $\Sigma$ with $U$ and $V$ [[orthogonal|orthogonal matrix]].

\begin{equation}
\label{eq:full-svd}
A = U\Sigma V^\top
\end{equation}

# Singular Values

There are $\operatorname{rank} A$ singular values $\sigma_i > 0$.

# Singular Vectors

$V$ represents the eigenvectors of $A^\top A$.

$$
A^\top A = V\Sigma^\top U^\top U \Sigma V^\top = V \Sigma^\top \Sigma V^\top
$$

$U$ represents the eigenvectors of $AA^\top$.

$$
AA^\top = U\Sigma V^\top V \Sigma^\top U^\top = U\Sigma \Sigma^\top U^\top
$$

# Range and Null Space

|Space|Matrix|Elements|Intuition|
|-----|------|--------|----------|
|Column space|$U$|First $r$ columns|$A\vec{x} = \sum\_{i=1}^r \sigma\_i \vec{u}\_i \vec{v}\_i^\top\vec{x} = \sum\_{i=1}^r   \langle \sigma\_i\vec{v}\_i, \vec{x} \rangle \vec{u}_i$|
|Row space|$V$|First $r$ columns|$A^\top\vec{x} = \sum\_{i=1}^r \sigma\_i \vec{v}\_i \vec{u}\_i^\top\vec{x} = \sum\_{i=1}^r   \langle \sigma\_i\vec{u}\_i, \vec{x} \rangle \vec{v}_i$|
|Null space|$V$|Last $n-r$ columns|[[FTLA|Fundamental theorem of linear algebra]] says row space and null space are complements|

The column space of $A$ comes from the first $r$ columns of $U$ (i.e. $\vec{u}_1,\dots,\vec{u}_r$). As a quick proof,



The null space of $A$ comes from the last columns of $V$ (i.e. right singular vectors $\vec{v}_{r+1}, \dots, \vec{v}_n$).

# Connection to Eigenpairs

Notice an alternate way of writing Equation \ref{eq:full-svd} is similar to [[diagonalizable matrix]]

$$
AV = U \Sigma
$$

# Variants


Every variant, however, of SVD is just a description of

$$
A = \sum_{i=1}^r \sigma_i \vec{u}_i \vec{v}_i^\top
$$


The dimensions of these matrices depend on the variant.

|Type|$U$|$\Sigma$|$V$|
|----|---|--------|----|
|Full|orthogonal, $m \times m$|$m \times n$|orthogonal, $n \times n$|
|Compact|$m \times r$|$r \times r$|$n \times r$|


# Computation

You may choose to use either $A^\top A$ or $AA^\top$ to find the SVD. In either case, the first step is to find the eigenvalues of your chosen square matrix. Next, you need to find the eigenvectors $\lambda_i$. Collect the non-negative eigenvalues (if you find any negative $\lambda$, you messed up). 


|Step|$A^\top A$|$AA^\top$|
|----|-----------|--------|
|1. Find eigenvalues|||
|2. Find one set of eigenvectors|$\vec{v}_i$|$\vec{u}_i$|
|3. Obtain the other set by computation|$\vec{u}_i = \frac{1}{\sigma_i}A\vec{v}_i$|$\vec{v}_i = \frac{1}{\sigma_i}A^\top \vec{u}_i$|

