A **subtraction game** is a [[combinatorial game]] involves reducing the number of chips in a game subtractively.

# Example

Starting with a pile of $x \in \mathbb{N}$ chips, two players alternate taking 1 to 4 chips. Removing the last chip is a win. Note that $B(x) = x$ since at least 1 chip is removed each step.

Suppose there are 5 chips. Then, player A cannot take the last chip, no matter what they do. Player B is guaranteed to win. If there are 6 chips, then player A can force a win by just taking 1 chip.

# [[Sprague-Grundy theorem]]

For allowed subtractions $\\{1, 2, \dots, k\\}$, the function is

\begin{equation}
g(x) = x \mod (k - 1)
\end{equation}

Clearly, the 0 state is losing. What this function tells us is that any state is good except for a multiple of $k-1$, which is a losing one.