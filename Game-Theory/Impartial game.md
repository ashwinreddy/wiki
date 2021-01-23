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

For an impartial, progressively bounded combinatorial game, let $\mathscr{N}$ and $\mathscr{P}$ be the set of next and previous states.

\begin{equation}
X = \mathscr{N} \cup \mathscr{P}.
\end{equation}

## Proof

Let $\rho_i$ and $\eta_i$ be the set of 