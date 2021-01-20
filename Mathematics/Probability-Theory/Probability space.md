A **probability space** is a triple $(\Omega, \mathcal{F}, \mathbb{P})$ with $\Omega$ a [[sample space]], $\mathcal{F}$ a suitable [[σ-algebra]], and $P$ a [[probability measure]]. They must satisfy the [[Kolmogorov axioms]].

The elements of $\mathcal{F}$ are called "events." Because $\mathcal{F}$ is a $\sigma$-algebra, the complements, unions, and intersections of events must also be an event.

The probability measure $\mathbb{P}: \mathcal{F} \to [0,1]$ assigns probabilities to events.

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