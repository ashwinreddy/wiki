The **Chinese remainder theorem** is a very useful result in number theory that allows one to reconstruct an integer $x$ given enough of its remainders w.r.t given divisors. In essence, we have a system of equations, each of the form

\begin{equation}
x \equiv a_i \mod n_i
\end{equation}

The condition is that we have $k$ pairwise coprime integers; then, we will know $x$ up to modulo the product of those integers.

# Linear Algebra analogy

One way to think about the Chinese remainder theorem is that it provides a basis with which to describe numbers up to $N$.