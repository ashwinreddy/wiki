The **birthday paradox** is about the suprisingly high rate of growth of probability that any two people in a room of $n$ share a birthday with respect to $n$. 

Define events

$$
A_i = \\{ \text{person } i \text{ doesn't share birthday with any person }j=1, \dots, i-1 \\}.
$$

Then,

\begin{align\*}
\mathbb{P}(\text{No 2 people share birthday}) = \mathbb{P}\left( \bigcap_{i \geqslant 1}^n A_i \right)
\end{align\*}

We assume every birthday is equiprobable. The sample space has size $365^n$ since each person can have any birthday. But we are only in the permutations of the 365 will we have _different_ birthdays for everyone. The complement of our event is

$$
p(n) = 1- \frac{ \_{365}P_{n} }{365^n}
$$