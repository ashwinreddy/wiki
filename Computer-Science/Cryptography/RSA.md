Each person has public key, which everybody knows and a private key which only they know. Alice can send messages to Bob by encrypting them with his public key, and he can decrypt them with his private key. 

Here's how to generate a public key:

- pick two large primes $p$ and $q$. Let $N=pq$.
- pick a number $e$ which is relatively prime to $(p-1)(q-1)$.
- the public key is $(N, e)$

The private key is the inverse of $e\, \mathrm{mod}\, (p-1)(q-1)$.

Alice wants to send a message $x\,\mathrm{mod}\, N$ to Bob. She sends him $y=E(x)=x^e\,\mathrm{mod}\, N$ and Bob will compute $D(y)= y^d \,\mathrm{mod}\, N$.

\begin{gather}
D(y) = y^d \,\mathrm{mod}\, N \\\
D(x^e\,\mathrm{mod}\, N) = (x^e\,\mathrm{mod}\, N)^d\,\mathrm{mod}\, N
\end{gather}