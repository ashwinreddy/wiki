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
X &= \bigcup_i \chi_i \\\\
&= \bigcup_i \left( \rho_i \cup \eta_i \right) \\\\
&= \left(\bigcup_i \rho_i \right) \cup \left(\bigcup_i \eta_i\right) \\\\
&= \rho \cup \eta
\end{align}

Note that $\rho_0 = \rho_1$ consists of all terminal states. On the other hand, $\eta_0 = \emptyset$ and $\eta_1$ is the set of all states that lead to the terminal state in at most 1 step.

<<Warn("There's a good counterexample in your Stat 155 Notability notes.")>>

Now, we can use induction since we clearly have $\chi_0 = \rho_0 \cup \eta_0$. Let's take $x \in X_i \setminus X_{i-1}$, meaning it takes exactly $i$ steps. We want to show that $x \in \rho_i$ or $x \in \eta_i$. To figure this out, we'll have to look at its neighbors, which we'll label $y_j$. But each of these $y_j \in X_{i-1}$. There are two cases, and both fit what we want:

1. $\forall j: y_j \in \eta_{i-1} \implies x \in \rho_i$.
2. $\exists j: y_j \in \rho_{i-1} \implies x \in \eta_i$.

