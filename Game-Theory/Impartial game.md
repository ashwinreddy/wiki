An **impartial game** is a [[combinatorial game]] whose [[set]] of moves is independent of player. Chess is _not_ an impartial game since the players control mutually exclusive pieces.

# N and P states

N state
: A position is an N state if a player starting there can ensure a win.

P state
: A position is a P state if the previous player can ensure a win.

Interestingly,

1. If a state is N, it must lead to at least one P state; there must be _some_ winning strategy you can employ.
2. If a state is P, it must lead to all N states. No matter what you do, the next player _can_ force a win if they want.


Assume that if you start from a terminal position, you lose.

# Theorem

For an impartial, progressively bounded combinatorial game, let $N$ and $P$ be the set of next and previous states.

\begin{equation}
X = N \cup P.
\end{equation}

## Proof

Let $\rho_i$ and $\eta_i$ be the set of $P$ and $N$ states respectively such that starting from there, the game ends in at most $i$ steps. If $\chi_i$ is defined similarly, then

\begin{align\*}
P &= \bigcup_{i} \rho_i \\\\
N &= \bigcup_{i} \eta_i \\\\
X &= \bigcup_{i} \chi_i
\end{align\*}

Thus, it will suffice to show that $\chi_i = \rho_i \cap \eta_i$. To see that,

\begin{align}
\bigcup_i \chi_i &= \bigcup_i \left( \rho_i \cup \eta_i \right) \\\\
&= \left(\bigcup_i \rho_i \right) \cup \left(\bigcup_i \eta_i\right) \\\\
&= \rho \cup \eta
\end{align}