**Matrix multiplication** is an operation between an $\ell \times m$ [[matrix]] and $m \times n$ matrix.

\begin{equation}
\cdot : M_{\ell \times m}(F) \times M_{m \times n}(F) \to M_{\ell \times n}(F)
\end{equation}

I like to remember this by writing out the following mnemonic:

$$
(\ell \times m) \times (m \times n) = (\ell \times n)
$$

Formally, the operation is defined by the equation below, but it tends not to be helpful for intuition.

\begin{equation}
\left(AB\right)\_{ij} = \sum\_{k=1}^n A_{ik}B_{kj} 
\end{equation}

It generalizes the [[dot product]] and [[inner product]].

# Properties

* It is not a commutative operator.

# Computation

If both matrices are $n \times n$ then this naive [[algorithm]] computation has [[time complexity]] $\order{n^3}$.