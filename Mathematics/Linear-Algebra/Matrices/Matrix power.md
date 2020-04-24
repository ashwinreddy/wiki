The **matrix power** $A^n$ for a [[matrix]] $A$ is the matrix product of $n$ copies of $A$.

Practically, $A^n$ can be infeasible to compute for large $n$. We can employ a diagonalization

$$
A = VDV^{-1}
$$

Then,

$$
A^n = (VDV^{-1})^n = VD^nV^{-1}
$$

Of course, it is simple to take the matrix power of a diagonal matrix: just raise the diagonals to the power.