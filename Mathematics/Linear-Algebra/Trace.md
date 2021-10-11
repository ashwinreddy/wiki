The **trace** of a [[matrix]] is the [[linear map]] to its sum of its diagonal and happens to be the sum of [[eigenvalues|eigenpairs]].

\begin{equation}
\operatorname{tr}(A) = \sum_{i} A_{ii} = \sum_i \lambda_i
\end{equation}

Suppose you have an [[orthonormal basis]] $(\varphi_n)_n$. Then the trace is

$$
\operatorname{tr} K = \sum_n \langle \varphi_n , K \varphi_n \rangle
$$

# Properties

* $\operatorname{trace}(A) = \operatorname{trace}\left(A^\mathsf{T}\right)$
* $\operatorname{trace}(A+B) = \operatorname{trace}(A) + \operatorname{trace}(B)$.
* The trace is invariant under cyclic permutations: $\operatorname{trace}(ABCD) = \operatorname{trace}(BCDA) = \operatorname{trace}(CDAB) = \operatorname{trace}(DABC)$