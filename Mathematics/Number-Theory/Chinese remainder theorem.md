The **Chinese remainder theorem** is a very useful result in number theory that allows one to reconstruct an integer $x$ (up to a modulus) given enough of its remainders w.r.t given divisors. In essence, given a system of equations with each of the form

\begin{equation}
x \equiv a_i \mod n_i,
\end{equation}

the CRT tells us we can know $x$ up to modulus $N = \prod_i n_i$ if the $n_i$ are pairwise coprime integers.

# Linear Algebra analogy

One way to think about the Chinese remainder theorem is that it provides a [[basis]] with which to describe numbers up to $N$.