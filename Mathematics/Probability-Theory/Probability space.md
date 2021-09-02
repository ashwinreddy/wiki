A **probability space** is a triple $(\Omega, \mathcal{F}, \mathbb{P})$ with $\Omega$ a [[sample space]], $\mathcal{F} \subseteq \mathscr{P}(\Omega)$ a collection of **events** (technically, a [[σ-algebra]] over $\Omega$), and $\mathbb{P}$ a [[probability measure]]. They must satisfy the [[Kolmogorov axioms]].

The elements of $\mathcal{F}$ are called "events." Because $\mathcal{F}$ is a $\sigma$-algebra, the (countable) complements, unions, and intersections of events must also be an event.

The probability measure $\mathbb{P}: \mathcal{F} \to [0,1]$ assigns probabilities to events.

# Sample Space Choice

There's flexibility in our choice of $\Omega$ and $\mathcal{F}$. For a coin flip, $\Omega$ could be the configuration space of atoms in the universe. In general, we should just pick the simplest choice with high enough resolution for the problem at hand.

# Examples

Say you flip a coin. Then $\Omega = \\{ \mathsf{Heads}, \mathsf{Tails} \\}$, and we can take $\mathcal{F}$ to be the [[power set]] of $\Omega$:

$$
\mathcal{F} = \big \\{ \emptyset, \\{\mathsf{Heads}\\}, \\{\mathsf{Tails}\\}, \\{ \mathsf{Heads}, \mathsf{Tails} \\} \big \\}.
$$

Then, a valid probability measure could have

\begin{align\*}
\mathbb{P} \big (\\{ \mathsf{Heads} \\} \big ) &= p \\\\
\mathbb{P} \big( \\{ \mathsf{Tails} \\} \big) &= 1-p \\\\
\mathbb{P} \big( \emptyset \big) &= 0 \\\\
\mathbb{P} \big( \\{ \mathsf{Heads}, \mathsf{Tails} \\} \big) &= 1
\end{align\*}

---

Say you flip two coins. Then $\Omega = \\{ HH, HT, TH, TT \\}$. We could have $$\mathcal{F} = \\{\emptyset, A := \text{First toss heads}, B := \text{First toss tails}, \Omega \\}.$$ Then, $\mathbb{P}(A) = p$ and $\mathbb{P}(B) = 1-p$ is fine. 

Or, we could have $P(HH) = pq$, $P(HT) = p(1-q)$, $P(TH) = (1-p)q$, $P(TT) = (1-p)(1-q)$.